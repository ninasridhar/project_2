class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.text :photo
      t.integer :user_id
      # t.integer :album_id
      t.string :location
      t.integer :category_id
      t.text :photo_link

      t.timestamps
    end
  end
end
