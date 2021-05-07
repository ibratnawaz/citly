Rails.application.routes.draw do
  resources :links, only: [:index, :create]

  root "home#index"
  get '*path', to: 'home#index', via: :al
end
