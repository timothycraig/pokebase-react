class Api::V1::PokemonsController < ActionController::Base
  VALID_QUERIES = ['name','attack','stamina','defence']

  def index
    unless validate_queries(request.GET.keys)
      render json: {error: "Bad Query"}
      return
    end

    render json: build_response(request)
  end

  def build_response(request)
    result = Pokemon.all
    request.GET.each do |query,value|
      value = sanitize_value(value)
      case query
        when "name"
          result = result.where("name ILIKE ?","%#{value}%")
        when "attack"
          result = result.where("attack >= ?","#{value}")
        when "defence"
          result = result.where("defence >= ?","#{value}")
        when "stamina"
          result = result.where("stamina >= ?","#{value}")
      end
    end
    add_join_data(result)
  end

  def add_join_data(pokemon_result)
    response = {pokemons: []}
    pokemon_result.each do |pokemon|
      moves = pokemon.moves
      types = pokemon.types
      pokemon = pokemon.as_json
      pokemon[:moves] = moves
      pokemon[:types] = types
      response[:pokemons] << pokemon
    end
    response
  end

  def sanitize_value(value)
    value.parameterize
  end

  def validate_queries(queries)
    queries.each do |query|
      return false unless VALID_QUERIES.include?(query)
    end
    true
  end
end
