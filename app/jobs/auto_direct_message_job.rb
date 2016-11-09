class AutoDirectMessageJob < ApplicationJob
  queue_as :default

  def perform(author, channel)
    Message.create!(
      body: Message.random_message(channel),
      author_id: author.id,
      channel_id: channel.id
    )
  end
end
