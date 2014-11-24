class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2 
    handle_callback "Google"
  end

  def twitter 
    handle_callback "Twitter"
  end

  def facebook 
    handle_callback "Facebook"
  end

  def handle_callback(kind)
    auth = User.map_authentication_to_user_properties(request.env["omniauth.auth"])

    @user = Provider.authenticate(auth, current_user, kind)

    if @user.persisted?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => kind.titleize
      sign_in_and_redirect @user, :event => :authentication               
    else
      session["devise.authentication"] = auth
      flash[:notice] = session["devise.authentication"]
      redirect_to new_user_registration_url
    end
  end
end