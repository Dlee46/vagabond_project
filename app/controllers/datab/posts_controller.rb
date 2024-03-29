class Datab::PostsController < ApplicationController

    def index
        @posts = City.find(params[:city_id]).posts
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
        @city = City.find(params[:city_id])
        @post = @city.posts.create(post_params)
        render json: @post
    end

    def update
        @post = Post.find(params[:id])
        @post.update(post_params)
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id]).destroy
        render status: :ok
    end

private

def post_params
    params.require(:post).permit(:title, :description)
end

end
