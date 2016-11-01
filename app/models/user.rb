class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

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
end
