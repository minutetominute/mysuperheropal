class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else

    end
  end

  def destroy
    current_user.reset_session_token
    session[:session_token] = nil
  end

end
