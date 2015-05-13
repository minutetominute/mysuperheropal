class User < ActiveRecord::Base
  validates :email, :password_digest,
            :session_token, :superhero_name, presence: true
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user
      user.is_password?(password) ? user : nil
    else
      nil
    end
  end

  def self.new_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.new_session_token
  end

  def reset_session_token!
    self.session_token = User.new_session_token
    self.save!
    self.session_token
  end

end
