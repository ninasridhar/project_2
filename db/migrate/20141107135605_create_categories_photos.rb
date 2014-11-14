class CreateCategoriesPhotos < ActiveRecord::Migration
  def change
    create_table :categories_photos, id: false do |t|
      t.references :category
      t.references :photo
    end
  end
end
