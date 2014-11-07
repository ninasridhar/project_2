class Photo < ActiveRecord::Base
  attr_accessible :album_id, :category_id, :description, :location_id, :name, :user_id
end
