class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :inventory_id, :inventory
end
