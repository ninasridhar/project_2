class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :photo_id
      t.integer :number_of_votes

      t.timestamps
    end
  end
end
