class Vote < ActiveRecord::Base
  attr_accessible :number_of_votes, :photo_id, :user_id

  belongs_to :user
  belongs_to :photo
end
