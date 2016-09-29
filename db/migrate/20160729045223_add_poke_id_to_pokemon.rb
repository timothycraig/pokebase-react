class AddPokeIdToPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :pokemons, :poke_id, :integer
    add_index :pokemons, :poke_id
  end
end
