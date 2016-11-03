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
      Channel.create!(
        name: 'general',
        purpose: 'purpose'
      )
    end

    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
    it 'should make all names lowercase' do
      channel = Channel.create!(
        name: 'NEWchaNnel',
        purpose: 'Something'
      )
      expect(channel.name).to eq('newchannel')
    end
  end

  describe 'associations' do
    it { should have_many(:memberships) }
    it { should have_many(:members) }
    it { should have_many(:messages) }
  end
end
