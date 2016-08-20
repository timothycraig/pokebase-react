require 'csv'
require 'json'

def seed_all_the_things!
  file = File.read("#{Rails.root}/db/GAME_MASTER_v0_1.decoded.categorized.json")
  data = JSON.parse(file)
  scan_types(data)
  scan_moves(data)
  scan_pokemons(data)
end

######Types
def scan_types(data)
  typesarray = data["TypeScalarArray"]
  data["PokemonTypes"].each do |type|
    name = type["TemplateId"].split('_')[2].downcase.capitalize
    Type.create(
      poke_type_id: typesarray.find_index(type["TemplateId"]),
      name: name,
      attack_scalar: type["TypeEffective"]["AttackScalar"]
    )

    puts "Seeding type: #{name}"
  end
end

#######Moves
def scan_moves(data)
  typesarray = data["TypeScalarArray"]
  col_hash = {
    power: "Power",
    energy_cost: "EnergyDelta",
    accuracy_chance: "AccuracyChance",
    min_level: "TrainerLevelMin",
    max_level: "TrainerLevelMax"
  }

  data["Moves"].each do |move|
    id_and_name = parse_move_uniqueid_info(move["TemplateId"])
    type = Type.where(name: move["Move"]["Type"].split('_')[2].downcase.capitalize)
    crit = move["Move"]["CriticalChance"].nil? ? 0: move["Move"]["CriticalChance"]
    stats = Hash.new(0)
    col_hash.each do |k,v|
      stats[k] = move["Move"][v]
    end
    m = Move.create(
      name: id_and_name[:name],
      poke_move_id: id_and_name[:poke_move_id],
      description: "placeholder description",
      power: stats[:power],
      energy_cost: stats[:energy_cost],
      accuracy_chance: stats[:accuracy_chance],
      min_level: stats[:min_level],
      max_level: stats[:max_level],
      critical_chance: stats[:critical_chance],
      type: type.first
    )
    puts "Seeding move: #{m.name}"
  end

end

def parse_move_uniqueid_info(str)
  poke_move_id = str.split('_').first.delete("V0").to_i
  name = str.split('_')[2..-1].map{ |w| w.downcase.capitalize }.join(' ')
  {name: name, poke_move_id: poke_move_id}
end

######Pokemon

def scan_pokemons(data)
  data["Pokemon"].each_with_index do |pokemon,i|
    id_and_name = parse_pokemon_uniqueid_info(pokemon["Pokemon"]["UniqueId"])
    stats = parse_pokemon_stats_info(pokemon["Pokemon"]["Stats"])
    pokemon_data = id_and_name.merge(stats)
    types = get_pokemon_types(pokemon)
    puts i
    pokemon_record = Pokemon.create(
      poke_id: i+1,
      name: pokemon_data[:name],
      stamina: pokemon_data[:stamina],
      attack: pokemon_data[:attack],
      defence: pokemon_data[:defence],
      description: "placeholder description",
      image: "images/icons/#{i+1}.png"
    )
    types.each do |type|
      jt = PokemonType.create(
        pokemon: pokemon_record,
        type: Type.where(name: type).first
      )
    end
    moves = []
    moves << pokemon["Pokemon"]["QuickMoves"]
    moves << pokemon["Pokemon"]["CinematicMoves"]
    moves.flatten.each do |move|
      jt = MovePokemon.create(
        pokemon: pokemon_record,
        move: Move.where(poke_move_id: move).first
      )
    end
    puts "Seeding pokemon: #{pokemon_data[:name]}"
  end
end

def get_pokemon_types(pokemon)
  types = []
  types << pokemon["Pokemon"]["Type1"].split('_')[2].downcase.capitalize
  types << pokemon["Pokemon"]["Type2"].split('_')[2].downcase.capitalize if pokemon["Pokemon"]["Type2"] != nil
  types
end

def parse_pokemon_uniqueid_info(str)
  poke_id = str.split('_').first.delete("V0")
  name = str.split('_')[2].downcase.capitalize
  {name: name, poke_id: poke_id}
end

def parse_pokemon_stats_info(hash)
  {
    stamina: hash["BaseStamina"],
    attack: hash["BaseAttack"],
    defence: hash["BaseDefense"]
  }
end

###########

seed_all_the_things!
