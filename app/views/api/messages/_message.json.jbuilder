json.id message.id
json.body message.body
json.set! :author do
  json.id message.author.id
  json.username message.author.username
end
