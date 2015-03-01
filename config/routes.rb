Rails.application.routes.draw do
  root :to => 'media_contents#index'
  resources :bloodsugars
  resources :media_contents, only: [:create, :index, :new]
end
