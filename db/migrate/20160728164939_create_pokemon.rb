class CreatePokemon < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.integer :stamina, null: false
      t.integer :attack, null: false
      t.integer :defence, null: false
      t.text :description, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
