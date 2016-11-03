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

require 'rails_helper'

RSpec.describe ChannelMembership, type: :model do
  before(:each) do
    user = User.create!(
      username: 'test',
      email: 'test@me.com',
      password: 'password'
    )
    channel = Channel.create!(
      name: 'general',
      purpose: 'purpose'
    )
    ChannelMembership.create!(
      member_id: user.id,
      channel_id: channel.id
    )
  end

  describe 'validations' do
    it { should validate_presence_of(:member_id) }
    it { should validate_presence_of(:channel_id) }
    it { should validate_uniqueness_of(:member_id).scoped_to(:channel_id) }
  end

  describe 'associations' do
    it { should belong_to(:member) }
    it { should belong_to(:channel) }
  end
end
