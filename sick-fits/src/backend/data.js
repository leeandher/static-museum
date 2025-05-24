const PERMISSIONS = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE",
];

const USER = {
  id: "1",
  name: "Jane Doe",
  email: "jane@example.com",
  password: "abc123",
  resetToken: null,
  resetTokenExpiry: null,
  permissions: PERMISSIONS,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const ITEMS = [
  {
    id: 1,
    title: "Teal Tactical Cargos",
    description:
      "Stylish teal cargo pants with multiple pockets. Perfect for both street style and functionality.",
    image: "/images/teal-pants.jpg",
    largeImage: "/images/teal-pants.jpg",
    price: 4500,
    user: USER,
  },
  {
    id: 2,
    title: "Urban Explorer Backpack",
    description:
      "Urban backpack with modern design and ample storage. Essential for the street-savvy.",
    image: "/images/dope-backpack.jpg",
    largeImage: "/images/dope-backpack.jpg",
    price: 5500,
    user: USER,
  },
  {
    id: 3,
    title: "Minimalist Street Tote",
    description:
      "Clean and simple tote bag for everyday use. Perfect for shopping or carrying essentials.",
    image: "/images/bag.jpg",
    largeImage: "/images/bag.jpg",
    price: 2500,
    user: USER,
  },
  {
    id: 4,
    title: "Skeleton Crew Hoodie",
    description:
      "Edgy skeleton print hoodie for those who like to make a statement.",
    image: "/images/skeleton-hoodie.jpg",
    largeImage: "/images/skeleton-hoodie.jpg",
    price: 6500,
    user: USER,
  },
  {
    id: 5,
    title: "Vintage Explorer Satchel",
    description:
      "Classic leather satchel with modern touches. Perfect for work or casual outings.",
    image: "/images/satchel.jpg",
    largeImage: "/images/satchel.jpg",
    price: 7500,
    user: USER,
  },
  {
    id: 6,
    title: "Cropped Street Fighter Hoodie",
    description:
      "Trendy cropped hoodie perfect for layering. Modern street style essential.",
    image: "/images/crop-hoodie.jpg",
    largeImage: "/images/crop-hoodie.jpg",
    price: 4500,
    user: USER,
  },
  {
    id: 7,
    title: "Enemies of the State Cap",
    description:
      "Bold statement hat with unique design. Stand out from the crowd.",
    image: "/images/enemies-hat.jpg",
    largeImage: "/images/enemies-hat.jpg",
    price: 3000,
    user: USER,
  },
  {
    id: 8,
    title: "Distressed Street Denim",
    description:
      "Artfully distressed jeans with modern cut. Perfect for street style.",
    image: "/images/cut-jeans.jpg",
    largeImage: "/images/cut-jeans.jpg",
    price: 5500,
    user: USER,
  },
  {
    id: 9,
    title: "Clean Slate Hoodie",
    description:
      "Minimalist white hoodie for everyday wear. Essential streetwear piece.",
    image: "/images/white-hoodie.jpg",
    largeImage: "/images/white-hoodie.jpg",
    price: 4000,
    user: USER,
  },
  {
    id: 10,
    title: "Premium Street Cap",
    description:
      "High-quality cap with premium materials. Street style essential.",
    image: "/images/p-hat.jpg",
    largeImage: "/images/p-hat.jpg",
    price: 2500,
    user: USER,
  },
  {
    id: 11,
    title: "Jurassic Street Tee",
    description:
      "Fun dinosaur graphic t-shirt. Perfect for casual street style.",
    image: "/images/dino-shirt.jpg",
    largeImage: "/images/dino-shirt.jpg",
    price: 3500,
    user: USER,
  },
  {
    id: 12,
    title: "Street Classic Sneakers",
    description: "Timeless sneakers for everyday wear. Comfort meets style.",
    image: "/images/sneakers.jpg",
    largeImage: "/images/sneakers.jpg",
    price: 8500,
    user: USER,
  },
  {
    id: 13,
    title: "Urban Lens Tee",
    description: "Unique photography-inspired t-shirt. Stand out in the crowd.",
    image: "/images/unsplash.jpg",
    largeImage: "/images/unsplash.jpg",
    price: 3500,
    user: USER,
  },
  {
    id: 14,
    title: "Nautical Street Tee",
    description:
      "Maritime-inspired t-shirt with ship design. Perfect for casual wear.",
    image: "/images/ship-tee.jpg",
    largeImage: "/images/ship-tee.jpg",
    price: 3500,
    user: USER,
  },
  {
    id: 15,
    title: "Paws & Claws Tee",
    description: "Cute dog-themed t-shirt for animal lovers. Casual and fun.",
    image: "/images/woof-dog.jpg",
    largeImage: "/images/woof-dog.jpg",
    price: 3500,
    user: USER,
  },
  {
    id: 16,
    title: "Feline Street Backpack",
    description: "Adorable cat-themed backpack. Perfect for cat lovers.",
    image: "/images/cat-backpack.jpg",
    largeImage: "/images/cat-backpack.jpg",
    price: 4500,
    user: USER,
  },
  {
    id: 17,
    title: "Teal Street Fighter Tee",
    description: "Vibrant teal t-shirt for everyday street style.",
    image: "/images/teal-tee.jpg",
    largeImage: "/images/teal-tee.jpg",
    price: 3500,
    user: USER,
  },
  {
    id: 18,
    title: "Street Warrior Boots",
    description: "Timeless boots for any occasion. Durable and stylish.",
    image: "/images/boots.jpg",
    largeImage: "/images/boots.jpg",
    price: 9500,
    user: USER,
  },
  {
    id: 19,
    title: "Urban Elegance Blouse",
    description: "Elegant blouse perfect for casual or formal occasions.",
    image: "/images/blouse.jpg",
    largeImage: "/images/blouse.jpg",
    price: 5500,
    user: USER,
  },
  {
    id: 20,
    title: "Hydration Street Pack",
    description: "Practical backpack with drink holder. Perfect for on-the-go.",
    image: "/images/drink-backpack.jpg",
    largeImage: "/images/drink-backpack.jpg",
    price: 4500,
    user: USER,
  },
  {
    id: 21,
    title: "Sunset Street Boots",
    description:
      "Bold yellow boots to make a statement. Perfect for street style.",
    image: "/images/yellow-boots.jpg",
    largeImage: "/images/yellow-boots.jpg",
    price: 8500,
    user: USER,
  },
  {
    id: 22,
    title: "Street Minimalist Wallet",
    description: "Sleek and simple wallet for everyday use.",
    image: "/images/wallet.jpg",
    largeImage: "/images/wallet.jpg",
    price: 2500,
    user: USER,
  },
  {
    id: 23,
    title: "Urban Elegance Purse",
    description: "Elegant purse perfect for any occasion.",
    image: "/images/purse.jpg",
    largeImage: "/images/purse.jpg",
    price: 6500,
    user: USER,
  },
  {
    id: 24,
    title: "Tokyo Street Fighter Hoodie",
    description: "Japanese-inspired hoodie with unique design.",
    image: "/images/tokyo-hoodie.jpg",
    largeImage: "/images/tokyo-hoodie.jpg",
    price: 5500,
    user: USER,
  },
  {
    id: 25,
    title: "Summer Street Romper",
    description: "Stylish romper perfect for summer days.",
    image: "/images/romper.jpg",
    largeImage: "/images/romper.jpg",
    price: 4500,
    user: USER,
  },
];

USER.cart = ITEMS.slice(0, 3).map((item) => {
  return {
    id: item.id,
    item,
    quantity: Math.floor(Math.random() * 5),
  };
});

USER.orders = [
  ITEMS.slice(3, 6).reduce(
    (acc, item) => {
      const quantity = Math.floor(Math.random() * 5);
      acc.items.push({
        ...item,
        quantity,
      });
      acc.total += item.price * quantity;
      return acc;
    },
    {
      id: "order1",
      items: [],
      total: 0,
      charge: "ch_1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ),
  ITEMS.slice(8, 14).reduce(
    (acc, item) => {
      const quantity = Math.floor(Math.random() * 5);
      acc.items.push({
        ...item,
        quantity,
      });
      acc.total += item.price * quantity;
      return acc;
    },
    {
      id: "order1",
      items: [],
      total: 0,
      charge: "ch_1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ),
];

export { USER, ITEMS };
