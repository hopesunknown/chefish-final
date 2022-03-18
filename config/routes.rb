Rails.application.routes.draw do
  
  resources :comments
  resources :topics
  resources :user_topics
  resources :user_meetups
  resources :meetups
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
