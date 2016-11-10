class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :destroy]
  before_action :authorized_only

  def index
    if params[:direct_message]
      @channels = current_user.channels.where(direct_message: true)
    else
      @channels = current_user.channels.where(direct_message: false)
    end
  end

  def create
    members = channel_create_params[:members]
    @channel = Channel.create_direct_from_members(members, current_user)
    if @channel.persisted?
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    if @channel.nil?
      render json: {}, status: 404
    elsif !@channel.direct_message
      multiplier = [3, 4, 5].sample
      3.times do |i|
        offset_start = (i + 1) * multiplier
        AutoMessageJob.set(wait: offset_start.seconds)
                      .perform_later(User.random_superstar, @channel)
      end
    end
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

  def filter_name(name)
    names = name.split('_')
    names.delete(current_user.username)
    names.join('_')
  end
end
