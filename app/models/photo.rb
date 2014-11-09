class Photo < ActiveRecord::Base

  attr_accessible :album_id, :category_id, :description, :location_id, :name, :user_id, :album_id, :location_id, :category_id, :photo_link, :uploaded_image


  has_many :votes
  has_many :comments, as: :multi
  belongs_to :user
  belongs_to :category
  belongs_to :location
  has_and_belongs_to_many :tags
  has_and_belongs_to_many :albums


  mount_uploader :uploaded_image, ImageUploaderUploader

end
