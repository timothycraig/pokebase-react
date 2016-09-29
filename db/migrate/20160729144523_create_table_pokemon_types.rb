class CreateTablePokemonTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon_types, :id => false do |t|
      t.integer :pokemon_id
      t.integer :type_id
    end
  end
end
