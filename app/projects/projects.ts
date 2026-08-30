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

  /* =========================
     DETAIL PAGE
  ========================= */

  gallery?: string[];

  designStyle?: string;
  type?: string;
  area?: string;
  coordinates?: string;

  concept?: string;
  challenge?: string;
  composition?: string;

  awards?: string;

  team?: {
    name: string;
    role: string;
  }[];
}


export const projects: Project[] = [

  /* =========================================================
     01 — HOTELS & RESORTS
  ========================================================= */

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
    ],

    subtitle:
      "Luxury hospitality designed around unforgettable experiences.",

    description:
      "Luxury resorts, boutique hotels and hospitality environments crafted to deliver timeless guest experiences.",

    designStyle: "Contemporary",

    type: "Hospitality",

    area: "—",

    coordinates: "GOA, INDIA",

    concept:
      "A hospitality environment shaped around natural materials, warm textures and a seamless connection between architecture and landscape.",

    challenge:
      "The project required a balance between luxury, comfort and a strong sense of place while maintaining a refined contemporary identity.",

    composition:
      "Carefully layered materials, custom furniture and controlled lighting create a calm yet immersive hospitality experience.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Architecture & Interior Design",
      },
    ],
  },


  /* =========================================================
     02 — RESIDENCES
  ========================================================= */

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
    ],

    subtitle:
      "Minimal architecture with luxurious living.",

    description:
      "Private residences combining timeless architecture with bespoke interiors.",

    designStyle: "Minimal Contemporary",

    type: "Private Residence",

    area: "—",

    coordinates: "MUMBAI, INDIA",

    concept:
      "The residence explores a restrained architectural language where proportion, natural materials and carefully controlled light define the experience.",

    challenge:
      "Creating a luxurious residence without excessive visual elements required precise detailing and a carefully considered material palette.",

    composition:
      "Open living areas, sculptural furniture and custom architectural elements create a continuous relationship between the different spaces.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Architecture & Interior Design",
      },
    ],
  },


  /* =========================================================
     03 — BESPOKE ART
  ========================================================= */

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
    ],

    subtitle:
      "Art installations that define spaces.",

    description:
      "Large-scale commissioned artworks created exclusively for luxury interiors.",

    designStyle: "Contemporary Art",

    type: "Art Installation",

    area: "—",

    coordinates: "DUBAI, UAE",

    concept:
      "The installation was developed as an architectural artwork rather than a decorative object, allowing the piece to become an integral part of its surrounding space.",

    challenge:
      "Scale, material selection and installation precision were central to achieving the intended visual impact.",

    composition:
      "Sculptural geometry and carefully controlled surfaces create a strong focal point within the interior.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Art Direction & Design",
      },
    ],
  },


  /* =========================================================
     04 — WALL INSTALLATIONS
  ========================================================= */

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
    ],

    subtitle:
      "Feature walls crafted as works of art.",

    description:
      "Architectural wall features blending texture, lighting and craftsmanship.",

    designStyle: "Sculptural Contemporary",

    type: "Wall Installation",

    area: "—",

    coordinates: "DELHI, INDIA",

    concept:
      "The wall becomes an architectural canvas, combining material, texture and light to create a distinctive visual identity.",

    challenge:
      "The installation required detailed fabrication and careful coordination with the existing architecture.",

    composition:
      "Layered surfaces and integrated lighting create depth and movement across the wall.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Design & Fabrication",
      },
    ],
  },


  /* =========================================================
     05 — SCULPTURES
  ========================================================= */

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
    ],

    subtitle:
      "Large-scale sculptural expressions.",

    description:
      "Contemporary sculptures handcrafted for architectural environments.",

    designStyle: "Contemporary Sculpture",

    type: "Sculpture",

    area: "—",

    coordinates: "LONDON, UK",

    concept:
      "The sculpture is conceived as a dialogue between material, volume and surrounding architecture.",

    challenge:
      "Achieving the required scale while preserving the precision of the sculptural form was a central challenge.",

    composition:
      "A carefully controlled balance of solid and void creates a strong architectural presence.",

    team: [
      {
        name: "MOSU STUDIO",
        role: "Sculpture Design",
      },
    ],
  },


  /* =========================================================
     06 — CUSTOM LIGHTING
  ========================================================= */

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
    ],

    subtitle:
      "Lighting that transforms atmosphere.",

    description:
      "Bespoke lighting installations designed to shape mood and space.",

    designStyle: "Atmospheric Contemporary",

    type: "Custom Lighting",

    area: "—",

    coordinates: "SINGAPORE",

    concept:
      "Light becomes an architectural material, defining atmosphere, movement and spatial hierarchy.",

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


  /* =========================================================
     07 — FURNITURE
  ========================================================= */

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
    ],

    subtitle:
      "Furniture designed as functional sculpture.",

    description:
      "Handcrafted furniture combining premium materials with timeless design.",

    designStyle: "Contemporary",

    type: "Furniture",

    area: "—",

    coordinates: "BENGALURU, INDIA",

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


  /* =========================================================
     08 — DOORS & PARTITIONS
  ========================================================= */

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
    ],

    subtitle:
      "Elegant transitions between spaces.",

    description:
      "Custom pivot doors and architectural partition systems.",

    designStyle: "Contemporary Minimal",

    type: "Architectural Elements",

    area: "—",

    coordinates: "HYDERABAD, INDIA",

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


  /* =========================================================
     09 — METAL WORKS
  ========================================================= */

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
    ],

    subtitle:
      "Decorative metal craftsmanship.",

    description:
      "Luxury brass, bronze and stainless-steel elements for bespoke interiors.",

    designStyle: "Luxury Contemporary",

    type: "Metal Works",

    area: "—",

    coordinates: "CHENNAI, INDIA",

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