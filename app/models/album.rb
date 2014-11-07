class Album < ActiveRecord::Base
  attr_accessible :description, :name, :user_id
  
  belongs_to :user
  has_many :comments, as: :multi
   has_and_belongs_to_many :photos
end
