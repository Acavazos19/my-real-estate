class User < ApplicationRecord
    has_secure_password
    has_many :favorites
    has_many :inventories, through: :favorites

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
