# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord
  validates :member_id, :channel_id, presence: true
  validates_uniqueness_of :member_id, scope: :channel_id

  belongs_to :member,
             foreign_key: :member_id,
             primary_key: :id,
             class_name: 'User'
  belongs_to :channel,
             foreign_key: :channel_id,
             primary_key: :id,
             class_name: 'Channel'
end
