class Comment < ActiveRecord::Base
  attr_accessible :multi_id, :multi_type, :user_id

  belongs_to :multi, polymorphic: true
end
