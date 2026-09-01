export interface Project {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  gallery: string[];
  category: string;
  location: string;
  status?: string;
  designStyle?: string;
  type?: string;
  area?: string;
  coordinates?: string;
  description?: string;
  challenge?: string;
  awards?: string;
}

export const projects: Project[] = [
  // =====================================================
  // RESIDENCES
  // =====================================================

  {
    title: "Luxury Residence",
    slug: "luxury-residence",
    category: "RESIDENCES",
    location: "Mumbai, India",
    status: "Completed",
    designStyle: "Contemporary Minimalism",
    type: "Residence",
    area: "4,250 FT²",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A refined residential environment shaped by clean geometry, natural materials, and carefully controlled light.",

    challenge:
      "Creating a sophisticated residential atmosphere while maintaining a restrained architectural language required careful coordination between proportion, materiality, lighting, and spatial flow.",

    awards:
      "Residential Architecture / Interior Design",
  },


  {
    title: "Modern Residence",
    slug: "modern-residence",
    category: "RESIDENCES",
    location: "Mumbai, India",
    status: "Completed",
    designStyle: "Modern Architecture",
    type: "Residence",
    area: "3,800 FT²",

    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A contemporary residence built around openness, natural light, and a precise relationship between interior and exterior spaces.",

    challenge:
      "The project required balancing large open spaces with privacy while preserving a consistent modern architectural language.",

    awards:
      "Residential Architecture",
  },


  {
    title: "Contemporary Villa",
    slug: "contemporary-villa",
    category: "RESIDENCES",
    location: "Pune, India",
    status: "In Progress",
    designStyle: "Contemporary",
    type: "Villa",
    area: "5,100 FT²",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A contemporary villa where strong architectural volumes are softened through landscape, natural textures, and generous openings.",

    challenge:
      "The main challenge was establishing a strong architectural identity without overwhelming the surrounding landscape.",

    awards:
      "Villa Architecture",
  },


  {
    title: "Minimalist House",
    slug: "minimalist-house",
    category: "RESIDENCES",
    location: "Bangalore, India",
    status: "Completed",
    designStyle: "Minimalism",
    type: "House",
    area: "3,200 FT²",

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A calm minimalist home defined by simple geometry, natural finishes, and an emphasis on light and proportion.",

    challenge:
      "The design focused on reducing visual noise while ensuring the home remained warm, functional, and connected to its surroundings.",

    awards:
      "Minimal Residential Architecture",
  },


  // =====================================================
  // HOTELS
  // =====================================================

  {
    title: "Luxury Hotel",
    slug: "luxury-hotel",
    category: "HOTELS",
    location: "Dubai, UAE",
    status: "Completed",
    designStyle: "Luxury Contemporary",
    type: "Hotel",
    area: "85,000 FT²",

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A high-end hospitality destination combining contemporary luxury with carefully composed public and private spaces.",

    challenge:
      "Creating a memorable hospitality experience while maintaining operational efficiency across a large and complex program.",

    awards:
      "Hospitality Architecture / Interior Design",
  },


  {
    title: "Urban Grand Hotel",
    slug: "urban-grand-hotel",
    category: "HOTELS",
    location: "Singapore",
    status: "Completed",
    designStyle: "Urban Contemporary",
    type: "Hotel",
    area: "72,000 FT²",

    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "An urban hotel concept that brings together refined hospitality, strong geometry, and a sophisticated material palette.",

    challenge:
      "The project had to create a strong identity within a dense urban environment while providing a calm interior experience.",

    awards:
      "Hospitality Design",
  },


  {
    title: "The Heritage Hotel",
    slug: "heritage-hotel",
    category: "HOTELS",
    location: "Jaipur, India",
    status: "Completed",
    designStyle: "Contemporary Heritage",
    type: "Hotel",
    area: "58,000 FT²",

    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A contemporary interpretation of heritage hospitality, combining traditional character with modern spatial planning.",

    challenge:
      "The project required preserving a sense of cultural identity while introducing contemporary comfort and functionality.",

    awards:
      "Heritage Hospitality",
  },


  {
    title: "Boutique Hotel",
    slug: "boutique-hotel",
    category: "HOTELS",
    location: "London, UK",
    status: "In Progress",
    designStyle: "Minimal Luxury",
    type: "Boutique Hotel",
    area: "31,000 FT²",

    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A compact boutique hotel concept focused on intimacy, material richness, and carefully framed experiences.",

    challenge:
      "Maximizing guest experience within a compact footprint required precise planning and disciplined material selection.",

    awards:
      "Boutique Hospitality Design",
  },


  // =====================================================
  // RESORTS
  // =====================================================

  {
    title: "Grand Resort",
    slug: "grand-resort",
    category: "RESORTS",
    location: "Goa, India",
    status: "Completed",
    designStyle: "Tropical Contemporary",
    type: "Resort",
    area: "120,000 FT²",

    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A tropical resort designed around landscape, water, and a sequence of relaxed indoor and outdoor experiences.",

    challenge:
      "The design needed to respond to the tropical climate while creating a coherent luxury hospitality experience.",

    awards:
      "Resort Architecture",
  },


  {
    title: "Oceanfront Resort",
    slug: "oceanfront-resort",
    category: "RESORTS",
    location: "Maldives",
    status: "Completed",
    designStyle: "Tropical Minimalism",
    type: "Resort",
    area: "95,000 FT²",

    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "An oceanfront retreat where architecture dissolves into the landscape through light materials and open planning.",

    challenge:
      "Working within a sensitive island environment required a careful balance between construction, landscape, and coastal conditions.",

    awards:
      "Resort & Hospitality",
  },


  {
    title: "Mountain Retreat",
    slug: "mountain-retreat",
    category: "RESORTS",
    location: "Manali, India",
    status: "In Progress",
    designStyle: "Mountain Contemporary",
    type: "Retreat",
    area: "42,000 FT²",

    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A mountain retreat that frames the surrounding landscape through carefully positioned volumes and generous openings.",

    challenge:
      "The architectural language needed to respond to the mountain terrain and climate without becoming visually heavy.",

    awards:
      "Mountain Hospitality",
  },


  {
    title: "Tropical Retreat",
    slug: "tropical-retreat",
    category: "RESORTS",
    location: "Bali, Indonesia",
    status: "Completed",
    designStyle: "Tropical Minimalism",
    type: "Retreat",
    area: "38,000 FT²",

    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2000&q=80",

    heroImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",

    gallery: [
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2400&q=85",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
    ],

    description:
      "A tropical retreat centered around landscape, filtered light, and a relaxed relationship between architecture and nature.",

    challenge:
      "The design had to create privacy and comfort while keeping the natural environment visually present throughout the experience.",

    awards:
      "Tropical Architecture",
  },
];