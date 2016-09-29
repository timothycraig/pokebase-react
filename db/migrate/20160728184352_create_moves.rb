class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :power, null: false
      t.integer :energy_cost, null: false
      t.integer :accuracy_chance, null: false
      t.integer :min_level, null: false
      t.integer :max_level, null: false
      t.integer :critical_chance, null: false
      t.belongs_to :type, index: true

      t.timestamps
    end
  end
end
