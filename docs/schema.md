#Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
superhero_name  | string    | not null
password_digest | string    | not null
session_token   | string    | not null, unique

## goals
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null
metric_type     | string    | not null
amount          | integer   | not null
time            | integer   | not null

## foods
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, unique
calories        | integer   | not null
radiation       | integer   | not null

## exercises
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, unique
calories_burned | integer   | not null

## diary
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null
title           | string    | not null
body            | text      | not null
weight          | integer   |

## diary_exercises
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
diary_id        | integer   | not null
exercise_id     | integer   | not null
sets            | integer   |
reps            | integer   |
time            | datetime  |

## diary_exercise_participants
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
diary_exercises_id  | integer   | not null
participant_id      | integer   | not null

#diary_foods
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
diary_id        | integer   | not null
food_id         | integer   | not null
food_amount     | integer   | not null
