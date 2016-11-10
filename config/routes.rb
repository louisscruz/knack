Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :channels, only: [:index, :create, :show, :destroy], param: :name
    resources :messages, only: [:create, :update, :destroy]
    get '/users/search', to: 'users#search'
    get '/users/username-validation', to: 'users#username_validation'
  end


  get '*all', to: 'static_pages#root', format: false
end
