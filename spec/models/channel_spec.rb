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

require 'rails_helper'

RSpec.describe Channel, type: :model do
  describe 'validations' do
    before(:each) do
      @user = User.create!(username: 'mary_mack',
                           email: 'test@me.com',
                           password: 'abcdefgh')
      Channel.create!(
        name: 'general',
        purpose: 'purpose',
        creator_id: @user.id
      )
    end

    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).scoped_to(:creator_id) }
    it { should have_db_column(:direct_message).with_options(default: false) }
    it { should have_db_column(:creator_id) }
    it 'should make all names lowercase' do
      channel = Channel.create!(
        name: 'NEWchaNnel',
        purpose: 'Something',
        creator_id: @user.id
      )
      expect(channel.name).to eq('newchannel')
    end
  end

  describe 'associations' do
    it { should have_many(:memberships) }
    it { should have_many(:members) }
    it { should have_many(:messages) }
    it { should belong_to(:creator) }
  end
end
