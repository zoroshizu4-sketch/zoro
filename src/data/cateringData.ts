export interface MenuItem {
  id: string;
  name: string;
  tamilName?: string;
  category: 'breads' | 'gravies' | 'specials' | 'banquet';
  description: string;
  image: string;
  isHero?: boolean;
  specialtyTag?: string;
  spiceLevel: 1 | 2 | 3;
  pairsWith?: string;
  highlightIngredients: string[];
}

export interface CateringService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  guestCapacity: string;
  features: string[];
  popularDishes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'banquets' | 'dishes' | 'live-counters' | 'weddings';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  location: string;
  quote: string;
  rating: number;
}

export const BUSINESS_INFO = {
  name: "ZORO CATERING",
  legalName: "Zoro Luxury Catering & Events",
  tagline: "Taste the Luxury, Experience the Tradition",
  phone: "+91 9787001896",
  displayPhone: "+91 97870 01896",
  email: "zoroshizu4@gmail.com",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  locationDisplay: "Coimbatore, Tamil Nadu, India",
  whatsappUrl: "https://wa.me/919787001896",
  serviceRadius: "Coimbatore, Tiruppur, Erode, Pollachi & Pan-Tamil Nadu",
  hours: "Open 7 Days a Week: 7:00 AM – 11:00 PM IST",
  established: "2015",
  eventsCompleted: "1,200+",
  happyGuests: "500,000+",
  googleRating: "4.9",
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "parotta",
    name: "Golden Flaky Parotta",
    tamilName: "பொரித்த பரோட்டா",
    category: "breads",
    description: "Our signature multi-layered Ceylon & Malabar style flaky parottas, hand-tossed with artisanal dough and griddle-roasted with pure golden ghee until crisp, airy, and delicately blistered.",
    image: "/src/assets/images/menu_crispy_parotta_1794236575297.jpg",
    isHero: true,
    specialtyTag: "Signature Specialty",
    spiceLevel: 1,
    pairsWith: "Authentic Slow-Simmered Salna",
    highlightIngredients: ["Refined Artisan Flour", "Desi Cow Ghee", "Hand-Layered Spiral Folds", "Live Tawa Preparation"],
  },
  {
    id: "chapatti",
    name: "Soft Phulka Chapatti",
    tamilName: "மிருதுவான சப்பாத்தி",
    category: "breads",
    description: "Ultra-soft, pillowy whole-wheat chapattis rolled thin from organic chakki atta, puffed to golden perfection over open flame and brushed with a fragrant glaze of clarified farm butter.",
    image: "/src/assets/images/menu_soft_chapatti_1794236577007.jpg",
    isHero: true,
    specialtyTag: "Health & Tradition",
    spiceLevel: 1,
    pairsWith: "Signature Kundi Pepper Roast & Salna",
    highlightIngredients: ["100% Stone-Ground Whole Wheat", "Pure Desi Ghee", "Flame-Puffed Texture", "Zero Additives"],
  },
  {
    id: "salna",
    name: "Authentic Slow-Simmered Salna",
    tamilName: "சுவையான சால்னா",
    category: "gravies",
    description: "The crown jewel of Tamil street and banquet cuisine. Slow-simmered for 4 hours with fresh scraped coconut, stone-roasted fennel, star anise, kalpasi (stone flower), and aromatic hand-pounded spices.",
    image: "/src/assets/images/menu_rich_salna_1794236577488.jpg",
    isHero: true,
    specialtyTag: "Master Chef Secret Recipe",
    spiceLevel: 3,
    pairsWith: "Golden Flaky Parotta",
    highlightIngredients: ["Fresh Coconut Paste", "Kalpasi & Star Anise", "Slow-Roasted Masala", "Rich Velvety Texture"],
  },
  {
    id: "kundi",
    name: "Coimbatore Traditional Kundi",
    tamilName: "பாரம்பரிய குண்டி வறுவல்",
    category: "gravies",
    description: "A legendary traditional Coimbatore culinary heritage dish. Tender morsels slow-braised with caramelized Coimbatore shallots (chinna vengayam), Tellicherry black pepper, curry leaves, and rich roasted spices.",
    image: "/src/assets/images/menu_coimbatore_kundi_1794236577517.jpg",
    isHero: true,
    specialtyTag: "Royal Traditional Delicacy",
    spiceLevel: 3,
    pairsWith: "Parotta, Chapatti & Hot Jeera Rice",
    highlightIngredients: ["Coimbatore Country Shallots", "Crushed Tellicherry Pepper", "Fresh Curry Leaves", "Copper Urli Braised"],
  },
  {
    id: "seeraga-samba-biryani",
    name: "Royal Seeraga Samba Mutton Biryani",
    tamilName: "சீரக சம்பா மட்டன் பிரியாணி",
    category: "banquet",
    description: "Fragrant short-grain Seeraga Samba rice cooked with succulent hill-country mutton, wood-fired dum aromatics, whole spices, and caramelized mint in traditional degh cauldrons.",
    image: "/src/assets/images/hero_catering_banquet_1794236574468.jpg",
    isHero: false,
    specialtyTag: "Wedding Favorite",
    spiceLevel: 2,
    pairsWith: "Mutton Dalcha & Onion Raita",
    highlightIngredients: ["Seeraga Samba Rice", "Local Country Mutton", "Wood Dum Fire", "Saffron Ghee Infusion"],
  },
  {
    id: "royal-elai-saapadu",
    name: "Grand Banana Leaf Elai Saapadu",
    tamilName: "ராஜ விருந்து இலை சாப்பாடு",
    category: "banquet",
    description: "The quintessential 24-item traditional South Indian royal wedding feast served ceremoniously on freshly harvested tender banana leaves with silver-service hospitalities.",
    image: "/src/assets/images/hero_catering_banquet_1794236574468.jpg",
    isHero: false,
    specialtyTag: "Traditional Banquets",
    spiceLevel: 2,
    pairsWith: "Payasam, Medu Vada & Appalam",
    highlightIngredients: ["Fresh Plantain Leaves", "Muringakai Sambar", "Mysore Rasam", "Elaneer Payasam"],
  },
];

export const SERVICES: CateringService[] = [
  {
    id: "weddings",
    title: "Weddings & Muhurtham Banquets",
    tagline: "Regal culinary grandeur for your most auspicious celebration",
    description: "From morning Muhurtham traditional Elai Saapadu to evening grand receptions featuring live tawa counters, gourmet carving stations, and opulent dessert boulevards.",
    iconName: "Award",
    guestCapacity: "200 to 5,000+ Guests",
    features: [
      "Traditional Banana Leaf Silver Service or Royal Buffet",
      "Live Golden Parotta & Salna Tawa Counters",
      "Uniformed Hospitality Staff & Banquet Captains",
      "Complete Tableware, Chafing Dishes & Cutlery",
    ],
    popularDishes: ["Golden Parotta & Salna", "Mutton Biryani", "Coimbatore Kundi", "Elaneer Payasam"],
  },
  {
    id: "birthdays",
    title: "Birthday Parties & Milestones",
    tagline: "Vibrant, delicious festivities crafted to delight every generation",
    description: "Make birthdays unforgettable with interactive live food stations, bite-sized artisanal appetisers, street-style hot counters, and customized feast menus.",
    iconName: "Sparkles",
    guestCapacity: "50 to 500+ Guests",
    features: [
      "Dynamic Live Chat & Street Food Counters",
      "Hot Chapatti & Flaky Parotta Stations",
      "Kids-Friendly Non-Spicy Selections",
      "Mocktail Lounge & Artisan Desserts",
    ],
    popularDishes: ["Soft Phulka Chapatti", "Flaky Parotta Bites", "Chicken / Paneer 65", "Ice Cream Sundae Bar"],
  },
  {
    id: "family",
    title: "Family Functions & Housewarmings",
    tagline: "Warm, authentic flavours that honour your family traditions",
    description: "Catering for Grihapravesam (housewarming), Seemandham, Sashtiabdapoorthi, and intimate get-togethers with genuine South Indian hospitality and soulful recipes.",
    iconName: "Users",
    guestCapacity: "50 to 800+ Guests",
    features: [
      "Pure Homestyle Traditional Cooking Traditions",
      "Morning Tiffin & Evening Dinner Spreads",
      "Clean & Hygienic On-Site Catering Execution",
      "Flexible Vegetarian & Non-Vegetarian Menus",
    ],
    popularDishes: ["Traditional Kundi Roast", "Steaming Salna", "Ghee Parotta", "Mysore Pak"],
  },
  {
    id: "corporate",
    title: "Special Events & Corporate Galas",
    tagline: "Impeccable executive catering that leaves an indelible impression",
    description: "High-level corporate conferences, annual gala dinners, brand launches, and VIP banquets managed with precision logistics, prompt service, and gourmet presentation.",
    iconName: "UtensilsCrossed",
    guestCapacity: "100 to 3,000+ Guests",
    features: [
      "Punctual Multi-Station Buffet Logistics",
      "Dietary Segregation & Allergen Labeling",
      "Executive Silver Plating & Corporate Table Setups",
      "GST Invoicing & Dedicated Event Coordinators",
    ],
    popularDishes: ["Seeraga Samba Biryani", "Live Parotta Counter", "Special Salna", "Assorted Sweets"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Royal Wedding Banquet Spread",
    category: "banquets",
    image: "/src/assets/images/hero_catering_banquet_1794236574468.jpg",
    caption: "Traditional brassware banquet dining setup at a Coimbatore wedding reception with 1,500 guests.",
  },
  {
    id: "g2",
    title: "Signature Flaky Parotta Live Station",
    category: "dishes",
    image: "/src/assets/images/menu_crispy_parotta_1794236575297.jpg",
    caption: "Hand-tossed golden layered parottas served fresh off the cast-iron griddle with desi ghee.",
  },
  {
    id: "g3",
    title: "Fresh Puffed Golden Chapattis",
    category: "dishes",
    image: "/src/assets/images/menu_soft_chapatti_1794236577007.jpg",
    caption: "Soft whole wheat phulka chapattis prepared live with fragrant ghee glaze for dinner spreads.",
  },
  {
    id: "g4",
    title: "Steaming Traditional Salna Gravy",
    category: "dishes",
    image: "/src/assets/images/menu_rich_salna_1794236577488.jpg",
    caption: "Slow-simmered 4-hour aromatic salna made with fresh roasted spices and coconut.",
  },
  {
    id: "g5",
    title: "Coimbatore Heritage Kundi Pepper Roast",
    category: "dishes",
    image: "/src/assets/images/menu_coimbatore_kundi_1794236577517.jpg",
    caption: "Signature Coimbatore tender roast tossed with shallots and coarse black pepper in bronze vessels.",
  },
  {
    id: "g6",
    title: "Regal Banquet Table Presentation",
    category: "weddings",
    image: "/src/assets/images/hero_catering_banquet_1794236574468.jpg",
    caption: "Golden ambient table decor and candlelit catering setup for VIP wedding dinner.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. K. Senthil Kumar",
    role: "Bride's Father",
    event: "Daughter's Wedding Reception (2,000 Guests)",
    location: "Codissia Trade Centre, Coimbatore",
    quote: "ZORO CATERING made our daughter's wedding unforgettable! The live Parotta and Salna counter was the absolute talk of the evening. Every single guest praised the authentic taste and the royal hospitality.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Anand & Divya Radhakrishnan",
    role: "Hosts",
    event: "Housewarming & Family Feast (350 Guests)",
    location: "Race Course, Coimbatore",
    quote: "Finding authentic Coimbatore Kundi with true traditional flavour is rare. Zoro Catering prepared it to perfection. The Chapattis were melt-in-the-mouth soft and the staff was extremely courteous.",
    rating: 5,
  },
  {
    id: "t3",
    name: "M. Rajeshwaran",
    role: "Vice President, Operations",
    event: "Annual Corporate Gala Dinner (800 Guests)",
    location: "Avinashi Road, Coimbatore",
    quote: "Punctual, professional, and extraordinarily tasty food. The buffet flow for 800 corporate executives was flawless with zero wait time. ZORO CATERING is now our permanent catering partner.",
    rating: 5,
  },
];
