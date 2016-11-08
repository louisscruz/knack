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

class User < ApplicationRecord
  SUPERSTAR_USERS = %w(robert_martin alan_turing mark_hurd marissa_mayer steve_jobs jack_dorsey elon_musk jeff_bezos steve_wozniak linus_torvalds donald_knuth brian_kernighan richard_stallman jack_carmack mark_zuckerberg).freeze

  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validate :username_is_valid
  after_create :ensure_subscribed_to_channels

  has_many :channel_memberships,
           foreign_key: :member_id,
           primary_key: :id,
           class_name: 'ChannelMembership'
  has_many :channels, through: :channel_memberships
  has_many :messages,
           foreign_key: :author_id,
           primary_key: :id,
           class_name: 'Message'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.password?(password) ? user : nil
  end

  def self.generate_session_token
    begin
      token = SecureRandom.base64
    end while User.exists?(session_token: token)
    token
  end

  def ensure_session_token
    self.session_token = self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
    session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def password?(password)
    bc_object = BCrypt::Password.new(password_digest)
    bc_object.is_password?(password)
  end

  def ensure_subscribed_to_channels
    Channel::GLOBAL_SUBJECTS.each do |topic|
      channel = Channel.find_by(name: topic)
      next if channel.nil?
      ChannelMembership.create!(
        member_id: self.id,
        channel_id: channel.id
      )
    end
  end

  def username_is_valid
    return unless username.split('').any? { |x| x == '@' }
    errors[:username] << 'Name may not contain the @ symbol'
  end
end
