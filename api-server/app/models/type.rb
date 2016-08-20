class Type < ActiveRecord::Base
  validates :name, presence: true
  validates_uniqueness_of :name, :poke_type_id

  has_many :pokemon_types
  has_many :pokemons, through: :pokemon_types
end
