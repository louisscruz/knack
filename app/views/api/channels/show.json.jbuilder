json.name @channel.name
json.purpose @channel.purpose
json.id @channel.id
json.directMessage @channel.direct_message
json.set! :messages do
  @channel.messages.recent.each do |message|
    json.set! message.id do
      json.body message.body
      json.created_at message.created_at
      json.set! :author do
        json.id message.author.id
        json.username message.author.username
      end
    end
  end
end
