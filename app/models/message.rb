class Message < ApplicationRecord
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

  def validates_membership
    return if ChannelMembership.exists?(
      member_id: author_id,
      channel_id: channel_id
    )
    errors[:author] << 'Author must be a member of the channel!'
  end
end
