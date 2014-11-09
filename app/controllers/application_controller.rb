class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_ransack_form_variables

   def set_ransack_form_variables
    q = params[:q]
      @tags = Tag.search(name_cont: q).result
      @users = User.search(name_cont: q).result
      @categories = Category.search(name_cont: q).result
      @albums = Album.search(name_cont: q).result
      @locations = Location.search(name_cont: q).result
      @photos = Photo.search(name_cont: q).result
  end

  helper_method :current_user
  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
