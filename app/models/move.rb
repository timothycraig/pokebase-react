class Move < ActiveRecord::Base
  validates :name, :description, presence: true
  validates_uniqueness_of :name, :poke_move_id

  belongs_to :type

  has_many :move_pokemons
  has_many :pokemons, through: :move_pokemons

  after_initialize :init

  def init
    self.power  ||= 0
  end
end
