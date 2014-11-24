class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:google_oauth2, :twitter, :facebook]

  attr_accessible :email, :password, :password_confirmation, :remember_me, :name, :username, :bio, :hometown, :user_image, :subscriptions, :subscriber, :subscribed_to

  has_many :albums
  has_many :photos
  has_many :votes
  has_many :providers, dependent: :destroy
  has_many :subscriptions, foreign_key: :user1_id
  has_many :subscribers, through: :subscriptions, source: :user2_id
  has_many :subscriptions, foreign_key: :user2_id
  has_many :subscribed_to, through: :subscriptions, source: :user1
  mount_uploader :user_image, AvatarImageUploader
  

  def role?(role_to_compare)
    self.role.to_s == role_to_compare.to_s
  end

  def following(current_user)
    current_user.subscribed_to_ids.uniq.include? self.id
  end

  def subscription(current_user)
    @subscription = Subscription.where({user1_id: self.id, user2_id: current_user.id}).first.id
  end

  def self.map_authentication_to_user_properties(authentication)
    authentication.slice(:info, :provider, :uid, :user_id)
  end

  def populate_user_fields(auth, user, kind)
    case kind
    when "Facebook"
      user.name = auth.info.name if !auth.info.name.nil? && user.name.blank?
      user.skip_confirmation! if user.respond_to?(:skip_confirmation!) 
    when "Twitter"
      user.name = auth.info.name if !auth.info.name.nil? && user.name.blank?
      user.username = auth.info.nickname if !auth.info.nickname.nil? && user.username.blank?
      user.skip_confirmation! if user.respond_to?(:skip_confirmation!) 
    when "Google"
      user.name = auth.info.name if !auth.info.name.nil? &&user.name.blank?
      user.email = auth.info.email if !auth.info.email.nil? && user.email.blank?
      user.skip_confirmation! if user.respond_to?(:skip_confirmation!) 
    end
    user
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if auth = session["devise.authentication"]
 
        user.username = auth.info.nickname if user.username.blank?
        user.name = auth.info.name if user.name.blank?
        user.email = auth.info.email if user.email.blank?
        user.skip_confirmation! if user.respond_to?(:skip_confirmation!) # don't require email confirmation
 
      end
    end
  end
end
