# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150521022416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "diary_entries", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string  "title"
    t.text    "body"
    t.float   "weight"
  end

  add_index "diary_entries", ["author_id"], name: "index_diary_entries_on_author_id", using: :btree

  create_table "diary_entry_exercise_participants", force: :cascade do |t|
    t.integer "diary_entry_exercise_id", null: false
    t.integer "participant_id",          null: false
  end

  create_table "diary_entry_exercises", force: :cascade do |t|
    t.integer "diary_entry_id", null: false
    t.integer "exercise_id",    null: false
    t.integer "sets"
    t.integer "reps"
    t.time    "time"
  end

  add_index "diary_entry_exercises", ["diary_entry_id"], name: "index_diary_entry_exercises_on_diary_entry_id", using: :btree

  create_table "diary_entry_foods", force: :cascade do |t|
    t.integer "diary_entry_id", null: false
    t.integer "food_id",        null: false
    t.float   "amount",         null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "author_id"
    t.integer  "calories_burned",    null: false
    t.float    "amount",             null: false
    t.string   "unit",               null: false
    t.text     "preparation"
    t.text     "execution"
    t.string   "target"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "exercises", ["author_id"], name: "index_exercises_on_author_id", using: :btree

  create_table "foods", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "author_id"
    t.float    "amount",             null: false
    t.string   "unit",               null: false
    t.integer  "calories",           null: false
    t.float    "radiation"
    t.float    "protein"
    t.float    "fat"
    t.float    "carbohydrates"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.float    "fibers"
    t.float    "sugars"
    t.float    "calcium"
    t.float    "iron"
    t.float    "magnesium"
    t.float    "phosphorus"
    t.float    "potassium"
    t.float    "sodium"
    t.float    "zinc"
    t.float    "vitamin_c"
    t.float    "thiamin"
    t.float    "riboflavin"
    t.float    "niacin"
    t.float    "vitamin_b6"
    t.float    "folate"
    t.float    "vitamin_b12"
    t.float    "vitamin_a"
    t.float    "vitamin_e"
    t.float    "vitamin_d"
    t.float    "vitamin_k"
    t.float    "cholesterol"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "foods", ["author_id"], name: "index_foods_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.text     "email",               null: false
    t.text     "password_digest",     null: false
    t.text     "session_token",       null: false
    t.text     "superhero_name",      null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
