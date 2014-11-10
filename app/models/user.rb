class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me, :name, :username, :bio, :hometown, :user_image

    has_many :albums
    has_many :photos
    has_many :votes
    has_many :subscriptions, foreign_key: :user1_id
    has_many :users, through: :subscriptions, source: :user2

    mount_uploader :user_image, AvatarImageUploader

    def role?(role_to_compare)
      self.role.to_s == role_to_compare.to_s
    end
end
