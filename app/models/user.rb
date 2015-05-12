class User < ActiveRecord::Base

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

end
