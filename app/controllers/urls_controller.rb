class UrlsController < ApplicationController
  require 'securerandom'

  before_action :load_url, only: [:show, :update]\
    
  def index
    urls = Url.all
    render status: :ok, json: {
      urls: urls.organize()
    }
  end

  def show
    @url = Url.find_by_slug(params[:slug])
    render 'errors/404', status: 404 if @url.nil?
    @url.update_attribute(:click_count, @url.click_count + 1)
    redirect_to @url.original_url
  end

  def create
    slug = generate_slug
    @url = Url.new(original_url: url_params[:original_url], slug: slug, short_url: short_url(slug))
    if @url.save
      render status: :ok, json: { notice: t('successfully_created') }
    else
      render status: :unprocessable_entity,
      json: { error: @url.errors.full_messages.to_sentence }
    end
  end

  def update
    if @url.update(url_params)
    render status: :ok, json: {
      message: 'Link has been pinned'
    }
    else
      render status: :unprocessable_entity,
      json: { error: @url.errors.full_messages.to_sentence }
    end
  end

  private

    def load_url
      @url = Url.find_by_slug(params[:slug])
      render json: {error:  @url.errors.full_messages.to_sentence} unless @url
      rescue ActiveRecord::RecordNotFound => e
        render json: { error: e }, status: :not_found
    end  
  
    def url_params
      params.require(:url).permit(:original_url, :status, :click_count)
    end

    def generate_slug
      SecureRandom.alphanumeric(8) 
    end

    def short_url(slug)
      "#{request.base_url}/#{slug}"
    end

end
