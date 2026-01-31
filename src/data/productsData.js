/**
 * Computer Shop Products Data
 * Contains various computer products like laptops, desktops, accessories, etc.
 */

export const products = [
  // Laptops
  {
    id: 1,
    name: 'MacBook Pro 16" M3 Pro',
    category: 'Laptops',
    price: 2499.99,
    originalPrice: 2799.99,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Powerful 16-inch laptop with M3 Pro chip, 18GB unified memory, and 512GB SSD',
    specs: {
      processor: 'Apple M3 Pro',
      ram: '18GB',
      storage: '512GB SSD',
      display: '16.2" Liquid Retina XDR',
      graphics: '19-core GPU'
    },
    inStock: true,
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    category: 'Laptops',
    price: 1599.99,
    originalPrice: 1799.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium 15-inch laptop with Intel i7 processor and OLED display',
    specs: {
      processor: 'Intel Core i7-13700H',
      ram: '16GB DDR5',
      storage: '1TB SSD',
      display: '15.6" OLED 3.5K',
      graphics: 'NVIDIA RTX 4050'
    },
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    category: 'Laptops',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Convertible 2-in-1 laptop with touchscreen and stylus support',
    specs: {
      processor: 'Intel Core i7-1355U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5" OLED Touch',
      graphics: 'Intel Iris Xe'
    },
    inStock: true,
    rating: 4.5,
    reviews: 156
  },
  {
    id: 4,
    name: 'ASUS ROG Strix G16',
    category: 'Laptops',
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gaming laptop with high-refresh display and powerful GPU',
    specs: {
      processor: 'Intel Core i9-13980HX',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      display: '16" QHD 165Hz',
      graphics: 'NVIDIA RTX 4070'
    },
    inStock: true,
    rating: 4.7,
    reviews: 278
  },
  
  // Desktops
  {
    id: 5,
    name: 'Apple iMac 24" M3',
    category: 'Desktops',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c0cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'All-in-one desktop with stunning 24-inch 4.5K Retina display',
    specs: {
      processor: 'Apple M3',
      ram: '8GB',
      storage: '256GB SSD',
      display: '24" 4.5K Retina',
      graphics: '8-core GPU'
    },
    inStock: true,
    rating: 4.6,
    reviews: 142
  },
  {
    id: 6,
    name: 'Dell OptiPlex 7010',
    category: 'Desktops',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Business desktop with powerful performance and compact design',
    specs: {
      processor: 'Intel Core i7-13700',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      display: 'Not Included',
      graphics: 'Intel UHD Graphics 770'
    },
    inStock: true,
    rating: 4.4,
    reviews: 98
  },
  {
    id: 7,
    name: 'Custom Gaming PC',
    category: 'Desktops',
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-performance gaming desktop with RGB lighting',
    specs: {
      processor: 'AMD Ryzen 9 7900X',
      ram: '32GB DDR5',
      storage: '2TB NVMe SSD',
      display: 'Not Included',
      graphics: 'NVIDIA RTX 4080'
    },
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  
  // Monitors
  {
    id: 8,
    name: 'LG UltraGear 27" 4K',
    category: 'Monitors',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '27-inch 4K gaming monitor with 144Hz refresh rate',
    specs: {
      size: '27"',
      resolution: '3840 x 2160 (4K)',
      refreshRate: '144Hz',
      panel: 'IPS',
      connectivity: 'HDMI, DisplayPort, USB-C'
    },
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 9,
    name: 'Samsung Odyssey G9',
    category: 'Monitors',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-wide 49-inch curved gaming monitor',
    specs: {
      size: '49"',
      resolution: '5120 x 1440',
      refreshRate: '240Hz',
      panel: 'VA',
      connectivity: 'HDMI, DisplayPort'
    },
    inStock: true,
    rating: 4.8,
    reviews: 312
  },
  {
    id: 10,
    name: 'Dell UltraSharp 32"',
    category: 'Monitors',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '32-inch 4K professional monitor with USB-C',
    specs: {
      size: '32"',
      resolution: '3840 x 2160 (4K)',
      refreshRate: '60Hz',
      panel: 'IPS',
      connectivity: 'HDMI, DisplayPort, USB-C'
    },
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  
  // Keyboards & Mice
  {
    id: 11,
    name: 'Logitech MX Keys',
    category: 'Keyboards',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Wireless keyboard with backlit keys and multi-device support',
    specs: {
      type: 'Wireless',
      connectivity: 'Bluetooth, USB Receiver',
      backlight: 'Yes',
      battery: 'Rechargeable'
    },
    inStock: true,
    rating: 4.7,
    reviews: 445
  },
  {
    id: 12,
    name: 'Corsair K95 RGB',
    category: 'Keyboards',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mechanical gaming keyboard with RGB lighting',
    specs: {
      type: 'Mechanical',
      connectivity: 'USB',
      switches: 'Cherry MX',
      backlight: 'RGB'
    },
    inStock: true,
    rating: 4.8,
    reviews: 523
  },
  {
    id: 13,
    name: 'Logitech MX Master 3S',
    category: 'Mice',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Wireless ergonomic mouse with precision tracking',
    specs: {
      type: 'Wireless',
      connectivity: 'Bluetooth, USB Receiver',
      dpi: '8000',
      battery: 'Rechargeable'
    },
    inStock: true,
    rating: 4.9,
    reviews: 678
  },
  {
    id: 14,
    name: 'Razer DeathAdder V3',
    category: 'Mice',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1605773527851-9863b341a7ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gaming mouse with 30K DPI sensor',
    specs: {
      type: 'Wired',
      connectivity: 'USB',
      dpi: '30000',
      buttons: '8'
    },
    inStock: true,
    rating: 4.7,
    reviews: 389
  },
  
  // Accessories
  {
    id: 15,
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium noise-cancelling wireless headphones',
    specs: {
      type: 'Over-ear',
      connectivity: 'Bluetooth, Wired',
      noiseCancelling: 'Yes',
      battery: '30 hours'
    },
    inStock: true,
    rating: 4.8,
    reviews: 892
  },
  {
    id: 16,
    name: 'Samsung T7 SSD 2TB',
    category: 'Storage',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Portable SSD with USB-C connectivity',
    specs: {
      capacity: '2TB',
      interface: 'USB 3.2 Gen 2',
      speed: '1050 MB/s',
      formFactor: 'Portable'
    },
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 17,
    name: 'Webcam Logitech C920',
    category: 'Webcams',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'HD 1080p webcam with autofocus',
    specs: {
      resolution: '1080p',
      frameRate: '30fps',
      connectivity: 'USB',
      autofocus: 'Yes'
    },
    inStock: true,
    rating: 4.6,
    reviews: 567
  },
  {
    id: 18,
    name: 'Dell USB-C Hub',
    category: 'Accessories',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '7-in-1 USB-C hub with multiple ports',
    specs: {
      ports: 'HDMI, USB-A x3, USB-C, SD Card, Ethernet',
      powerDelivery: '100W',
      hdmi: '4K@30Hz'
    },
    inStock: true,
    rating: 4.5,
    reviews: 123
  }
];

export const categories = [
  'All',
  'Laptops',
  'Desktops',
  'Monitors',
  'Keyboards',
  'Mice',
  'Headphones',
  'Storage',
  'Webcams',
  'Accessories'
];
