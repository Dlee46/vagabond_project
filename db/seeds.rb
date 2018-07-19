# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
City.destroy_all

atlanta = City.new
atlanta.name = "Atlanta"
atlanta.image = "https://lh3.googleusercontent.com/hLkjLFzbyjJwXKLB5GwL0zPEfb0uVY3V8KgEwGY3kPRkZ6qSEVDnLraeT8A8NmnOwsb6ZDE=s170"
atlanta.save


post1 = atlanta.posts.create(title: "East Atlanta", description: "It's dope/lit")
post2 = atlanta.posts.create(title: "Mid Town", description: "Bougie")
post3 = atlanta.posts.create(title: "Umi", description: "Bougie sushi place in Buckhead")
post4 = atlanta.posts.create(title: "Chops", description: "Bougie steak place in Buckhead")
post5 = atlanta.posts.create(title: "Ponce City Market", description: "Modern area with cool shops")

london = City.create(name: "London", image: "https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9753d35c4f5b62442eb81568033ddc2&auto=format&fit=crop&w=2850&q=80")

post6 = london.posts.create(title: "Tower of London", description: "One of London's most famous landmarks, the historic Tower houses the Crown Jewels, the prison cell of Sir Walter Raleigh, known as the Bloody Tower, and the Chapel of St. John and the Royal Armories.")
post7 = london.posts.create(title: "Houses of Parliament", description: "Most of this iconic building was built in the mid-19th century following a devastating fire in 1834. Westminster Hall survived the fire and dates from 1097. Visitors can book tours through the House of Commons and the House of Lords, and are welcome to watch debates and committees when the Houses are sitting.")
post8 = london.posts.create(title: "Tower Bridge", description: "An iconic London landmark and one of Britain's best loved historic sites, Tower Bridge is open to the public 363 days a year. Within the Bridge's iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world! Come learn about this incredible feat of Victorian engineering, discover how the Bridge is raised and enjoy stunning panoramic views across London from our high-level walkways, 42 metres above the River Thames. Opening Times: 10:00 - 17:30(last admission )")
post9 = london.posts.create(title: "St. Jame's Park", description: "This 90-acre park, the oldest Royal Park in London, features a large lake that is a wildlife sanctuary for ducks, geese, swans and even pelicans.")
post10 = london.posts.create(title: "Hyde Park", description: "Once the hunting ground for Henry VIII, this large royal park is best known for its famous Speakers' Corner, where people speak their minds, Rotton Row, a famous horse-riding area and Serpentine Lake, home to waterfowl and oarsmen.")

sf = City.create(name: "San Francisco", image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7402cc297bdfbb4a4856e764971dc013&auto=format&fit=crop&w=1950&q=80")

post11 = sf.posts.create(title: "Golden Gate Bridge", description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.")
post11 = sf.posts.create(title: "Fisherman's Wharf", description: "Fisherman’s Wharf, on the northern waterfront, is one of the city's busiest tourist areas. Souvenir shops and stalls selling crab and clam chowder in sourdough bread bowls appear at every turn, as do postcard views of the bay, Golden Gate and Alcatraz. There’s also a colony of sea lions to see and historic ships to tour. At Ghirardelli Square, boutiques and eateries reside in the famed former chocolate factory.")
post11 = sf.posts.create(title: "Alcatraz Island", description: "Alcatraz Island is located in San Francisco Bay, 1.25 miles offshore from San Francisco, California, United States.")
post11 = sf.posts.create(title: "Union Square", description: "Union Square is the teeming commercial hub of the city. Many major hotels and department stores are packed into the area surrounding the actual square. Numerous upscale boutiques, restaurants, nightspots and galleries occupy the spaces tucked between the larger buildings. At the intersection of Powell and Market streets, tourists huddle to view one the city’s most unique sites, the manual cable car turnaround.")
post11 = sf.posts.create(title: "Pier 39", description: "Pier 39 is a shopping center and popular tourist attraction built on a pier in San Francisco, California")