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
    title: "Teal Tactical Cargos",
    description:
      "Stylish teal cargo pants with multiple pockets. Perfect for both street style and functionality.",
    image: "/images/teal-pants.jpg",
    largeImage: "/images/teal-pants.jpg",
  },
  {
    title: "Urban Explorer Backpack",
    description:
      "Urban backpack with modern design and ample storage. Essential for the street-savvy.",
    image: "/images/dope-backpack.jpg",
    largeImage: "/images/dope-backpack.jpg",
  },
  {
    title: "Minimalist Street Tote",
    description:
      "Clean and simple tote bag for everyday use. Perfect for shopping or carrying essentials.",
    image: "/images/bag.jpg",
    largeImage: "/images/bag.jpg",
  },
  {
    id: 4,
    title: "Skeleton Crew Hoodie",
    description:
      "Edgy skeleton print hoodie for those who like to make a statement.",
    image: "/images/skeleton-hoodie.jpg",
    largeImage: "/images/skeleton-hoodie.jpg",
  },
  {
    id: 5,
    title: "Vintage Explorer Satchel",
    description:
      "Classic leather satchel with modern touches. Perfect for work or casual outings.",
    image: "/images/satchel.jpg",
    largeImage: "/images/satchel.jpg",
  },
  {
    title: "Cropped Street Fighter Hoodie",
    description:
      "Trendy cropped hoodie perfect for layering. Modern street style essential.",
    image: "/images/crop-hoodie.jpg",
    largeImage: "/images/crop-hoodie.jpg",
  },
  {
    title: "Enemies of the State Cap",
    description:
      "Bold statement hat with unique design. Stand out from the crowd.",
    image: "/images/enemies-hat.jpg",
    largeImage: "/images/enemies-hat.jpg",
  },
  {
    title: "Distressed Street Denim",
    description:
      "Artfully distressed jeans with modern cut. Perfect for street style.",
    image: "/images/cut-jeans.jpg",
    largeImage: "/images/cut-jeans.jpg",
  },
  {
    title: "Clean Slate Hoodie",
    description:
      "Minimalist white hoodie for everyday wear. Essential streetwear piece.",
    image: "/images/white-hoodie.jpg",
    largeImage: "/images/white-hoodie.jpg",
  },
  {
    title: "Premium Street Cap",
    description:
      "High-quality cap with premium materials. Street style essential.",
    image: "/images/p-hat.jpg",
    largeImage: "/images/p-hat.jpg",
  },
  {
    title: "Jurassic Street Tee",
    description:
      "Fun dinosaur graphic t-shirt. Perfect for casual street style.",
    image: "/images/dino-shirt.jpg",
    largeImage: "/images/dino-shirt.jpg",
  },
  {
    title: "Street Classic Sneakers",
    description: "Timeless sneakers for everyday wear. Comfort meets style.",
    image: "/images/sneakers.jpg",
    largeImage: "/images/sneakers.jpg",
  },
  {
    title: "Urban Lens Tee",
    description: "Unique photography-inspired t-shirt. Stand out in the crowd.",
    image: "/images/unsplash.jpg",
    largeImage: "/images/unsplash.jpg",
  },
  {
    title: "Nautical Street Tee",
    description:
      "Maritime-inspired t-shirt with ship design. Perfect for casual wear.",
    image: "/images/ship-tee.jpg",
    largeImage: "/images/ship-tee.jpg",
  },
  {
    title: "Paws & Claws Tee",
    description: "Cute dog-themed t-shirt for animal lovers. Casual and fun.",
    image: "/images/woof-dog.jpg",
    largeImage: "/images/woof-dog.jpg",
  },
  {
    title: "Feline Street Backpack",
    description: "Adorable cat-themed backpack. Perfect for cat lovers.",
    image: "/images/cat-backpack.jpg",
    largeImage: "/images/cat-backpack.jpg",
  },
  {
    title: "Teal Street Fighter Tee",
    description: "Vibrant teal t-shirt for everyday street style.",
    image: "/images/teal-tee.jpg",
    largeImage: "/images/teal-tee.jpg",
  },
  {
    title: "Street Warrior Boots",
    description: "Timeless boots for any occasion. Durable and stylish.",
    image: "/images/boots.jpg",
    largeImage: "/images/boots.jpg",
  },
  {
    title: "Urban Elegance Blouse",
    description: "Elegant blouse perfect for casual or formal occasions.",
    image: "/images/blouse.jpg",
    largeImage: "/images/blouse.jpg",
  },
  {
    title: "Hydration Street Pack",
    description: "Practical backpack with drink holder. Perfect for on-the-go.",
    image: "/images/drink-backpack.jpg",
    largeImage: "/images/drink-backpack.jpg",
  },
  {
    title: "Sunset Street Boots",
    description:
      "Bold yellow boots to make a statement. Perfect for street style.",
    image: "/images/yellow-boots.jpg",
    largeImage: "/images/yellow-boots.jpg",
  },
  {
    title: "Street Minimalist Wallet",
    description: "Sleek and simple wallet for everyday use.",
    image: "/images/wallet.jpg",
    largeImage: "/images/wallet.jpg",
  },
  {
    title: "Urban Elegance Purse",
    description: "Elegant purse perfect for any occasion.",
    image: "/images/purse.jpg",
    largeImage: "/images/purse.jpg",
  },
  {
    title: "Tokyo Street Fighter Hoodie",
    description: "Japanese-inspired hoodie with unique design.",
    image: "/images/tokyo-hoodie.jpg",
    largeImage: "/images/tokyo-hoodie.jpg",
  },
  {
    title: "Summer Street Romper",
    description: "Stylish romper perfect for summer days.",
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
