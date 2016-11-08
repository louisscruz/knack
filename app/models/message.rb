# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  edited     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.channel) }
  after_save :handle_random_message
  validates :body, :author_id, :channel_id, presence: true

  before_validation :validates_membership

  belongs_to :author,
             foreign_key: :author_id,
             primary_key: :id,
             class_name: 'User'

  belongs_to :channel,
             foreign_key: :channel_id,
             primary_key: :id,
             class_name: 'Channel'

  def self.generate_random_message
    topics = %w(ruby rails javascript html5 css3 typescript sql).freeze
    topic = topics.sample
    structures = [
      'wow, I wish I had enough money to hire Louis right now'
    ]
    structures[0]
  end

  def validates_membership
    return if ChannelMembership.exists?(
      member_id: author_id,
      channel_id: channel_id
    )
    errors[:author] << 'Author must be a member of the channel!'
  end

  def handle_random_message
    return if User::SUPERSTAR_USERS.include?(self.author.username)
    members = self.channel.members.shuffle #Make this more efficient by selecting a random index and then looping through all members
    members.each do |member|
      if User::SUPERSTAR_USERS.include?(member.username)
        AutoDirectMessageJob.set(wait: 1.seconds).perform_later(member, self.channel)
        return
      end
    end
  end
end
