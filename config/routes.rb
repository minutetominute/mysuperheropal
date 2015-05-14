Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :foods, :exercises, :users
    resource :session, only: [:create, :destroy, :show]
  end

end
