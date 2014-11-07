class Photo < ActiveRecord::Base
  attr_accessible :album_id, :category_id, :description, :location_id, :name, :user_id

  has_many :votes
  belongs_to :user
  belongs_to :category
  belongs_to :location
  has_and_belongs_to_many :tags
  has_and_belongs_to_many :albums
  has_many :comments :as => :multi
end
