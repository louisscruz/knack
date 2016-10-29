# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Channels

- `GET /api/channels`
- `POST /api/channels`
- `GET /api/channels/:id`
- `PATCH /api/channels/:id`
- `DELETE /api/channels/:id`
- `GET /api/channels/:id/messages`
  + Retrieve all messages of a channel

### Messages

- `GET /api/messages`
- `POST /api/messages`
- `GET /api/messages/:id`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`
