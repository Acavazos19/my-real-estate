class InventorySerializer < ActiveModel::Serializer
  attributes :id, :address, :price, :bedrooms, :bathrooms, :lot_size, :image, :market, :description
end
