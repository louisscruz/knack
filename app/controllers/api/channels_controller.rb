class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :destroy]

  def index
    @channels = Channel.all
  end

  def show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :purpose)
  end

  def set_channel
    @channel = Channel.find_by(name: params[:name])
  end
end
