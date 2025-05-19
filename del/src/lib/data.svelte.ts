interface Review {
  _id: string;
  author: string;
  store: string;
  text: string;
  rating: number;
  created: string;
}
interface Store {
  _id: string;
  slug: string;
  name: string;
  description: string;
  author: string;
  photo: string;
  tags: string[];
  created: string;
  location: {
    type: string;
    address: string;
    coordinates: number[];
  };
}
interface User {
  _id: string;
  email: string;
  name: string;
  hearts: string[];
}

const REVIEWS: Review[] = [
  {
    _id: "58c03ac18060197ca0b52d51",
    author: "58c03ada8060197ca0b52d52",
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

const STORES: Store[] = [
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

const USERS: User[] = [
  {
    _id: "58c039018060197ca0b52d4c",
    email: "wes@example.com",
    name: "Wes Bos",
    hearts: ["58c039938060197ca0b52d4d", "58c03a428060197ca0b52d4f"],
  },
  {
    _id: "58c03ada8060197ca0b52d52",
    email: "debbie@example.com",
    name: "Debbie Downer",
    hearts: [],
  },
  {
    _id: "58c08bbed1d97c276fd56ce3",
    email: "you@example.com",
    name: "You",
    hearts: ["58c061518060197ca0b52d5e"],
  },
];

let stores = $state(STORES);
let reviews = $state(REVIEWS);
let users = $state(USERS);

let storesWithReviews = $derived(
  stores.map((store) => {
    const reviewsWithUsers = reviews
      .filter((review) => review.store === store._id)
      .map((review) => {
        const user = users.find((user) => user._id === review.author);
        return { ...review, user };
      });
    return { ...store, reviews: reviewsWithUsers };
  })
);
let tagsCount = $derived(
  storesWithReviews
    .flatMap((store) => store.tags.map((tag) => ({ tag, store })))
    .reduce<Record<string, any[]>>((acc, { tag, store }) => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(store);
      return acc;
    }, {})
);
let userData = $derived(
  users.map((user) => {
    const heartedStores = storesWithReviews.filter((store) =>
      user.hearts.includes(store._id)
    );
    return { ...user, heartedStores };
  })
);

const getStores = () => storesWithReviews;
const getTags = () => tagsCount;
const getUserData = () => userData;
const ctx = $state<{
  user: User | null;
  flash: {
    message: string;
    type: "error" | "success";
  } | null;
}>({ user: null, flash: null });

export { getStores, getTags, getUserData, stores, reviews, users, ctx };
