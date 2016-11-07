require 'rails_helper'

RSpec.describe Message, type: :model do
  before(:each) do
    @user = User.create!(
      username: 'test',
      email: 'test@me.com',
      password: 'password'
    )
    @user2 = User.create!(
      username: 'new_username',
      email: 'new_username@me.com',
      password: 'password'
    )
    @channel = Channel.create!(
      name: 'general',
      purpose: 'purpose',
      creator_id: @user.id
    )
    ChannelMembership.create!(
      member_id: @user.id,
      channel_id: @channel.id
    )
    Message.create!(
      body: 'this is a test body',
      author_id: @user.id,
      channel_id: @channel.id,
      edited: false
    )
  end

  describe 'validations' do
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:author_id) }
    it { should validate_presence_of(:channel_id) }

    it 'should require channel message to be written by channel member' do
      invalid_message = Message.new(
        body: 'this is a test body',
        author_id: @user2.id,
        channel_id: @channel.id,
        edited: false
      )
      expect(invalid_message.valid?).to eq(false)
    end
  end

  describe 'associations' do
    it { should belong_to(:author) }
    it { should belong_to(:channel) }
  end
end
