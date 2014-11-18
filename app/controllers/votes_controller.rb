class VotesController < ApplicationController
  before_filter :authenticate_user!
  
  def new
    @vote = Vote.new
    redirect_to Photo.find(params[:photo_id])

    respond_to do |format|
      format.html 
      format.json { render json: @vote }
    end
  end

  def create
    @vote = Vote.create(params[:vote])
    @vote.user_id = current_user.id
    respond_to do |format|
      if @vote.save
        format.html { redirect_to @vote, notice: 'Vote was successfully created.' }
        format.json { render json: @vote, status: :created, location: @vote }
      else
        format.html { render action: "new" }
        format.json { render json: @vote.errors, status: :unprocessable_entity }
      end
    end
  end
end
