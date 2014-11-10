class Album < ActiveRecord::Base
  attr_accessible :description, :name, :user_id
  
  has_and_belongs_to_many :photos
  has_many :comments, :as => :multi
  belongs_to :user

  validates :name, presence: true, on: :create
end
