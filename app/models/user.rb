class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

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

end
