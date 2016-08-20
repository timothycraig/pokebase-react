Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :pokemons, only: [:index]
      resources :moves, only: [:index]
    end
  end

  get "/*path" => redirect("/?goto=%{path}")

end
