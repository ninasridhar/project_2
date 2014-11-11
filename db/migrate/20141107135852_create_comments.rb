class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :username
      t.integer :multi_id
      t.string :multi_type
      t.text :text
      t.timestamps
    end
  end
end
