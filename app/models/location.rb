class Location < ActiveRecord::Base
  attr_accessible :city, :country

  has_many :photos
end
