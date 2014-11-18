class UsersController < ApplicationController
  before_filter :authenticate_user!
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @following = @user.following(current_user)
    # if (@user.subscriptions != nil) || (@user.subscriptions != [])
    #   @subscription = @user.subscription(current_user)
    # end

  end

end
