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
  },
  
  // RAM (Memory)
  {
    id: 19,
    name: 'Corsair Vengeance DDR5 32GB',
    category: 'RAM',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '32GB DDR5 RAM kit (2x16GB) with RGB lighting, 6000MHz speed',
    specs: {
      capacity: '32GB (2x16GB)',
      type: 'DDR5',
      speed: '6000MHz',
      latency: 'CL36',
      voltage: '1.35V'
    },
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 20,
    name: 'G.Skill Trident Z5 RGB 64GB',
    category: 'RAM',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '64GB DDR5 RAM kit (2x32GB) with RGB lighting, 6400MHz',
    specs: {
      capacity: '64GB (2x32GB)',
      type: 'DDR5',
      speed: '6400MHz',
      latency: 'CL32',
      voltage: '1.4V'
    },
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 21,
    name: 'Kingston Fury Beast DDR4 16GB',
    category: 'RAM',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '16GB DDR4 RAM kit (2x8GB), 3200MHz speed',
    specs: {
      capacity: '16GB (2x8GB)',
      type: 'DDR4',
      speed: '3200MHz',
      latency: 'CL16',
      voltage: '1.35V'
    },
    inStock: true,
    rating: 4.7,
    reviews: 678
  },
  
  // SSD (Solid State Drives)
  {
    id: 22,
    name: 'Samsung 990 Pro 2TB NVMe SSD',
    category: 'SSD',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-performance NVMe M.2 SSD with 7450MB/s read speed',
    specs: {
      capacity: '2TB',
      interface: 'NVMe PCIe 4.0',
      readSpeed: '7450 MB/s',
      writeSpeed: '6900 MB/s',
      formFactor: 'M.2 2280'
    },
    inStock: true,
    rating: 4.9,
    reviews: 892
  },
  {
    id: 23,
    name: 'WD Black SN850X 1TB NVMe SSD',
    category: 'SSD',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gaming NVMe SSD with heatsink, 7300MB/s read speed',
    specs: {
      capacity: '1TB',
      interface: 'NVMe PCIe 4.0',
      readSpeed: '7300 MB/s',
      writeSpeed: '6300 MB/s',
      formFactor: 'M.2 2280'
    },
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 24,
    name: 'Crucial MX4 4TB SATA SSD',
    category: 'SSD',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Large capacity SATA SSD for storage expansion',
    specs: {
      capacity: '4TB',
      interface: 'SATA III',
      readSpeed: '560 MB/s',
      writeSpeed: '510 MB/s',
      formFactor: '2.5"'
    },
    inStock: true,
    rating: 4.6,
    reviews: 345
  },
  
  // Hard Drives (HD)
  {
    id: 25,
    name: 'Seagate BarraCuda 4TB HDD',
    category: 'HD',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '4TB internal hard drive, 7200 RPM, SATA 6Gb/s',
    specs: {
      capacity: '4TB',
      interface: 'SATA III',
      rpm: '7200',
      cache: '256MB',
      formFactor: '3.5"'
    },
    inStock: true,
    rating: 4.5,
    reviews: 789
  },
  {
    id: 26,
    name: 'Western Digital Blue 2TB HDD',
    category: 'HD',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Reliable 2TB hard drive for everyday computing',
    specs: {
      capacity: '2TB',
      interface: 'SATA III',
      rpm: '5400',
      cache: '256MB',
      formFactor: '3.5"'
    },
    inStock: true,
    rating: 4.4,
    reviews: 623
  },
  {
    id: 27,
    name: 'Toshiba X300 8TB HDD',
    category: 'HD',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-capacity 8TB hard drive for gaming and storage',
    specs: {
      capacity: '8TB',
      interface: 'SATA III',
      rpm: '7200',
      cache: '256MB',
      formFactor: '3.5"'
    },
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  
  // Computer Cases
  {
    id: 28,
    name: 'NZXT H7 Flow RGB',
    category: 'CASING',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mid-tower ATX case with RGB fans and excellent airflow',
    specs: {
      formFactor: 'Mid-Tower ATX',
      sidePanel: 'Tempered Glass',
      fans: '3x 120mm RGB',
      maxGPULength: '413mm',
      maxPSULength: '200mm'
    },
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 29,
    name: 'Corsair 4000D Airflow',
    category: 'CASING',
    price: 104.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium mid-tower case with optimized airflow design',
    specs: {
      formFactor: 'Mid-Tower ATX',
      sidePanel: 'Tempered Glass',
      fans: '2x 120mm',
      maxGPULength: '360mm',
      maxPSULength: '180mm'
    },
    inStock: true,
    rating: 4.7,
    reviews: 789
  },
  {
    id: 30,
    name: 'Lian Li O11 Dynamic EVO',
    category: 'CASING',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium dual-chamber case with dual tempered glass panels',
    specs: {
      formFactor: 'Full-Tower ATX',
      sidePanel: 'Dual Tempered Glass',
      fans: 'None (Fan Ready)',
      maxGPULength: '442mm',
      maxPSULength: '200mm'
    },
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  
  // Graphics Cards (GPUS)
  {
    id: 31,
    name: 'NVIDIA RTX 4090 24GB',
    category: 'GPUS',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Flagship gaming GPU with 24GB GDDR6X memory',
    specs: {
      chipset: 'NVIDIA GeForce RTX 4090',
      memory: '24GB GDDR6X',
      memoryBus: '384-bit',
      boostClock: '2520 MHz',
      powerConsumption: '450W'
    },
    inStock: true,
    rating: 4.9,
    reviews: 1234
  },
  {
    id: 32,
    name: 'NVIDIA RTX 4070 Super 12GB',
    category: 'GPUS',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-performance GPU for 1440p gaming',
    specs: {
      chipset: 'NVIDIA GeForce RTX 4070 Super',
      memory: '12GB GDDR6X',
      memoryBus: '192-bit',
      boostClock: '2475 MHz',
      powerConsumption: '220W'
    },
    inStock: true,
    rating: 4.8,
    reviews: 890
  },
  {
    id: 33,
    name: 'AMD Radeon RX 7800 XT 16GB',
    category: 'GPUS',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'AMD GPU with 16GB VRAM for 1440p gaming',
    specs: {
      chipset: 'AMD Radeon RX 7800 XT',
      memory: '16GB GDDR6',
      memoryBus: '256-bit',
      boostClock: '2430 MHz',
      powerConsumption: '263W'
    },
    inStock: true,
    rating: 4.7,
    reviews: 567
  },
  
  // Power Supply Units (PSU)
  {
    id: 34,
    name: 'Corsair RM1000e 1000W',
    category: 'PSU',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '1000W 80+ Gold fully modular power supply',
    specs: {
      wattage: '1000W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      formFactor: 'ATX',
      warranty: '7 years'
    },
    inStock: true,
    rating: 4.8,
    reviews: 678
  },
  {
    id: 35,
    name: 'Seasonic Focus GX-850 850W',
    category: 'PSU',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '850W 80+ Gold fully modular PSU with quiet operation',
    specs: {
      wattage: '850W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      formFactor: 'ATX',
      warranty: '10 years'
    },
    inStock: true,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 36,
    name: 'EVGA SuperNOVA 750W G5',
    category: 'PSU',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '750W 80+ Gold fully modular power supply',
    specs: {
      wattage: '750W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      formFactor: 'ATX',
      warranty: '10 years'
    },
    inStock: true,
    rating: 4.7,
    reviews: 789
  },
  
  // Motherboards
  {
    id: 37,
    name: 'ASUS ROG Strix X670E-E',
    category: 'MOTHERBOARD',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'AMD AM5 motherboard with PCIe 5.0 and DDR5 support',
    specs: {
      socket: 'AM5',
      chipset: 'AMD X670E',
      memory: 'DDR5 (up to 128GB)',
      pcieSlots: 'PCIe 5.0 x16, PCIe 4.0 x16',
      m2Slots: '5x M.2',
      formFactor: 'ATX'
    },
    inStock: true,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 38,
    name: 'MSI MPG Z790 Carbon WiFi',
    category: 'MOTHERBOARD',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Intel Z790 motherboard with WiFi 6E and DDR5',
    specs: {
      socket: 'LGA 1700',
      chipset: 'Intel Z790',
      memory: 'DDR5 (up to 128GB)',
      pcieSlots: 'PCIe 5.0 x16, PCIe 4.0 x16',
      m2Slots: '4x M.2',
      formFactor: 'ATX'
    },
    inStock: true,
    rating: 4.7,
    reviews: 567
  },
  {
    id: 39,
    name: 'Gigabyte B650 Aorus Elite',
    category: 'MOTHERBOARD',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'AMD AM5 motherboard with PCIe 4.0 and DDR5',
    specs: {
      socket: 'AM5',
      chipset: 'AMD B650',
      memory: 'DDR5 (up to 128GB)',
      pcieSlots: 'PCIe 4.0 x16',
      m2Slots: '3x M.2',
      formFactor: 'ATX'
    },
    inStock: true,
    rating: 4.6,
    reviews: 890
  },
  
  // Additional Mice
  {
    id: 40,
    name: 'SteelSeries Rival 5',
    category: 'Mice',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1605773527851-9863b341a7ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gaming mouse with 9 programmable buttons and RGB',
    specs: {
      type: 'Wired',
      connectivity: 'USB',
      dpi: '18000',
      buttons: '9',
      weight: '85g'
    },
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 41,
    name: 'Corsair Sabre RGB Pro',
    category: 'Mice',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight gaming mouse with 26K DPI sensor',
    specs: {
      type: 'Wired',
      connectivity: 'USB',
      dpi: '26000',
      buttons: '6',
      weight: '74g'
    },
    inStock: true,
    rating: 4.5,
    reviews: 456
  },
  
  // Additional Keyboards
  {
    id: 42,
    name: 'SteelSeries Apex Pro',
    category: 'Keyboards',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mechanical keyboard with adjustable actuation',
    specs: {
      type: 'Mechanical',
      connectivity: 'USB',
      switches: 'OmniPoint Adjustable',
      backlight: 'RGB',
      features: 'OLED Display'
    },
    inStock: true,
    rating: 4.8,
    reviews: 678
  },
  {
    id: 43,
    name: 'Razer BlackWidow V4 Pro',
    category: 'Keyboards',
    price: 229.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mechanical gaming keyboard with analog switches',
    specs: {
      type: 'Mechanical',
      connectivity: 'USB',
      switches: 'Razer Green Analog',
      backlight: 'RGB',
      features: 'Command Dial'
    },
    inStock: true,
    rating: 4.7,
    reviews: 345
  },
  
  // Additional Monitors
  {
    id: 44,
    name: 'ASUS ROG Swift PG32UCDM',
    category: 'Monitors',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '32-inch 4K OLED gaming monitor with 240Hz',
    specs: {
      size: '32"',
      resolution: '3840 x 2160 (4K)',
      refreshRate: '240Hz',
      panel: 'OLED',
      connectivity: 'HDMI 2.1, DisplayPort 1.4'
    },
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 45,
    name: 'LG 27GR95QE-B',
    category: 'Monitors',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '27-inch QHD OLED gaming monitor, 240Hz',
    specs: {
      size: '27"',
      resolution: '2560 x 1440 (QHD)',
      refreshRate: '240Hz',
      panel: 'OLED',
      connectivity: 'HDMI 2.1, DisplayPort 1.4'
    },
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  
  // Additional Headphones
  {
    id: 46,
    name: 'SteelSeries Arctis Nova Pro',
    category: 'Headphones',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Wireless gaming headset with active noise cancellation',
    specs: {
      type: 'Over-ear',
      connectivity: 'Wireless, Wired',
      noiseCancelling: 'Yes',
      battery: '44 hours',
      microphone: 'Retractable'
    },
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 47,
    name: 'HyperX Cloud Alpha Wireless',
    category: 'Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Wireless gaming headset with 300-hour battery',
    specs: {
      type: 'Over-ear',
      connectivity: 'Wireless 2.4GHz',
      noiseCancelling: 'Passive',
      battery: '300 hours',
      microphone: 'Detachable'
    },
    inStock: true,
    rating: 4.7,
    reviews: 789
  },
  
  // Cooling Fans
  {
    id: 48,
    name: 'Noctua NF-A12x25 PWM',
    category: 'FANS',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium 120mm PWM fan with excellent airflow and low noise',
    specs: {
      size: '120mm',
      airflow: '102.1 m³/h',
      noise: '22.6 dB(A)',
      speed: '2000 RPM',
      connector: '4-pin PWM'
    },
    inStock: true,
    rating: 4.9,
    reviews: 1234
  },
  {
    id: 49,
    name: 'Corsair LL120 RGB 3-Pack',
    category: 'FANS',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '3-pack of 120mm RGB fans with magnetic levitation',
    specs: {
      size: '120mm',
      airflow: '43.25 CFM',
      noise: '24.8 dB(A)',
      speed: '600-1500 RPM',
      lighting: 'RGB'
    },
    inStock: true,
    rating: 4.7,
    reviews: 890
  },
  {
    id: 50,
    name: 'Arctic P12 PWM PST 5-Pack',
    category: 'FANS',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Value 5-pack of 120mm PWM fans with daisy-chain',
    specs: {
      size: '120mm',
      airflow: '56.3 CFM',
      noise: '22.5 dB(A)',
      speed: '200-1800 RPM',
      connector: '4-pin PWM PST'
    },
    inStock: true,
    rating: 4.6,
    reviews: 567
  },
  {
    id: 51,
    name: 'be quiet! Silent Wings 3 140mm',
    category: 'FANS',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1587825147138-34637d7b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-quiet 140mm fan with advanced blade design',
    specs: {
      size: '140mm',
      airflow: '73.33 CFM',
      noise: '15.5 dB(A)',
      speed: '1000 RPM',
      connector: '3-pin'
    },
    inStock: true,
    rating: 4.8,
    reviews: 678
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
  'Accessories',
  'RAM',
  'SSD',
  'HD',
  'CASING',
  'GPUS',
  'PSU',
  'MOTHERBOARD',
  'FANS'
];
