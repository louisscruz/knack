class Api::MessagesController < ApplicationController
  before_action :set_message, only: [:update, :destroy]

  def create
    @message = Message.new(message_params)
    if @message.save
      # message = Api::MessagesController.render(
      #   partial: 'api/messages/message',
      #   locals: { message: @message }
      # )
      # ActionCable.server.broadcast("channel_#{@message.channel.name}", message: JSON.parse(message))
      render 'api/messages/show'
    else
      render json: message.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
