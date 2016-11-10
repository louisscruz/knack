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
    @users = User.where('username LIKE ?', "%#{params[:value]}%").limit(10)
  end

  def username_validation
    @user = User.find_by(username: params[:value])
    if @user.nil?
      render json: { taken: false }
    else
      render json: { taken: true }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
