class Pokemon < ActiveRecord::Base
  validates :name, :stamina, :attack, :defence, :image, :description, presence: true
  validates_uniqueness_of :name, :poke_id

  has_many :pokemon_types
  has_many :types, through: :pokemon_types

  has_many :move_pokemons
  has_many :moves, through: :move_pokemons

  def self.search(queries)
  end
end
