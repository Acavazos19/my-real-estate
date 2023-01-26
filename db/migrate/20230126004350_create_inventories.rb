class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.string :address
      t.integer :price
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :lot_size
      t.string :image
      t.string :market
      t.string :description

      t.timestamps
    end
  end
end
