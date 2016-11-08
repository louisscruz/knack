json.id message.id
json.body message.body
json.created_at message.created_at
json.updated_at message.updated_at
json.set! :author do
  json.id message.author.id
  json.username message.author.username
end
