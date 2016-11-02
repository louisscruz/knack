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
