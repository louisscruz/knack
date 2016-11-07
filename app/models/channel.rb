# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  purpose    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  GLOBAL_SUBJECTS = %w(general ruby rails javascript html5 css sql).freeze

  validates :name, presence: true, uniqueness: { scope: :creator_id }
  validates :direct_message, inclusion: { in: [true, false] }
  before_save :lowercase_name!

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

  def self.new_direct_from_members(members, creator_id)
    name = "dm#{creator_id}_#{members.sort.join('_')}"
    Channel.new(name: name, direct_message: true, creator_id: creator_id)
  end

  def lowercase_name!
    name.downcase!
  end
end
