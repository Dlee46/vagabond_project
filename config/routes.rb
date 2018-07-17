Rails.application.routes.draw do

  namespace :datab do
    resources :cities do
      resources :posts
    end
  end

end
