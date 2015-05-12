Rails.application.routes.draw do
  root 'static_pages#root'
  resource :session only: [:create, :destroy]

  namespace :api do
    resources :foods, :exercises
  end

end
