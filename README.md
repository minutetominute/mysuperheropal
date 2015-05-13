# mysuperheropal

[Heroku link][heroku]

[heroku]: http://mysuperheropal.herokuapp.com/

myfitnesspal for super powers!

## Minimum Viable Product
mysuperheropal is a clone of myfitnesspal built on Rails and Backbone.  Users can:

*auth*
- [X] sign up
- [X] sign in
- [ ] log out
- [ ] retrieve password

*goals*
- [ ] add goals

*diaries*
- [ ] post daily food diary entries
- [ ] log exercise activity
- [ ] tag exercises with friends
- [ ] track weight changes

*food*
- [ ] search available foods
- [ ] add new foods to the database
- [ ] drag food entries into daily food diary entries

*exercise*
- [ ] search available exercises
- [ ] add new exercises

*metrics*
- [ ] generate reports based on their progress
- [ ] see up-to-date metrics on their dashboard widget
- [ ] download a CSV or .xlsx containing their data

*stretch features*
- [ ] update progress with fitbit
- [ ] generate meal plan based on goals

##Design Docs

- [View wireframes][wireframes]
- [DB schema][schema]

[wireframes]: ./docs/views.md
[schema]: ./docs/schema.md

##Implementation Timeline

###Phase 1: User Authentication, Food and Exercise Creation (~1 day)

I will create user authentication via practices learned at App Academy.  By the end of this phase, users should be able to add new foods and exercises to the database.  Set up machine through digital ocean and deploy using capistrano to check if everything is working.

###Phase 2: View and search for food and exercises (~2 days)

Add API routes to serve up food and exercise views.  Set up elastic search for fast and broad search.  Create backbone views to see food and exercises.

###Phase 3: Diary CRUD (~2 days)

Create api endpoints for user diary.  Also create backbone views to display and edit diary data for users.  At this point, users should be able to edit, view, and create new diary entries.

###Phase 4: Goal CRUD (~2 days)

Create api endpoints for user goals.  Also create backbone views to display and edit goal data for users.  At this point, users should be able to edit, view, and create new goals.

###Phase 5: Metrics views and management (~3 days)

Use D3.js to present user food and exercise data.  Create a header widget to display realtime data for user.  Create metrics views in backbone and add a metrics controller to allow users to download their data in csv and excel format.  These files will be generated using the csv library and erb templating.
