Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :foods, :exercises, :users
    resources :sessions, only: [:create, :destroy]
  end

end
