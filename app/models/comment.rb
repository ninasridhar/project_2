class Comment < ActiveRecord::Base
  attr_accessible :multi_id, :multi_type, :username, :text

  belongs_to :multi, polymorphic: true
end
