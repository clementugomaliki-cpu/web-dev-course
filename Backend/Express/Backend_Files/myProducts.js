const products = [
  {
    name: "Apple iPhone 15 Pro",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 256GB storage, Triple camera system.",
    price: 1199.99,
    category: "Smartphones",
    brand: "Apple",
    stock: 15,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    seller: "SELLER_ID"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 512GB storage.",
    price: 1299.99,
    category: "Smartphones",
    brand: "Samsung",
    stock: 20,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    seller: "SELLER_ID"
  },
  {
    name: "MacBook Air M3",
    description: "13-inch Liquid Retina display, Apple M3 chip, 16GB RAM, 512GB SSD.",
    price: 1499.99,
    category: "Laptops",
    brand: "Apple",
    stock: 10,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    seller: "SELLER_ID"
  },
  {
    name: "Dell XPS 15",
    description: "15.6-inch OLED display, Intel Core i7, 16GB RAM, 1TB SSD.",
    price: 1699.99,
    category: "Laptops",
    brand: "Dell",
    stock: 8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    seller: "SELLER_ID"
  },
  {
    name: "Sony WH-1000XM5",
    description: "Premium wireless noise-cancelling headphones with 30-hour battery life.",
    price: 399.99,
    category: "Audio",
    brand: "Sony",
    stock: 25,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    seller: "SELLER_ID"
  },
  {
    name: "Apple AirPods Pro (2nd Gen)",
    description: "Active Noise Cancellation with MagSafe charging case.",
    price: 249.99,
    category: "Audio",
    brand: "Apple",
    stock: 30,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    seller: "SELLER_ID"
  },
  {
    name: "Anker 20,000mAh Power Bank",
    description: "Fast charging USB-C power bank with dual outputs.",
    price: 59.99,
    category: "Accessories",
    brand: "Anker",
    stock: 50,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
    seller: "SELLER_ID"
  },
  {
    name: "Logitech MX Master 3S",
    description: "Wireless ergonomic productivity mouse with USB-C charging.",
    price: 99.99,
    category: "Accessories",
    brand: "Logitech",
    stock: 35,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    seller: "SELLER_ID"
  },
  {
    name: "Logitech MX Keys S",
    description: "Wireless illuminated keyboard with multi-device support.",
    price: 129.99,
    category: "Accessories",
    brand: "Logitech",
    stock: 20,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    seller: "SELLER_ID"
  },
  {
    name: "Samsung 27-inch 4K Monitor",
    description: "Ultra HD IPS monitor with HDR10 support.",
    price: 349.99,
    category: "Monitors",
    brand: "Samsung",
    stock: 12,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    seller: "SELLER_ID"
  },
  {
    name: "UGREEN USB-C Hub",
    description: "6-in-1 USB-C hub with HDMI, USB 3.0, SD card reader and PD charging.",
    price: 49.99,
    category: "Accessories",
    brand: "UGREEN",
    stock: 45,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    seller: "SELLER_ID"
  },
  {
    name: "SanDisk Extreme Portable SSD 1TB",
    description: "High-speed portable SSD with USB-C connectivity.",
    price: 149.99,
    category: "Storage",
    brand: "SanDisk",
    stock: 18,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    seller: "SELLER_ID"
  },
  {
    name: "JBL Flip 6 Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with powerful bass.",
    price: 129.99,
    category: "Audio",
    brand: "JBL",
    stock: 28,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    seller: "SELLER_ID"
  },
  {
    name: "Apple Watch Series 10",
    description: "GPS Smartwatch with fitness tracking and heart rate monitoring.",
    price: 499.99,
    category: "Wearables",
    brand: "Apple",
    stock: 16,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    seller: "SELLER_ID"
  },
  {
    name: "Baseus 100W USB-C Charging Cable",
    description: "2-meter fast charging USB-C cable for laptops and smartphones.",
    price: 19.99,
    category: "Accessories",
    brand: "Baseus",
    stock: 100,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215",
    seller: "SELLER_ID"
  },
  {
    name: "Spigen Rugged Armor iPhone 15 Pro Case",
    description: "Shockproof TPU protective case with slim design.",
    price: 24.99,
    category: "Phone Accessories",
    brand: "Spigen",
    stock: 60,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    seller: "SELLER_ID"
  },
  {
    name: "Razer DeathAdder V3",
    description: "Ergonomic wired gaming mouse with high-precision optical sensor.",
    price: 79.99,
    category: "Gaming",
    brand: "Razer",
    stock: 22,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    seller: "SELLER_ID"
  },
  {
    name: "PlayStation 5 DualSense Controller",
    description: "Wireless controller with adaptive triggers and haptic feedback.",
    price: 69.99,
    category: "Gaming Accessories",
    brand: "Sony",
    stock: 30,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    seller: "SELLER_ID"
  },
  {
    name: "Canon EOS R50 Camera",
    description: "24.2MP mirrorless camera with 4K video recording.",
    price: 899.99,
    category: "Cameras",
    brand: "Canon",
    stock: 9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    seller: "SELLER_ID"
  },
  {
    name: "TP-Link AX3000 Wi-Fi 6 Router",
    description: "Dual-band Wi-Fi 6 router with gigabit ports and parental controls.",
    price: 139.99,
    category: "Networking",
    brand: "TP-Link",
    stock: 14,
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
    seller: "SELLER_ID"
  }
];

module.exports = products;