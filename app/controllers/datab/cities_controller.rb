class Datab::CitiesController < ApplicationController
    def index
        @cities = City.ApplicationController
        render json: @cities
    end

    def show
        @city = City.find(params[:id])
        render json: @city
    end
end
