const REVIEWS = [
  {
    _id: "58c03ac18060197ca0b52d51",
    author: "58c039018060197ca0b52d4c",
    store: "58c03a958060197ca0b52d50",
    text: "I tried this place last week and it was incredible! Amazing selection of local and imported brews and the food is to die for! ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c03af28060197ca0b52d53",
    author: "58c03ada8060197ca0b52d52",
    store: "58c03a958060197ca0b52d50",
    text: "hipsters everywhere",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08780bbb1a51e0d43a050",
    author: "58c039018060197ca0b52d4c",
    store: "58c065dbbbb1a51e0d43a04f",
    text: "Always a great spot to grab a coffee with a friend. ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08796bbb1a51e0d43a051",
    author: "58c039018060197ca0b52d4c",
    store: "58c061518060197ca0b52d5e",
    text: "Great ramen, a little pricey for what you get. ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c087acbbb1a51e0d43a052",
    author: "58c039018060197ca0b52d4c",
    store: "58c060e98060197ca0b52d5d",
    text: "Tried this place with my wife last week and it was incredible. ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c087b9bbb1a51e0d43a053",
    author: "58c039018060197ca0b52d4c",
    store: "58c0609b8060197ca0b52d5c",
    text: "Pretty good soups. ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c087debbb1a51e0d43a054",
    author: "58c039018060197ca0b52d4c",
    store: "58c060558060197ca0b52d5b",
    text: "If you need a great place with bangin' food that is open late, look no further than work.  ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c087f4bbb1a51e0d43a055",
    author: "58c039018060197ca0b52d4c",
    store: "58c05fd08060197ca0b52d5a",
    text: "$12 Banana smoothies. I'd skip this one next time. ",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c0880bbbb1a51e0d43a056",
    author: "58c039018060197ca0b52d4c",
    store: "58c05f928060197ca0b52d59",
    text: "🐔🐔🐔🐔\r\n\r\n🐔🐔🐔🐔🐔\r\n🐔🐔🐔🐔🐔🐔🐔 \r\n🐔🐔🐔\r\n\r\nbok bok bok",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08821bbb1a51e0d43a057",
    author: "58c039018060197ca0b52d4c",
    store: "58c05c208060197ca0b52d58",
    text: "Great spot for Brunch 👌 ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08832bbb1a51e0d43a058",
    author: "58c039018060197ca0b52d4c",
    store: "58c05bcd8060197ca0b52d57",
    text: "I only wish I could find them before they were all sold out! ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08841bbb1a51e0d43a059",
    author: "58c039018060197ca0b52d4c",
    store: "58c05b558060197ca0b52d56",
    text: "Oysters are amazing here as are the cocktails. ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c0884fbbb1a51e0d43a05a",
    author: "58c039018060197ca0b52d4c",
    store: "58c05aef8060197ca0b52d55",
    text: "A little expensive but the ambiance is great. ",
    rating: 2,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08863bbb1a51e0d43a05b",
    author: "58c039018060197ca0b52d4c",
    store: "58c057838060197ca0b52d54",
    text: "I ate so much 🐟 here. ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08878bbb1a51e0d43a05c",
    author: "58c039018060197ca0b52d4c",
    store: "58c03a428060197ca0b52d4f",
    text: "I'm not a fancy dude but this place is the cat's meow. ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c0888ebbb1a51e0d43a05d",
    author: "58c039018060197ca0b52d4c",
    store: "58c039ee8060197ca0b52d4e",
    text: "Try the sour patch kids for dessert. ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c088a9bbb1a51e0d43a05e",
    author: "58c039018060197ca0b52d4c",
    store: "58c039938060197ca0b52d4d",
    text: "My middle name is charcuterie ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c089e1d1d97c276fd56cd7",
    author: "58c03ada8060197ca0b52d52",
    store: "58c065dbbbb1a51e0d43a04f",
    text: "The coffee was too hot!",
    rating: 2,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c089f9d1d97c276fd56cd8",
    author: "58c03ada8060197ca0b52d52",
    store: "58c061518060197ca0b52d5e",
    text: "Who pays $15 for Mr Noodles?! ",
    rating: 2,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a07d1d97c276fd56cd9",
    author: "58c03ada8060197ca0b52d52",
    store: "58c060e98060197ca0b52d5d",
    text: "Mary and I enjoyed the wine here. ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a2dd1d97c276fd56cda",
    author: "58c03ada8060197ca0b52d52",
    store: "58c0609b8060197ca0b52d5c",
    text: "Soup was too hot!",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a39d1d97c276fd56cdb",
    author: "58c03ada8060197ca0b52d52",
    store: "58c060558060197ca0b52d5b",
    text: "HIPSTERS GET OUT OF MY CITY",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a4ad1d97c276fd56cdc",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05fd08060197ca0b52d5a",
    text: "When I was a kid we ate salad ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a58d1d97c276fd56cdd",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05f928060197ca0b52d59",
    text: "Now this is a place that I can get behind!",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a78d1d97c276fd56cde",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05c208060197ca0b52d58",
    text: "I like things that are consistent ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08a86d1d97c276fd56cdf",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05bcd8060197ca0b52d57",
    text: "Tim Hortons has nothin' on this monster",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08aa1d1d97c276fd56ce0",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05b558060197ca0b52d56",
    text: "I ate at this place and I had two black something the next day",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08ab0d1d97c276fd56ce1",
    author: "58c03ada8060197ca0b52d52",
    store: "58c05aef8060197ca0b52d55",
    text: "I prefer Taco Bell",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c08ad2d1d97c276fd56ce2",
    author: "58c03ada8060197ca0b52d52",
    store: "58c03a428060197ca0b52d4f",
    text: "Nice waitress here",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a794fb4d61115815f8ae",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c065dbbbb1a51e0d43a04f",
    text: "Best coffee in town! ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a812fb4d61115815f8af",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c061518060197ca0b52d5e",
    text: "I could eat ramen eggs all day long 🥚🥚🥚🥚🥚",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a826fb4d61115815f8b0",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c060e98060197ca0b52d5d",
    text: "🍕🍕🍕🍕 This pizza is the 💣",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a836fb4d61115815f8b1",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c0609b8060197ca0b52d5c",
    text: "Meh Soup ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a853fb4d61115815f8b2",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c060558060197ca0b52d5b",
    text: "Nothing better than a PBR after a long day of social media ",
    rating: 3,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a88afb4d61115815f8b3",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05fd08060197ca0b52d5a",
    text: "👎🏻 Too Expensive ",
    rating: 1,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a8aafb4d61115815f8b4",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05f928060197ca0b52d59",
    text: "🐔 A+ Chicken",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a8b8fb4d61115815f8b5",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05c208060197ca0b52d58",
    text: "Eggs Benny 🍳",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a8cefb4d61115815f8b6",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05bcd8060197ca0b52d57",
    text: "The best doughnuts in the world 🍩 ",
    rating: 5,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a8e5fb4d61115815f8b7",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05b558060197ca0b52d56",
    text: "Fantastic Selection of cocktails ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a8f6fb4d61115815f8b8",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c05aef8060197ca0b52d55",
    text: "I could eat these tacos every day for the rest of my life ",
    rating: 4,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
  {
    _id: "58c6a907fb4d61115815f8b9",
    author: "58c08bbed1d97c276fd56ce3",
    store: "58c057838060197ca0b52d54",
    text: "Pretty good but not worth the hype. ",
    rating: 2,
    created: new Date(
      Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  },
];

const STORES = [
  {
    _id: "58c039938060197ca0b52d4d",
    slug: "golden-crust-bakery",
    name: "Golden Crust Bakery",
    description:
      "Artisanal sourdough and traditional European breads, baked fresh daily. Our master bakers use ancient techniques and organic ingredients to create the perfect crust and crumb.",
    author: "58c039018060197ca0b52d4c",
    photo: "breads.jpg",
    tags: ["Family Friendly", "Vegetarian", "Takeout"],
    created: "2024-03-08T17:04:19.860Z",
    location: {
      address: "123 King Street West, Toronto, ON, Canada",
      coordinates: [-79.3789, 43.6487],
      type: "Point",
    },
  },
  {
    _id: "58c039ee8060197ca0b52d4e",
    slug: "the-rolling-pin",
    name: "The Rolling Pin",
    description:
      "A cozy bakery specializing in flaky croissants, buttery pastries, and artisanal breads. Watch our bakers at work through the open kitchen while enjoying your morning coffee.",
    author: "58c039018060197ca0b52d4c",
    photo: "bakery.jpg",
    tags: ["Family Friendly", "Takeout"],
    created: "2024-03-08T17:05:50.134Z",
    location: {
      address: "45 Queen Street West, Toronto, ON, Canada",
      coordinates: [-79.3792, 43.6512],
      type: "Point",
    },
  },
  {
    _id: "58c03a428060197ca0b52d4f",
    slug: "oyster-haven",
    name: "Oyster Haven",
    description:
      "Fresh oysters and seafood served in an elegant setting. Our expert shuckers prepare the finest selection of East and West Coast oysters, paired with craft cocktails.",
    author: "58c039018060197ca0b52d4c",
    photo: "oysters.jpeg",
    tags: ["Licensed", "Open Late", "Reservations"],
    created: "2024-03-08T17:07:14.681Z",
    location: {
      address: "78 King Street East, Toronto, ON, Canada",
      coordinates: [-79.3734, 43.6498],
      type: "Point",
    },
  },
  {
    _id: "58c03a958060197ca0b52d50",
    slug: "the-gourmet-burger",
    name: "The Gourmet Burger",
    description:
      "Elevated burger experience featuring house-ground beef, artisanal buns, and creative toppings. Our secret sauce has been perfected over generations.",
    author: "58c039018060197ca0b52d4c",
    photo: "burger.jpg",
    tags: ["Family Friendly", "Takeout", "Licensed"],
    created: "2024-03-08T17:08:37.131Z",
    location: {
      address: "27 Queen Street East, Toronto, ON, Canada",
      coordinates: [-79.3745, 43.6523],
      type: "Point",
    },
  },
  {
    _id: "58c057838060197ca0b52d54",
    slug: "pasta-paradiso",
    name: "Pasta Paradiso",
    description:
      "Authentic Italian pasta made fresh daily. Our chefs craft each dish using traditional techniques and imported ingredients from Italy.",
    author: "58c039018060197ca0b52d4c",
    photo: "pasta.jpg",
    tags: ["Licensed", "Reservations", "Vegetarian"],
    created: "2024-03-08T19:12:03.957Z",
    location: {
      address: "31 College Street, Toronto, ON, Canada",
      coordinates: [-79.3834, 43.6598],
      type: "Point",
    },
  },
  {
    _id: "58c05aef8060197ca0b52d55",
    slug: "sweet-treats-donuts",
    name: "Sweet Treats Donuts",
    description:
      "Handcrafted donuts with creative flavors and toppings. Our bakers start early to ensure you get the freshest, most delicious donuts every morning.",
    author: "58c039018060197ca0b52d4c",
    photo: "donut.jpg",
    tags: ["Takeout", "Family Friendly", "Vegetarian"],
    created: "2024-03-08T19:26:39.863Z",
    location: {
      address: "150 Dundas Street West, Toronto, ON, Canada",
      coordinates: [-79.3801, 43.6545],
      type: "Point",
    },
  },
  {
    _id: "58c05b558060197ca0b52d56",
    slug: "the-charcuterie-board",
    name: "The Charcuterie Board",
    description:
      "Artisanal cured meats, local cheeses, and house-made preserves. Perfect for sharing with friends over a glass of wine.",
    author: "58c039018060197ca0b52d4c",
    photo: "charcuterie.jpg",
    tags: ["Licensed", "Reservations", "Open Late"],
    created: "2024-03-08T19:28:21.738Z",
    location: {
      address: "163 Spadina Avenue, Toronto, ON, Canada",
      coordinates: [-79.3992, 43.6489],
      type: "Point",
    },
  },
  {
    _id: "58c05bcd8060197ca0b52d57",
    slug: "fluffy-pancake-house",
    name: "Fluffy Pancake House",
    description:
      "Breakfast paradise featuring the fluffiest pancakes in town. Our secret recipe has been passed down through generations.",
    author: "58c039018060197ca0b52d4c",
    photo: "pancake.jpg",
    tags: ["Family Friendly", "Vegetarian", "Takeout"],
    created: "2024-03-08T19:30:21.147Z",
    location: {
      address: "45 Front Street East, Toronto, ON, Canada",
      coordinates: [-79.3712, 43.6478],
      type: "Point",
    },
  },
  {
    _id: "58c05c208060197ca0b52d58",
    slug: "toast-and-co",
    name: "Toast & Co",
    description:
      "Elevated toast creations with artisanal bread and creative toppings. A modern take on the classic breakfast favorite.",
    author: "58c039018060197ca0b52d4c",
    photo: "toast.jpg",
    tags: ["Vegetarian", "Takeout"],
    created: "2024-03-08T19:31:44.389Z",
    location: {
      address: "78 Wellington Street West, Toronto, ON, Canada",
      coordinates: [-79.3789, 43.6467],
      type: "Point",
    },
  },
  {
    _id: "58c060e98060197ca0b52d5d",
    slug: "salmon-house",
    name: "Salmon House",
    description:
      "Elegant fine dining specializing in premium salmon filets. Our expert chefs prepare each cut with precision, featuring both classic and innovative preparations.",
    author: "58c039018060197ca0b52d4c",
    photo: "salmon.jpeg",
    tags: ["Licensed", "Reservations", "Open Late"],
    created: "2024-03-08T19:52:09.768Z",
    location: {
      address: "92 Bay Street, Toronto, ON, Canada",
      coordinates: [-79.3767, 43.6456],
      type: "Point",
    },
  },
  {
    _id: "58c0609b8060197ca0b52d5c",
    slug: "the-snack-shack",
    name: "The Snack Shack",
    description:
      "Creative small plates and shareable snacks. Perfect for a casual night out with friends or a quick bite.",
    author: "58c039018060197ca0b52d4c",
    photo: "snacks.jpg",
    tags: ["Licensed", "Open Late", "Takeout"],
    created: "2024-03-08T19:50:51.495Z",
    location: {
      address: "55 Yonge Street, Toronto, ON, Canada",
      coordinates: [-79.3778, 43.6489],
      type: "Point",
    },
  },
  {
    _id: "58c061518060197ca0b52d5e",
    slug: "artisan-loaf",
    name: "Artisan Loaf",
    description:
      "Specializing in traditional sourdough and artisanal breads. Our slow-fermented loaves are baked fresh daily in our wood-fired oven.",
    author: "58c039018060197ca0b52d4c",
    photo: "loaf.jpg",
    tags: ["Family Friendly", "Vegetarian", "Takeout"],
    created: "2024-03-08T19:53:53.295Z",
    location: {
      address: "67 Church Street, Toronto, ON, Canada",
      coordinates: [-79.3756, 43.6501],
      type: "Point",
    },
  },
  {
    _id: "58c065dbbbb1a51e0d43a04f",
    slug: "sweet-rolls-bakery",
    name: "Sweet Rolls Bakery",
    description:
      "Specializing in cinnamon rolls, sticky buns, and other sweet pastries. Our secret recipe has been delighting customers for over 20 years.",
    author: "58c039018060197ca0b52d4c",
    photo: "rolls.jpg",
    tags: ["Family Friendly", "Vegetarian", "Takeout"],
    created: "2024-03-08T20:13:15.965Z",
    location: {
      address: "89 Adelaide Street West, Toronto, ON, Canada",
      coordinates: [-79.379, 43.649],
      type: "Point",
    },
  },
];

const USERS = [
  {
    _id: "58c039018060197ca0b52d4c",
    salt: "1997f002c3db624f17acdcc8a1a21be1708916f0b21360e7b460f20dae2a179a",
    hash: "c26a834cacea8486c5e25b046c219ea11df633320ecf78834ee72d6be12cfb06a2ce224442cee16f0d299931dc8c1694a7416c825fef4e95fcb5a7aa28cf4a98bc0111eb00fd7623e7ab12139327b66558dd97606df3f2848de21e878bc3226016b6faaef7e04cbdcd15ea23835dfc8f0b603ae0a74af7daecffcb6ff30d734c57cd35579a8535d3bc65cc0c86befcde4a3b8bb5f1fce31b709f58202507ee1809c61b2600122ca077988c229414baee51d8993a0b0389d60d154d6b64285cd56ff4ace497727ea1c48917feef981ea2115520c9fe3952e03e7c779eebd0a58ad94c62d321ebb22b11f6e7d414e3c61e5a4aebb6d40c304e6f2875181483716f5ad5b8e525dfbd7bda537b429dfd43881ea9ff60c5e405268180d4f2b442cca51ac1ee303f8a94d2622ec13e4a11e04a4565187569bc27e32dc8868677f2f5a8cecbef7a49e6708ba264d1c1335a4b8fe45fdb2912b59441f438ef762d7cf7f0f03ea76290fc701858817413cc60eae20ec6c62d787eaa6d2a9917213f3d832793f3651450969ed32ccf888cb6dcffa50d3d210eeb592319392c1a0523d942dfcd06f1be714cecf48b01fc7f3c2ac6f3f7a87d8db22c418a8b4e18fdfb129c7ee0e4912b7d343d6d30d3a59c868c047f6ddb88de5317c161c88217cd1788895482834596e753bed0d452969866ca83a891103f216797e001edff058e9d4ece97",
    email: "wes@example.com",
    name: "Wes Bos",
    hearts: ["58c039938060197ca0b52d4d", "58c03a428060197ca0b52d4f"],
  },
  {
    _id: "58c03ada8060197ca0b52d52",
    salt: "3a8479b05be4c4f1f62f484e02081be7662ee46b5de17cb8721d043fca364ca5",
    hash: "3355b0acc7b0cebd66675843ae7d56048ea093432c6ca096858850d18a443bcb3fc87d5b4df911f3b73e22bc672e760284013e581ecd98cbf4223441c6d708a1266cc188753f167caafe9b06f2fa236ece8b5320f3f002167d781698f12da373a48e465a44b008b84cf92142bc4f35818d6e86a45a0a17c43ff6f51d0eea4cd1cb59a3cc9d8ac44f5feec3a054993dacc6f83d85d324ee50eb7cfa1e01f878394e350a11ee9a3620c5280c192ca6b50a288695e5676c6dba828162b13b1a3d6a8b91bc82799043a3127c8fc34300987ca73dbec36721d1b78fa35f36c67fabdaaecc437e34cedeffdf41ae61e1b5b12d326b9ecb9bbc09b24ac9aa89e5ca0297ad2ee21f448c38324bc7795563a41d9661c63975ecfd4734496e5bf93376691e6683e8a58a272800957ab6606372bdfee5e31ce551b83ac7db6d422a72394747ef836d7a02ecb9502001d82254663fe5f42d040d653730d366f168429f70907b107fab12beca4d0b273130a2aeae1b652001e86b5bed85355721cb5d355bd4200369677b8b62761ac2063323270b33e45827d51f7b78e8f2ac7d9c701e5528087452692dba57d4d81d65cc8ad1d898fdbd108fdb3be148869ff737f91b5ebc1b68595504c9fd8c2b38a5809f76e470689dd1e5b27803503192c61e6cb135b9b93651bb06b369ebbf7585356255d73c74cabe9ae4f84f98c388b729399340106a",
    email: "debbie@example.com",
    name: "Debbie Downer",
    hearts: [],
  },
  {
    _id: "58c08bbed1d97c276fd56ce3",
    salt: "e2e70759d59ad47beb07170abf44a7f24a03c41b28c579b79e0a9e75d3648aef",
    hash: "40d93d6c3ef8fb2e4775867de18532f9d6a8509a5bb85a1e20c418dbea4083a94e258b4340572a5e6fc18fac32f98362137fb081492db9e0f12c7c3b8c87090c77a12894046fecccb83714e78fe4a7b3e993b90e4d8816fbf05306d5e7ca2b0209833831e16451a928fcb3ad23b1a0f8ef029d8813b6dd00068f3e20df58e5a32c85f2cc85b4a9ac0b1bcd5e2bbab489d7d5649c26d75e70d3fcb01347de7f0e2f41dc53d28dec7a0a9fd4e05b2e499a6f646dcad99c80adfb7c4d35ce607ab4450c24aa08faf4f43b5e303410bc7cf6cf968bb15d474cf7f6edf9bd66daac6340c839d5675a0b8137d1b35c2888e0a82c0d5643c12b69b01e2cbb19f82daffffc80ceb28799711f181e37b232d29795772bde87b9eb099e22f5afcd3ec6c76fef4f55d1ba17f5a15fea2b52b58fe465e5733b1136a3ee7b45bbae79957b7c0c2f81922dac35b227fe934ae92aac413c29d79cc1551dd95c9144d058449d1ed3d24fdcc83f06ba8e25f21b5057216a1291459991c9914378b38da30064d228411ae7886199101ff1bbfd348e691f963f266892252c3a14714650b3c92cb9f8970186950fd0f7a5a71c2f679cc577c81e4b668aa8a76a282e2cdf55a38bf9aa225c330236fb279c8a6f094179876ddaa574e15f08abbfeb2138cb3fae1753d3ab0206bb198f5315700a61cb83ef5be559884aa6132fe1161af8b3873546b5acfa",
    email: "beau@example.com",
    name: "Beau",
    hearts: ["58c061518060197ca0b52d5e"],
  },
];

const storesWithReviews = STORES.map((store) => {
  const reviewsWithUsers = REVIEWS.filter(
    (review) => review.store === store._id
  ).map((review) => {
    const user = USERS.find((user) => user._id === review.author);
    return { ...review, user };
  });
  return { ...store, reviews: reviewsWithUsers };
});

export { storesWithReviews };
