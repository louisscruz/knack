class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :destroy]
  before_action :authorized_only

  def index
    @channels = current_user.channels
  end

  def create
    @channel = Channel.new_direct_from_members(
      channel_create_params[:members],
      channel_create_params[:creator_id]
    )
    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :purpose)
  end

  def channel_create_params
    params.require(:channel).permit(:creator_id, members: [])
  end

  def set_channel
    @channel = Channel.includes(:messages, messages: :author)
                      .find_by(name: params[:name])
  end
end
