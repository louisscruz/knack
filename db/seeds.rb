p 'Generating users'

User.create!(
  username: 'knack_bot',
  email: 'lsc@juilliard.edu',
  password: 'testtest'
)

User.create!(
  username: 'louisscruz',
  email: 'louisstephancruz@me.com',
  password: 'testtest'
)

User.create!(
  username: 'guest',
  email: 'guest@gmail.com',
  password: 'password'
)

p "Successfully generated #{User.count} users"

p 'Generating channels'

topics = Channel::GLOBAL_SUBJECTS

topics.each do |topic|
  Channel.create!(
    name: topic,
    purpose: "This channel is for discussion about #{topic}",
    creator_id: User.find_by(username: 'knack_bot').id
  )
end

p "Generated #{Channel.count} channels"

p 'Generating channel memberships'

User.all.each do |user|
  Channel.all.each do |channel|
    next if user.id == channel.creator_id
    ChannelMembership.create!(
      member_id: user.id,
      channel_id: channel.id
    )
  end
end

p "Generated #{ChannelMembership.count} channel memberships"

p 'Generating messages'

bot = User.find_by(username: 'knack_bot')

300.times do
  random_channel_id = (1...Channel.count).to_a.sample
  Message.create!(
    body: Faker::StarWars.quote,
    author_id: bot.id,
    channel_id: random_channel_id
  )
end

p "Generated #{Message.count} messages"
