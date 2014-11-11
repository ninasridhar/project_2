class Photo < ActiveRecord::Base

  attr_accessible :album_id, :category_id, :description, :location_id, :name, :user_id, :album_id, :location, :category_id, :photo_link, :uploaded_image, :votes


  has_many :votes
  has_many :comments, as: :multi
  belongs_to :user
  belongs_to :category
  has_and_belongs_to_many :tags
  has_and_belongs_to_many :albums


  mount_uploader :uploaded_image, ImageUploaderUploader

  validates :name, presence: true, on: :create

  def votes_counter
    @votes = 0
    self.votes.each do |vote|
      # vote.each do |v|
        @votes += vote.number_of_votes
    end 
    @votes  
  end

end
