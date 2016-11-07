# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.create!(username: 'mary_mack',
                         email: 'test@me.com',
                         password: 'abcdefgh')
    Channel::GLOBAL_SUBJECTS.each do |topic|
      Channel.create!(
        name: topic,
        purpose: "This channel is for discussion about #{topic}",
        creator_id: @user.id
      )
    end
  end

  describe 'validations' do
    before(:each) do
      @user2 = User.create!(username: 'new_name',
                           email: 'new@me.com',
                           password: 'abcdefgh')
    end

    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should allow_value(nil).for(:password) }
    it { should validate_length_of(:password).is_at_least(8) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:session_token) }
    xit { should validate_uniqueness_of(:session_token) }
  end

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(
        username: 'mary_mack3',
        email: 'test3@me.com',
        password: 'abcdefgh'
      )
      user = User.find_by(username: 'mary_mack')
      expect(user.password).not_to be('abcdefgh')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(
        username: 'mary_mack4',
        email: 'test4@me.com',
        password: 'abcdefgh'
      )
    end
  end

  describe 'associations' do
    before(:each) do
      @user5 = User.create!(username: 'mary_mack5',
                           email: 'test5@me.com',
                           password: 'abcdefgh')
    end
    it { should have_many(:messages) }
    it { should have_many(:channel_memberships) }
    it { should have_many(:channels) }

    it 'initializes with the proper channels' do
      channel_count = Channel::GLOBAL_SUBJECTS.length
      expect(@user5.channel_memberships.length).to eq(channel_count)
    end
  end
end
