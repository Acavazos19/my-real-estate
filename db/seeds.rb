# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting seeds..."
Inventory.destroy_all
User.destroy_all
Favorites.destroy_all

puts "🌱 Seeding Inventory..."
20.times do
    Inventory.create(
        address: Faker::Address.street_address,
        bedrooms: rand(1..7),
        bathrooms: rand(1..4),
        lot_size: rand(0..25),
        price: rand(250000..2000000),
        market: ["Buy", "Rent"].sample,
        description: Faker::Lorem.paragraph,
    )
end

put "🌱 Seeding Users..."
10.times do
    User.create(
        email: Faker::Internet.unique.email,
        password_digest: Faker::Internet.password,
    )
end

put "🌱 Seeding Favorites..."
15.times do
    Favorite.create(
        user_id: User.id.sample,
        inventory_id: Inventory.id.sample,
    )
end