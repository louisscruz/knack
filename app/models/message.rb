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
  # after_commit { MessageRelayJob.perform_later(self, self.channel) }
  # after_save :handle_random_message
  validates :body, :author_id, :channel_id, presence: true
  scope :recent, -> { order('id DESC').limit(20) }

  before_validation :validates_membership

  belongs_to :author,
             foreign_key: :author_id,
             primary_key: :id,
             class_name: 'User'

  belongs_to :channel,
             foreign_key: :channel_id,
             primary_key: :id,
             class_name: 'Channel'

  def self.random_message(channel)
    exclamations = %w(whoa yikes yippee wow hurrah hurray yeah hip-hip-hooray Jeez wowza).freeze
    phrases = []
    phrases.push(exclamations.sample) if [true, false].sample
    if channel.name != 'general' && Channel::GLOBAL_SUBJECTS.include?(channel.name)
      topic = channel.name
    else
      begin
        topic = Channel::GLOBAL_SUBJECTS.sample
      end while topic == 'general'
    end
    if [true, false, false, false, false].sample
      phrases << "I'm pretty surprised..."
    end
    structure = (1..3).to_a.sample
    case structure
    when 1
      phrases.push(
        'I can hardly believe how much Louis knows about',
        topic
      )
    when 2
      phrases.push(
        'if I have any questions about',
        topic,
        "I'll be sure to ask Louis!"
      )
    when 3
      phrases.push(
        'check out what Louis can make with',
        topic,
        '!'
      )
      if (1..10).to_a.sample === 1
        phrases.push('I wish I had enough money to hire Louis right now!')
      end
    end
    phrases.join(' ')
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
        AutoMessageJob.set(wait: 1.seconds).perform_later(member, self.channel)
        return
      end
    end
  end
end
