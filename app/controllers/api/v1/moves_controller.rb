class Api::V1::MovesController < ActionController::Base
  VALID_QUERIES = ['name','power','min_trainer_level']

  def index
    unless validate_queries(request.GET.keys)
      render json: {error: "Bad Query"}
      return
    end

    render json: build_response(request)
  end

  def build_response(request)
    result = Move.all
    request.GET.each do |query,value|
      value = sanitize_value(value)
      case query
        when "name"
          result = result.where("name ILIKE ?","%#{value}%")
        when "power"
          result = result.where("power >= ?","#{value}")
        when "min_trainer_level"
          result = result.where("min_level >= ?","#{value}")
      end
    end
    add_join_data(result)
  end

  def add_join_data(moves_result)
    response = {moves: []}
    moves_result.each do |move|
      pokemons = move.pokemons
      type = move.type
      move = move.as_json
      move[:pokemons] = pokemons
      move[:type] = type
      response[:moves] << move
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
