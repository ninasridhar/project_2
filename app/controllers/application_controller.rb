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
  # if current_user.subscribed_to != nil
  # def after_sign_in_path_for(resource)
  #     sign_in_url = url_for(:action => 'new', :controller => 'sessions', :only_path => false, :protocol => 'http')
    
  #     if request.referer == sign_in_url
  #       super
  #     else
  #       stored_location_for(resource) || request.referer || feed_path 
  #     end
  #   end
  # end
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
end
