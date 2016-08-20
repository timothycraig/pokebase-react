class CreateTableMovePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :move_pokemons, :id => false do |t|
      t.integer :pokemon_id
      t.integer :move_id
    end
  end
end
