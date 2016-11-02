class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      session_params[:email],
      session_params[:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    user = current_user
    if user
      logout
      render json: user
    else
      render json: ['Nobody signed in yet'], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
