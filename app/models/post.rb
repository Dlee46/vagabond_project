class Post < ApplicationRecord
    belongs_to :city
    validates :title, length: {minimum: 1, maximum: 200}, presence: true
end
