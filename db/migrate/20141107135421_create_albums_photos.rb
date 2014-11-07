class CreateAlbumsPhotos < ActiveRecord::Migration
  def change
    create_table :albums_photos, id: false do |t|
      t.references :album
      t.references :photo
    end
  end
end
