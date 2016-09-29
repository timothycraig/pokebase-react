class AddPokeMoveIdToMove < ActiveRecord::Migration[5.0]
  def change
    add_column :moves, :poke_move_id, :integer

    add_index :moves, :poke_move_id
  end
end
