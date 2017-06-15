class Person < ActiveRecord::Base
  validates :name, :home_id, presence: true

  belongs_to :home,
    primary_key: :id,
    foreign_key: :home_id,
    class_name: :Home
end
