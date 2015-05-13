class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(user)
      render @user
    else
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :superhero_name)
  end
end
