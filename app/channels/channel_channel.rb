class ChannelChannel < ApplicationCable::Channel
  def subscribed
    return unless Channel.exists?(name: params[:channel_name])
    stream_from "channel_#{params[:channel_name]}"
  end
end
