# Knack

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://www.knack.live/
[trello]: https://trello.com/b/W5JOYM88/knack

## Minimum Viable Product

Knack is a web application inspired by Slack built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Channels
- [ ] Live Chat
- [ ] Direct Messages
- [ ] Multi-Person Direct Messages
- [ ] **Bonus**: Notifications
- [ ] **Bonus**: Bots (push messages every 2-10 seconds)
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: https://github.com/louisscruz/knack/tree/master/docs/wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Channel Model, API, and components (2 days)

**Objective:** Channels can be created, read, edited and destroyed through
the API. Channels have members.

### Phase 3: Messages (2 days)

**Objective:** Messages belong to channels and can be created, read, edited and destroyed through the API. ActionCable sends the messages to the subscribers (channel members).

### Phase 4: Direct Messages (2 days)

**Objective:** Creation of direct messages to individuals redirects to the correct channel if it already exists; otherwise, it creates the channel and then redirects.

### Phase 5: Multi-Person Direct Messages

**Objective:** Creation of direct messages to multiple recipients; a channel is created with those people as members.

### Phase 5: Begin bonus features

**objective:** Ensure that the site is *flashy*.

### Bonus Features (TBD)
- [ ] Notifications
- [ ] Bots (push messages every 2-10 seconds)
