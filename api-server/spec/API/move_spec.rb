require 'rails_helper'
require 'spec_helper'

describe "/moves API", :type => :request do
  it 'can query by name' do
    move = FactoryGirl.build(:quick_attack)
    move.save
    get '/api/v1/moves?name=qui'
    json = JSON.parse(response.body)

    expect(response).to be_success
    expect(json['moves'].length).to eq(1)
    expect(json['moves'].first["name"]).to eq('Quick Attack')
  end
  it 'returns its type' do
    move = FactoryGirl.build(:quick_attack)
    move.save
    get '/api/v1/moves?name=qui'
    json = JSON.parse(response.body)

    expect(response).to be_success
    expect(json['moves'].first["type"]["name"]).to eq('Physical')
  end
end
