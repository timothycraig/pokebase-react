class AddPokeTypeIdToPokemon < ActiveRecord::Migration[5.0]
  def change
    add_column :types, :poke_type_id, :integer
    add_column :types, :attack_scalar, :text, array:true

    add_index :types, :poke_type_id
  end
end
