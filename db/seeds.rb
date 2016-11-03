p 'Generating users'

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
    purpose: "This channel is for discussion about #{topic}"
  )
end

p "Generated #{Channel.count} channels"

p 'Generating channel memberships'

User.all.each do |user|
  Channel.all.each do |channel|
    ChannelMembership.create!(
      member_id: user.id,
      channel_id: channel.id
    )
  end
end

p "Generated #{ChannelMembership.count} channel memberships"
