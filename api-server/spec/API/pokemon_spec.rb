require 'rails_helper'
require 'spec_helper'

describe "/pokemons API", :type => :request do
  it 'can query by name' do
    pika = FactoryGirl.create(:pikachu)
    get '/api/v1/pokemons?name=pik'
    json = JSON.parse(response.body)

    expect(response).to be_success
    expect(json['pokemons'].length).to eq(1)
  end
end
