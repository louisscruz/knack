module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    protected

    def find_verified_user
      current_user = User.find_by(session_token: session[:session_token])
      return if current_user.nil?
      current_user
    end
  end
end
