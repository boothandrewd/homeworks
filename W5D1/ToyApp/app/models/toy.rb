class Toy < ActiveRecord::Base
  validates :name, uniqueness: {
    scope: :toyable,
    message: 'Only one toy per pet'
  }

  belongs_to :toyable, polymorphic: true
end
