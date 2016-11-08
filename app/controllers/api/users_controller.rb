class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: :unprocessable
    end
  end

  def search
    @users = User.where('username LIKE ?', "%#{params[:value]}").limit(10)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
