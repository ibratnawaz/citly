class LinksController < ApplicationController
  def index
    links = Link.all.order('created_at DESC')
    render status: :ok, json: { links: links }
  end
end
