class Photo < ActiveRecord::Base

  attr_accessible :album_id, :category_ids, :description, :location_id, :name, :user_id, :album_ids, :location, :category_id, :photo_link, :uploaded_image, :votes


  has_many :votes
  has_many :comments, as: :multi
  belongs_to :user
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :albums

  geocoded_by :location
  after_validation :geocode, :if => :location_changed?

  mount_uploader :uploaded_image, ImageUploaderUploader

  validates :name, presence: true, on: :create

  def votes_counter
    @votes = 0
    self.votes.each do |vote|
        @votes += vote.number_of_votes
    end 
    @votes  
  end

  def who_voted(current_user)
    self.votes.each do |vote|
      if vote.user_id == current_user.id
        @voted_already = true
      end
    end
    @voted_already
  end
end
