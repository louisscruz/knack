# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique
purpose     | text      |

## channel_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
member_id     | integer   | not null, foreign_key (references users), indexed, indexed w/channel_id (made unique)
channel_id  | integer   | not null, foreign_key (references channels), indexed, indexed w/member_id (made unique)

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null foreign key (references channels), indexed
edited      | boolean   | not null, default: false
