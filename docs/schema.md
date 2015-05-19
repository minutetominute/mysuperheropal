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
author_id				| integer		|	not null
name            | string    | not null, unique
amount					| float			| not null
unit						| string    | not null
calories        | integer   | not null
radiation       | float   	| not null
protein					|	float			| not null
fat							| float			| not null
carbohydrates		| float 		| not null
fiber						| float			| not null
sugars					| float			| not null
calcium					| float			| not null
iron						| float			| not null
magnesium				| float			| not null
phosphorus			| float			| not null
potassium				| float			| not null
sodium					| float			| not null
zinc						| float			| not null
vitamin C				| float			| not null
thiamin					| float			| not null
riboflavin			| float			|	not null
niacin					| float			| not null
vitamin B-6			|	float			| not null
folate					| float			| not null
vitamin B-12		| float			| not null
vitamin A				| float			| not null
vitamin E				|	float			| not null
vitamin D				| float			| not null
vitamin K				| float			| not null
cholesterol			| float			| not null

## exercises
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id				| integer		| not null
name            | string    | not null, unique
amount					| float			| not null
unit						|	string		| not null	
calories_burned | integer   | not null
preparation			| text			| not null
execution				| text			| not null
target					| string		| not null

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
