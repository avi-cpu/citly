Rails.application.routes.draw do
  
  resources :urls, only: %i[index create update ], param: :slug
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/s/:slug', to: 'urls#show', as: :short
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
