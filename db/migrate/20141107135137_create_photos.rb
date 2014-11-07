class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.integer :user_id
      t.integer :album_id
      t.integer :location_id
      t.integer :category_id

      t.timestamps
    end
  end
end
