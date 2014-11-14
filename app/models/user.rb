class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:google_oauth2]

  attr_accessible :email, :password, :password_confirmation, :remember_me, :name, :username, :bio, :hometown, :user_image, :subscriptions, :subscribers

  # validates :password, presence: true, on: :create
  # validates :email, presence: :true, uniqueness: {case_sensitive: false}
  # validates :username, presence: :true, uniqueness: {case_sensitive: false}

  has_many :albums
  has_many :photos
  has_many :votes
  has_many :subscriptions, foreign_key: :user1_id
  has_many :subscribers, through: :subscriptions, source: :user2
  has_many :subscriptions, foreign_key: :user2_id
  has_many :subscribed_to, through: :subscriptions, source: :user1
  mount_uploader :user_image, AvatarImageUploader
  

  def role?(role_to_compare)
    self.role.to_s == role_to_compare.to_s
  end

  def following(current_user)
    self.subscribers.each do |sub|
      if sub.id == current_user.id
        @following = true
      end
    end
    @following
  end

  def subscription(current_user)
    @subscription = Subscription.where({user1_id: self.id, user2_id: current_user.id}).first.id
  end

  def self.find_for_google_oauth2(auth, signed_in_user=nil)
    if user = signed_in_user || User.find_by_email(auth.info.email)
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name if user.name.blank?
      user.image = auth.info.image if user.image.blank?
      user.save
      user
    else
      where(auth.slice(:provider, :uid)).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.name = auth.info.name
        user.email = auth.info.email
        user.image = auth.info.image
        user.password = Devise.friendly_token[0,20]
        # user.skip_confirmation! # don't require email confirmation
        end
    end
  end
end
