p 'Generating users'

User.create!(
  username: 'louisscruz',
  email: 'louisstephancruz@me.com',
  password: 'testtest'
)

p "Successfully generated #{User.count} users"
