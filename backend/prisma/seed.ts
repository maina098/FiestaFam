import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import * as bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const categoriesData = [
  {
    name: 'Breakfast',
    items: [
      { name: 'Fiesta Full English', price: 1200, description: 'Grilled mushrooms, baked beans, grilled tomatoes, sausages, beef bacon, toasted bread and eggs cooked to your liking.' },
      { name: 'Avocado Toast', price: 850, description: 'Avocado on a bed of rye bread with toasted sesame and eggs.' },
      { name: 'Sunrise Waffles', price: 800, description: 'Crispy waffles topped with bananas, strawberries, maple syrup & whipped cream.' },
      { name: 'Fluffy Pancakes', price: 800, description: 'Buttery pancakes served with pancake syrup and seasonal berries.' },
      { name: 'French Toast', price: 1100, description: 'Panfried bread coated with eggs, maple syrup, banana and strawberries.' },
    ]
  },
  {
    name: 'Appetizers',
    items: [
      { name: 'Chicken Caesar Salad', price: 1450, description: 'Tender chicken stripes, parmesan shavings, croutons on a bed of homegrown lettuce with measures dressing.' },
      { name: 'Sichuan Sizzle Wings', price: 950, description: 'Chuckling good wings coated with sichuan spiced flour dip in korean sauce.' },
      { name: 'Beef Samosa', price: 600, description: 'Minced meat, coriander, spices and lemon slices.' },
      { name: 'Buffalo Wings', price: 950, description: 'Chuckling good wings marinated in bufalo hot sauce, chili lime' },
      { name: 'Fiesta Tacos', price: 800, description: 'Tender chicken nestled in crispy taco shells, topped with creamy guacamole, charred corn salsa, and zesty chili lime crema.' },
      { name: 'Caprese Salad', price: 1200, description: 'Ripe tomatoes, creamy fresh mozzarella and fragrant basil.' },
      { name: 'Vegetable Minestrone Soup', price: 850, description: 'Creamy blended vegetables served with croutons.' },
      { name: 'Tomato Soup', price: 850, description: 'Creamy hearty tomato soup with basil and croutons' },
      { name: 'Fiesta Salad', price: 1100, description: 'Broccoli, cauliflower, fresh beans, sweet corn, carrot with ranch dressing' },
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Sticky Toffee Temptation', price: 1300, description: 'Indulge in a warm sticky date toffee pudding drizzled with butterscotch with vanilla ice cream' },
      { name: 'Sizzling Brownie', price: 1100, description: 'Fudgy brownies topped with ice cream and drizzled with a pool of chocolate sauce and served in a sizzler plate with all the sizzling action' },
      { name: 'Tiramisu', price: 1200, description: 'Creamy mascarppone cheese covered coffee diped lady fingers' },
      { name: 'Fruit Salad', price: 800, description: 'Seasonal freshly cut fruits' },
    ]
  },
  {
    name: 'Coffee',
    items: [
      { name: 'Cappuccino', price: 350 },
      { name: 'Cafe Latte', price: 300 },
      { name: 'Cortado', price: 250 },
      { name: 'Americano', price: 250 },
      { name: 'Macchiato', price: 300 },
      { name: 'Flat White', price: 300 },
      { name: 'Vanilla Latte', price: 350 },
      { name: 'Caramel Latte', price: 350 },
      { name: 'Fesha Latte', price: 350 },
      { name: 'Espresso', price: 250 },
      { name: 'Matcha Latte', price: 500 },
      { name: 'Peppermint Mocha', price: 500 },
      { name: 'Turkish Latte', price: 450 },
      { name: 'Non- Dairy Latte', price: 450, description: '(Almond, soya, oat)' },
    ]
  },
  {
    name: 'Tea',
    items: [
      { name: 'Afican Tea', price: 300 },
      { name: 'Black Tea', price: 250 },
      { name: 'Mint Tea', price: 250 },
      { name: 'Thyme Tea', price: 250 },
      { name: 'Rosemarry Tea', price: 250 },
      { name: 'Hot Chocolate', price: 300 },
      { name: 'Dawa', price: 300 },
      { name: 'Fruit Tea', price: 350 },
      { name: 'Habiscus Tea', price: 350 },
    ]
  },
  {
    name: 'Shakes & Smoothies',
    items: [
      { name: 'Vanilla Shake', price: 500 },
      { name: 'Stawberry Shake', price: 500 },
      { name: 'Chocolate Shake', price: 500 },
      { name: 'Frappuccino', price: 500 },
      { name: 'Affogatto', price: 500 },
      { name: 'Banana Smoothie', price: 500 },
      { name: 'Mango Smoothie', price: 500 },
      { name: 'Hyderadad Smoothie', price: 500 },
      { name: 'Oreo Shake', price: 650 },
      { name: 'Lotus Biscoff Shake', price: 700 },
      { name: 'Yemeni Smoothie', price: 700 },
    ]
  },
  {
    name: 'Iced Beverages',
    items: [
      { name: 'Iced Mocha', price: 450 },
      { name: 'Iced Caramel Latte', price: 450 },
      { name: 'Iced Fisha Latte', price: 450 },
      { name: 'Iced Vanila Latte', price: 450 },
      { name: 'Iced Latte', price: 450 },
      { name: 'Iced Tea', price: 450 },
    ]
  },
  {
    name: 'Juices & Mojito',
    items: [
      { name: 'Strawberry Mojito', price: 550 },
      { name: 'Passion Majito', price: 550 },
      { name: 'Classic Lemonade', price: 550 },
      { name: 'Pineapple Juice', price: 400 },
      { name: 'Watermelon Juice', price: 400 },
      { name: 'Mango Juice', price: 400 },
      { name: 'Blue Ocean', price: 550 },
      { name: 'Pineapple Mint Juice', price: 450 },
      { name: 'Kiwi Majito', price: 500 },
    ]
  },
  {
    name: "Soft Drink's",
    items: [
      { name: 'Soda', price: 250 },
      { name: 'Diet Soda', price: 300 },
      { name: 'Mineral Water (Still) 500ml', price: 150 },
      { name: 'Mineral Water (Still) 1000ml', price: 300 },
      { name: 'Mineral Water (Sparkling) 1000ml', price: 650 },
    ]
  },
  {
    name: 'Main Course',
    items: [
      { name: 'Honey Glazed Salmon', price: 3000, description: 'Grilled fillet of salmon adorned with a luscious green goddess dressing' },
      { name: 'Salmon Sunrise Poke Bowl', price: 1950, description: 'Rice bowl featuring succulent salmon, roasted pumpkin, garden peas, sweet corn, cucumbers, and avocado, all drizzled with a siracha mayo dressing' },
      { name: 'Beef Short Ribs', price: 2250, description: 'Slow-cooked beef short ribs, succulent and falling off the bone, served with mashed potatoes and glazed carrots' },
      { name: 'Osso Buco', price: 2000, description: 'Slow cooked beef shank served with mashed potatoes or rice' },
      { name: 'Blissful Beef Duo', price: 1450, description: 'Two mouthwatering beef smash burgers, with cheddar cheese and signature sauce served with a side of golden fries' },
      { name: 'Korean Crispy Chicken Burger', price: 1300, description: 'Crispy korean fried chicken, red cabbage slaw, spicy mayo sauce with a side of fries' },
      { name: 'Mushroom Mayhem Sensation', price: 1200, description: 'Crispy mushroom patty, topped with spicy aubergine relish, fresh rocket, and herb aioli.served with golden fries' },
    ]
  },
  {
    name: 'Pizza & Pasta',
    items: [
      { name: 'Arabbiatta', price: 1100, description: 'Spicy hearty tomato sauce' },
      { name: 'Funghi', price: 1300, description: 'Creamy chicken and mushroom' },
      { name: 'Bolognese', price: 1250, description: 'Minced meat cooked in tomato' },
      { name: 'Bolognese Lasagna', price: 1400, description: 'Baked lasagna with rich bolognese sauce, baked to perfection for a hearty italian classic' },
      { name: 'Polo Polo Pizza', price: 1500, description: 'Tender chicken, tangy pomodoro sauce, melted mozzarella, and vibrant bell peppers' },
      { name: 'Classic Margherita', price: 1400, description: 'A harmony of pomodoro, fresh basil, and gooey mozzarella cheese, baked to perfection on a crispy crust.' },
      { name: 'Hot Honey Pepperoni', price: 1500, description: 'Pepperoni and mozzarella, rich sauce and perfect crust, all topped with hot honey, this hot honey pepperoni pizza' },
    ]
  },
  {
    name: 'Grill & Thrill Delights',
    items: [
      { name: 'Lamb Chops', price: 1900, description: 'Juicy grilled lamb chops seasoned with fragrant herbs and served with roasted garlic potatoes and mint jelly' },
      { name: 'Ribeye Revelation', price: 2500, description: 'Aged ribeye, grilled to perfection, harmonizing rich grass-fed flavors with vibrant garlic butter sauce' },
      { name: 'Grilled Chicken', price: 2000, description: 'Grilled chicken breast basted with butter served with a creamy mushroom sauce' },
      { name: 'Pollo Alla Diavola', price: 1900, description: 'Grilled quarter chicken leg seasoned with italian herbs and served with grilled veggies' },
      { name: 'Grilled Fillet Steak', price: 1950, description: 'Grilled tenderised fillet steak cooked to your liking' },
      { name: 'Grilled Red Snapper', price: 1850, description: 'Grilled red snapper served with lemon butter and tartar sauce' },
    ]
  },
  {
    name: 'Pizza Toppings',
    items: [
      { name: 'Pineapples', price: 250 },
      { name: 'Mushrooms', price: 250 },
      { name: 'Black Olives', price: 250 },
      { name: 'Avocado', price: 250 },
      { name: 'Capers', price: 250 },
      { name: 'Gherkins', price: 250 },
      { name: 'Buffalo Cheese', price: 250 },
    ]
  }
];

function generateSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function main() {
  console.log('Seeding admin user...');
  const hashedPassword = await bcrypt.hash('Ande001rson', 10);
  
  await prisma.user.upsert({
    where: { email: 'redmianderson73@gmail.com' },
    update: {
      password: hashedPassword,
      role: 'ADMIN',
    },
    create: {
      email: 'redmianderson73@gmail.com',
      password: hashedPassword,
      role: 'ADMIN',
      name: 'Admin User',
    },
  });

  console.log('Clearing old menu items...');
  await prisma.orderItem.deleteMany({}); // Delete related order items to avoid foreign key constraints
  await prisma.menuItem.deleteMany({});
  await prisma.category.deleteMany({});

  console.log('Seeding new menu data...');
  for (const category of categoriesData) {
    const createdCategory = await prisma.category.create({
      data: {
        name: category.name,
        slug: generateSlug(category.name),
      },
    });

    const itemsToCreate = category.items.map((item) => {
      let imageUrl = '/assets/images/item-background/food.png';
      if (item.name === 'Buffalo Wings' || item.name === 'Chicken Wings' || item.name === 'Sichuan Sizzle Wings') imageUrl = '/assets/images/menu/chicken-wings.jpg';
      if (item.name === 'Lamb Chops') imageUrl = '/assets/images/menu/roast-lamb-chops.jpg';
      if (item.name === 'Sticky Toffee Temptation') imageUrl = '/assets/images/menu/sticky-toffee.jpg';
      if (item.name === 'Blissful Beef Duo') imageUrl = '/assets/images/menu/beef-burger.jpg';

      return {
        name: item.name,
        price: item.price,
        description: item.description || null,
        categoryId: createdCategory.id,
        imageUrl: imageUrl,
        isAvailable: true,
      };
    });

    await prisma.menuItem.createMany({
      data: itemsToCreate,
    });
  }
  
  console.log('Database seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
