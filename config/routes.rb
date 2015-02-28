Rails.application.routes.draw do
  root :to => 'bloodsugars#index'
  resources :bloodsugars
  resources :media_contents, only: [:create]
end
