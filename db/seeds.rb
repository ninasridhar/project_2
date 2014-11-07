u1 = User.create!(email: 'test1@testmail.com', password: '12345678', name: 'Tony Photograph', username: 'photomaniac', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'London')

u2 = User.create!(email: 'test2@testmail.com', password: '12345678', name: 'Monica Picture', username: 'picturequeen', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'New York')

u3 = User.create!(email: 'test3@testmail.com', password: '12345678', name: 'Gunther Mueller', username: 'that_german_guy', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'Garmisch')

u4 = User.create!(email: 'test4@testmail.com', password: '12345678', name: 'Ling Lang', username: 'photomaniac', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'Shanghai')

u5 = User.create!(email: 'test5@testmail.com', password: '12345678', name: 'Friedrich Fischer', username: 'freidrich_fi', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'Duesseldorf')

u6 = User.create!(email: 'test6@testmail.com', password: '12345678', name: 'Bastian Schweinsteiger', username: 'football_guy_7', bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', hometown: 'Munich')

p1 = Photo.create(name: 'London', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', photo_link: 'skldjvblajhvdoabdfjknllaskjdbfnofiebcjnlsncfjl', user_id: 1, album_id: 1, location_id: 1, category_id: 1)

p2 = Photo.create(name: 'Flower IV', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', photo_link: 'skldjvblajhvdoabdfjknllaskjdbfnofiebcjnlsncfjl', user_id: 2, album_id: 2, location_id: 2, category_id: 2)

p3 = Photo.create(name: 'San Francisco', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', photo_link: 'skldjvblajhvdoabdfjknllaskjdbfnofiebcjnlsncfjl', user_id: 3, album_id: 3, location_id: 3, category_id: 3)

p4 = Photo.create(name: 'Automn Tree', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', photo_link: 'skldjvblajhvdoabdfjknllaskjdbfnofiebcjnlsncfjl', user_id: 4, album_id: 4, location_id: 4, category_id: 4)

p5 = Photo.create(name: 'Oscar the blue elephant', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam', photo_link: 'skldjvblajhvdoabdfjknllaskjdbfnofiebcjnlsncfjl', user_id: 5, album_id: 5, location_id: 5, category_id: 5)


a1 = Album.create(name:'Animals In The Zoo', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', user_id: 1)

a2 = Album.create(name:'European Architecture', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', user_id: 2)

a3 = Album.create(name:'Christmas Cakes', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', user_id: 3)

a4 = Album.create(name:'Trip To New Zealand', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', user_id: 4)

a5 = Album.create(name:'Asian History', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', user_id: 5)

l1 = Location.create(city: 'New York', country: 'USA')

l2 = Location.create(city: 'Hamburg', country: 'Germany')

l3 = Location.create(city: 'Shanghai', country: 'China')

l4 = Location.create(city: 'Paris', country: 'France')

l5 = Location.create(city: 'Barcelona', country: 'Spain')

c1 = Category.create(name: 'Architecture')

c2 = Category.create(name: 'Food')

c3 = Category.create(name: 'Tech')

c4 = Category.create(name: 'Nature')

c5 = Category.create(name: 'Fashion')



