# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[Home, Person].map(&:destroy_all)

my_house = Home.new(address: '1401 West Water Street, Elmira, NY 14905')
my_apartment = Home.new(address: '278 Parker Avenue, San Francisco, CA 94118')

[my_house, my_apartment].map(&:save)

me = Person.new(name: 'Andrew Booth', home_id: my_apartment.id)
mom = Person.new(name: 'Kathleen Booth', home_id: my_house.id)

[me, mom].map(&:save)
