const PERMISSIONS = [
  "admin",
  "user",
  "item_create",
  "item_update",
  "item_delete",
];

const USER = {
  id: "1",
  name: "Jane Doe",
  email: "jane@example.com",
  password: "jane-doe-rae-me",
  permissions: PERMISSIONS,
  createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
};

const ITEMS = [
  {
    title: "Teal Blockers",
    description:
      "Gonna recommend a plain shirt with these ones, they're pretty loud.",
    image: "/images/teal-pants.jpg",
    largeImage: "/images/teal-pants.jpg",
  },
  {
    title: "Dopepack",
    description:
      "NOTE: Does not come with anything illegal, but store what you want lmao",
    image: "/images/dope-backpack.jpg",
    largeImage: "/images/dope-backpack.jpg",
  },
  {
    title: "Total Tote",
    description: "It's like twice as big on the inside, probably.",
    image: "/images/bag.jpg",
    largeImage: "/images/bag.jpg",
  },
  {
    id: 4,
    title: "Skeleton Crew Sweater",
    description: "Don't you want to rep the skateboarding skeleton?",
    image: "/images/skeleton-hoodie.jpg",
    largeImage: "/images/skeleton-hoodie.jpg",
  },
  {
    id: 5,
    title: "Classic Satch",
    description:
      "Is this satchel old, or just rugged? We know the answer and will not tell you.",
    image: "/images/satchel.jpg",
    largeImage: "/images/satchel.jpg",
  },
  {
    title: "Magazine Cropping",
    description:
      "Cut out letters from magazines, and also the bottom half of a bigger sweater.",
    image: "/images/crop-hoodie.jpg",
    largeImage: "/images/crop-hoodie.jpg",
  },
  {
    title: "E·N·E·M·I·E·S",
    description:
      "A unique never-before-seen design that is entirely original and makes no references to existing materials.",
    image: "/images/enemies-hat.jpg",
    largeImage: "/images/enemies-hat.jpg",
  },
  {
    title: "Long Board Shorts",
    description:
      "Does the 'long' modify the 'board' or the 'shorts'? Only one way to find out.",
    image: "/images/cut-jeans.jpg",
    largeImage: "/images/cut-jeans.jpg",
  },
  {
    title: "Keep it Simple",
    description: "Comes with pants I think, most of this is drop shipped.",
    image: "/images/white-hoodie.jpg",
    largeImage: "/images/white-hoodie.jpg",
  },
  {
    title: "Jurassick Shirt",
    description:
      "It's pretty cute, but I think they were much more horrifying when they were around.",
    image: "/images/dino-shirt.jpg",
    largeImage: "/images/dino-shirt.jpg",
  },
  {
    title: "Spilled Paint",
    description:
      "Somehow finding the perfect balance of both too many colours and too few.",
    image: "/images/sneakers.jpg",
    largeImage: "/images/sneakers.jpg",
  },
  {
    title: "Unsplash Inc. Tee",
    description: "Yeah the photography is free, but this shirt sure isn't.",
    image: "/images/unsplash.jpg",
    largeImage: "/images/unsplash.jpg",
  },
  {
    title: '"woof"',
    description:
      "Dog not included, but man do I wish it was. Look at that lil' guy.",
    image: "/images/woof-dog.jpg",
    largeImage: "/images/woof-dog.jpg",
  },
  {
    title: "the basics",
    description:
      "I really hope the model is okay, they took quite the tumble it would seem.",
    image: "/images/boots.jpg",
    largeImage: "/images/boots.jpg",
  },
  {
    title: "The Blue Blouse",
    description:
      "The matching accessories are sold separately, at some other store.",
    image: "/images/blouse.jpg",
    largeImage: "/images/blouse.jpg",
  },

  {
    title: "Billionaire's Bifold",
    description:
      "Note: You can still buy this if you're not a billionaire, we don't judge.",
    image: "/images/wallet.jpg",
    largeImage: "/images/wallet.jpg",
  },
  {
    title: "Yllw // Pnk",
    description:
      "We took out the vowels so we could pass the savings on to you.",
    image: "/images/purse.jpg",
    largeImage: "/images/purse.jpg",
  },
  {
    title: "A Summer Romp",
    description:
      "I think people usually use this to describe movies, but it's a pretty good pun so it stays.",
    image: "/images/romper.jpg",
    largeImage: "/images/romper.jpg",
  },
].map((item, index) => ({
  ...item,
  id: index + 1,
  user: USER,
  price: Math.floor(Math.random() * 25000),
}));

const cartStart = Math.floor(Math.random() * ITEMS.length);
USER.cart = ITEMS.slice(
  cartStart,
  cartStart + Math.ceil(Math.random() * 5)
).map((item) => {
  return {
    id: item.id,
    item,
    quantity: Math.ceil(Math.random() * 3),
  };
});

function createRandomOrder(id) {
  const randomStart = Math.floor(Math.random() * ITEMS.length);
  const items = ITEMS.slice(
    randomStart,
    randomStart + Math.ceil(Math.random() * 5)
  );
  return items.reduce(
    (acc, item) => {
      const quantity = Math.ceil(Math.random() * 5);
      acc.items.push({
        ...item,
        quantity,
      });
      acc.total += item.price * quantity;
      return acc;
    },
    {
      id: `SICK-FITS-${id}`,
      items: [],
      total: 0,
      charge: `ch_${id}`,
      createdAt: new Date(
        Date.now() - Math.ceil(Math.random() * 5) * 30 * 24 * 60 * 60 * 1000
      ),
    }
  );
}

USER.orders = [1, 2, 3, 4].map(createRandomOrder);

export { USER, ITEMS };
