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
