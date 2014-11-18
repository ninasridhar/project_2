class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.text :photo
      t.integer :user_id
      t.string :location
      t.text :photo_link
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
