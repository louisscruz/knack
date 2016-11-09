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

User::SUPERSTAR_USERS.each do |username|
  User.create!(
    username: username,
    email: "#{username}@gmail.com",
    password: 'password'
  )
end

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

300.times do
  random_author = User.order('RANDOM()').limit(1).first
  random_channel = Channel.order('RANDOM()').limit(1).first
  Message.create!(
    body: Message.random_message(random_channel),
    author_id: random_author.id,
    channel_id: random_channel.id
  )
end

p "Generated #{Message.count} messages"
