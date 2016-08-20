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

ActiveRecord::Schema.define(version: 20160730055223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "move_pokemons", id: false, force: :cascade do |t|
    t.integer "pokemon_id"
    t.integer "move_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "description",     null: false
    t.integer  "power",           null: false
    t.integer  "energy_cost",     null: false
    t.integer  "accuracy_chance", null: false
    t.integer  "min_level",       null: false
    t.integer  "max_level",       null: false
    t.integer  "critical_chance", null: false
    t.integer  "type_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "poke_move_id"
    t.index ["poke_move_id"], name: "index_moves_on_poke_move_id", using: :btree
    t.index ["type_id"], name: "index_moves_on_type_id", using: :btree
  end

  create_table "pokemon_types", id: false, force: :cascade do |t|
    t.integer "pokemon_id"
    t.integer "type_id"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "stamina",     null: false
    t.integer  "attack",      null: false
    t.integer  "defence",     null: false
    t.text     "description", null: false
    t.string   "image",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "poke_id"
    t.index ["poke_id"], name: "index_pokemons_on_poke_id", using: :btree
  end

  create_table "types", force: :cascade do |t|
    t.string   "name",          null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "poke_type_id"
    t.text     "attack_scalar",              array: true
    t.index ["poke_type_id"], name: "index_types_on_poke_type_id", using: :btree
  end

end
