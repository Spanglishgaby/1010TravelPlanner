Rails.application.routes.draw do
  
  resources :sessions
  resources :reviews
  resources :activities
  resources :trips
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # routes to login page
  post "/signin", to: "sessions#create"
  delete "/logout/:id", to: "sessions#destroy"
  get "/authorized", to: "users#show"
end
