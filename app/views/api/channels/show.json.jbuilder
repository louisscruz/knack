json.name @channel.name
json.purpose @channel.purpose
json.set! :messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.body message.body
      json.set! :author do
        json.id message.author.id
        json.username message.author.username
      end
    end
  end
end
