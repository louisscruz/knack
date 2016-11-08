# == Schema Information
#
# Table name: channels
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  purpose        :text
#  direct_message :boolean          default(FALSE)
#  creator_id     :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Channel < ApplicationRecord
  GLOBAL_SUBJECTS = %w(general ruby rails javascript html5 css sql).freeze

  validates :name, presence: true, uniqueness: { scope: :creator_id }
  validates :direct_message, inclusion: { in: [true, false] }
  before_save :lowercase_name!
  after_create :subscribe_creator

  has_many :memberships,
           foreign_key: :member_id,
           primary_key: :id,
           class_name: 'ChannelMembership'
  has_many :members, through: :memberships
  has_many :messages,
           foreign_key: :channel_id,
           primary_key: :id,
           class_name: 'Message'
  belongs_to :creator,
             foreign_key: :creator_id,
             primary_key: :id,
             class_name: 'User'

  def self.create_direct_from_members(members, current_user)
    members.map! { |x| "@#{x}" }
    name = members.push("@#{current_user.username}").uniq.sort.join('_')
    channel = Channel.new(
      name: name,
      direct_message: true,
      creator_id: current_user.id
    )
    if channel.save
      members.map! { |x| x.delete!('@') }
      members.map { |x| User.find_by(username: x) }.each do |subscribee|
        ChannelMembership.create(
          member_id: subscribee.id,
          channel_id: channel.id
        )
      end
    end
    channel
  end

  def lowercase_name!
    name.downcase!
  end

  def subscribe_creator
    ChannelMembership.create!(
      member_id: creator_id,
      channel_id: id
    )
  end
end
