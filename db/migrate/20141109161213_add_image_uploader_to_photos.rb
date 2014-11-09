class AddImageUploaderToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :uploaded_image, :string
  end
end
