require 'rails_helper'

RSpec.describe User, type: :model do
  # describe 'validations' do
  #   before(:each) do
  #     @user = User.create!(username: 'mary_mack2',
  #                          email: 'test2@me.com',
  #                          password: 'abcdefgh')
  #   end
  #
  #   it { should validate_presence_of(:username) }
  #   it { should validate_uniqueness_of(:username) }
  #   it { should validate_presence_of(:password) }
  #   it { should validate_presence_of(:email) }
  #   it { should validate_uniqueness_of(:email) }
  #   it { should validate_presence_of(:session_token) }
  # end

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(
        username: 'mary_mack',
        email: 'test@me.com',
        password: 'abcdefgh'
      )
      user = User.find_by(username: 'mary_mack')
      expect(user.password).not_to be('abcdefgh')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(
        username: 'mary_mack',
        email: 'test@me.com',
        password: 'abcdefgh'
      )
    end
  end
end
