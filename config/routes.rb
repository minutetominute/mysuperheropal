Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :foods, :exercises, :users, :diary_entries
    resource :session, only: [:create, :destroy, :show]
		get "/search", to: "searches#index"
  end

end
