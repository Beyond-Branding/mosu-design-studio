export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  status: "COMPLETED" | "IN PROGRESS";
  location: string;
  year: string;

  image: string;
  heroImage: string;

  subtitle: string;
  description: string;

  /* YODEZEEN STYLE DETAIL DATA */
  designStyle?: string;
  coordinates?: string;
  type?: string;
  area?: string;

  gallery?: string[];

  awards?: string;

  concept?: string;
  challenge?: string;
  composition?: string;

  team?: {
    name: string;
    role: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "hotels-resorts",
    title: "HOTELS & RESORTS",
    category: "HOTELS & RESORTS",
    status: "COMPLETED",
    location: "GOA, INDIA",
    year: "2025",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_090000199_1_j7jjtq.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_090000199_1_j7jjtq.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_090000199_1_j7jjtq.jpg",

      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Luxury hospitality designed around unforgettable experiences.",

    description:
      "Luxury resorts, boutique hotels and hospitality environments crafted to deliver timeless guest experiences.",

    designStyle: "Contemporary Luxury",
    coordinates: "15°29′ N / 73°49′ E",
    type: "Hotel & Resort",
    area: "—",

    awards:
      "A hospitality environment developed around refined materiality, memorable experiences and a strong relationship with its natural surroundings.",

    concept:
      "The project explores the relationship between contemporary luxury and the relaxed character of Goa. Natural materials, warm textures and carefully framed views create an atmosphere that feels sophisticated without losing its sense of place.",

    challenge:
      "The main challenge was creating a luxury hospitality experience that remained connected to the tropical environment while providing the level of comfort and refinement expected from a contemporary resort.",

    composition:
      "The spatial composition combines open communal areas, private guest spaces and landscaped transitions. Carefully controlled lighting, custom furniture and tactile materials create a continuous hospitality experience.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Architecture & Interior Design",
      },
    ],
  },


  {
    id: 2,
    slug: "residences",
    title: "RESIDENCES",
    category: "RESIDENCES",
    status: "IN PROGRESS",
    location: "MUMBAI, INDIA",
    year: "2025",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491870/PXL_20230807_110331569_zeomvz.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231102_090000199_rsatec.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231102_090000199_rsatec.jpg",

      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491870/PXL_20230807_110331569_zeomvz.jpg",

      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Minimal architecture with luxurious living.",

    description:
      "Private residences combining timeless architecture with bespoke interiors.",

    designStyle: "Minimal Contemporary",
    coordinates: "19°04′ N / 72°52′ E",
    type: "Private Residence",
    area: "—",

    awards:
      "A private residential project focused on proportion, materiality and quiet luxury.",

    concept:
      "The residence is conceived as a calm architectural environment where natural materials, restrained geometry and carefully framed views create a timeless living experience.",

    challenge:
      "The challenge was to create a luxurious environment without relying on excessive decoration. Every element therefore needed to contribute to the overall architectural composition.",

    composition:
      "Open living areas connect with private spaces through carefully proportioned thresholds. Bespoke furniture, integrated lighting and natural surfaces establish continuity throughout the residence.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Architecture & Interior Design",
      },
    ],
  },


  {
    id: 3,
    slug: "bespoke-art",
    title: "BESPOKE ART",
    category: "BESPOKE ART",
    status: "COMPLETED",
    location: "DUBAI, UAE",
    year: "2024",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20241010_182651_pguwjb.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493728/NSP_0904_lkofdq.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493728/NSP_0904_lkofdq.jpg",

      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20241010_182651_pguwjb.jpg",

      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Art installations that define spaces.",

    description:
      "Large-scale commissioned artworks created exclusively for luxury interiors.",

    designStyle: "Contemporary Art",
    coordinates: "25°12′ N / 55°16′ E",
    type: "Art Installation",
    area: "—",

    awards:
      "Commissioned artwork developed specifically for a luxury interior environment.",

    concept:
      "The artwork is conceived as an architectural element rather than a decorative addition, allowing it to become part of the identity of the surrounding space.",

    challenge:
      "Scale, fabrication and installation precision were central to achieving the intended visual impact while maintaining the integrity of the artwork.",

    composition:
      "Sculptural geometry, texture and controlled reflection create a strong focal point within the interior.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Art Direction & Design",
      },
    ],
  },


  {
    id: 4,
    slug: "wall-installations",
    title: "WALL INSTALLATIONS",
    category: "WALL INSTALLATIONS",
    status: "COMPLETED",
    location: "DELHI, INDIA",
    year: "2024",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493725/20240914_172352_gyaxp4.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-pu-ca-adryan-163345030-12881057_lmymgz.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-pu-ca-adryan-163345030-12881057_lmymgz.jpg",

      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493725/20240914_172352_gyaxp4.jpg",

      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Feature walls crafted as works of art.",

    description:
      "Architectural wall features blending texture, lighting and craftsmanship.",

    designStyle: "Sculptural Contemporary",
    coordinates: "28°36′ N / 77°12′ E",
    type: "Wall Installation",
    area: "—",

    concept:
      "The wall becomes an architectural canvas, combining texture, material and light to create a distinctive visual identity.",

    challenge:
      "The installation required detailed fabrication and precise coordination with the surrounding architecture.",

    composition:
      "Layered surfaces and integrated lighting create depth and movement across the installation.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Design & Fabrication",
      },
    ],
  },


  {
    id: 5,
    slug: "sculptures",
    title: "SCULPTURES",
    category: "SCULPTURES",
    status: "COMPLETED",
    location: "LONDON, UK",
    year: "2023",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",

      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",

      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Large-scale sculptural expressions.",

    description:
      "Contemporary sculptures handcrafted for architectural environments.",

    designStyle: "Contemporary Sculpture",
    coordinates: "51°30′ N / 0°07′ W",
    type: "Sculpture",
    area: "—",

    concept:
      "The sculpture explores the relationship between volume, material and surrounding architecture.",

    challenge:
      "Achieving the required scale while maintaining precision and structural integrity required extensive fabrication development.",

    composition:
      "A controlled balance of solid and void creates a sculptural presence that interacts with the surrounding architecture.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Sculpture Design",
      },
    ],
  },


  {
    id: 6,
    slug: "custom-lighting",
    title: "CUSTOM LIGHTING",
    category: "CUSTOM LIGHTING",
    status: "IN PROGRESS",
    location: "SINGAPORE",
    year: "2025",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Lighting that transforms atmosphere.",

    description:
      "Bespoke lighting installations designed to shape mood and space.",

    designStyle: "Atmospheric Contemporary",
    coordinates: "1°17′ N / 103°51′ E",
    type: "Custom Lighting",
    area: "—",

    concept:
      "Light is treated as an architectural material, defining atmosphere, movement and spatial hierarchy.",

    challenge:
      "The lighting system needed to integrate seamlessly with the architecture while remaining visually distinctive.",

    composition:
      "Custom fixtures and carefully positioned light sources establish a layered atmospheric experience.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Lighting Design",
      },
    ],
  },


  {
    id: 7,
    slug: "furniture",
    title: "FURNITURE",
    category: "FURNITURE",
    status: "IN PROGRESS",
    location: "BENGALURU, INDIA",
    year: "2024",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764168/WhatsApp_Image_2026-01-03_at_6.59.10_PM_umq9vl.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/WhatsApp_Image_2026-01-03_at_6.59.12_PM_top8di.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/WhatsApp_Image_2026-01-03_at_6.59.12_PM_top8di.jpg",

      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764168/WhatsApp_Image_2026-01-03_at_6.59.10_PM_umq9vl.jpg",

      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Furniture designed as functional sculpture.",

    description:
      "Handcrafted furniture combining premium materials with timeless design.",

    designStyle: "Contemporary",
    coordinates: "12°58′ N / 77°35′ E",
    type: "Furniture",
    area: "—",

    concept:
      "Each furniture piece is treated as an individual sculptural object while maintaining functionality and comfort.",

    challenge:
      "The design required a balance between sculptural form, ergonomics and material craftsmanship.",

    composition:
      "Simple silhouettes are elevated through proportion, texture and carefully selected materials.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Furniture Design",
      },
    ],
  },


  {
    id: 8,
    slug: "doors-partitions",
    title: "DOORS & PARTITIONS",
    category: "DOORS & PARTITIONS",
    status: "IN PROGRESS",
    location: "HYDERABAD, INDIA",
    year: "2024",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Elegant transitions between spaces.",

    description:
      "Custom pivot doors and architectural partition systems.",

    designStyle: "Contemporary Minimal",
    coordinates: "17°23′ N / 78°29′ E",
    type: "Architectural Elements",
    area: "—",

    concept:
      "Doors and partitions are designed as architectural elements rather than simple functional boundaries.",

    challenge:
      "The systems needed to provide privacy and separation while maintaining visual continuity throughout the interior.",

    composition:
      "Minimal frames, refined materials and carefully proportioned openings create seamless transitions.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Architectural Design",
      },
    ],
  },


  {
    id: 9,
    slug: "metal-works",
    title: "METAL WORKS",
    category: "METAL WORKS",
    status: "IN PROGRESS",
    location: "CHENNAI, INDIA",
    year: "2025",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",

      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90",

      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    ],

    subtitle:
      "Decorative metal craftsmanship.",

    description:
      "Luxury brass, bronze and stainless-steel elements for bespoke interiors.",

    designStyle: "Luxury Contemporary",
    coordinates: "13°05′ N / 80°16′ E",
    type: "Metal Works",
    area: "—",

    concept:
      "Metal is treated as a refined architectural material, combining craftsmanship with contemporary geometry.",

    challenge:
      "Achieving precise finishes and complex forms required close coordination between design and fabrication.",

    composition:
      "Brass, bronze and stainless steel elements introduce texture, reflection and visual depth into the interior.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Design & Metal Fabrication",
      },
    ],
  },
];