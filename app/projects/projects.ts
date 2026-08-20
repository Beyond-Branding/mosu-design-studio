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
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "hotels-resorts",
    title: "HOTELS & RESORTS",
    category: "ALL WORKS",
    status: "COMPLETED",
    location: "GOA, INDIA",
    year: "2025",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_090000199_1_j7jjtq.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_090000199_1_j7jjtq.jpg",
    subtitle: "Luxury hospitality designed around unforgettable experiences.",
    description:
      "Luxury resorts, boutique hotels and hospitality environments crafted to deliver timeless guest experiences.",
  },

  {
    id: 2,
    slug: "residences",
    title: "RESIDENCES",
    category: "ALL WORKS",
    status: "IN PROGRESS",
    location: "MUMBAI, INDIA",
    year: "2025",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491870/PXL_20230807_110331569_zeomvz.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231102_090000199_rsatec.jpg",
    subtitle: "Minimal architecture with luxurious living.",
    description:
      "Private residences combining timeless architecture with bespoke interiors.",
  },

  {
    id: 3,
    slug: "bespoke-art",
    title: "BESPOKE ART",
    category: "ALL WORKS",
    status: "COMPLETED",
    location: "DUBAI, UAE",
    year: "2024",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20241010_182651_pguwjb.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493728/NSP_0904_lkofdq.jpg",
    subtitle: "Art installations that define spaces.",
    description:
      "Large-scale commissioned artworks created exclusively for luxury interiors.",
  },

  {
    id: 4,
    slug: "wall-installations",
    title: "WALL INSTALLATIONS",
    category: "ALL WORKS",
    status: "COMPLETED",
    location: "DELHI, INDIA",
    year: "2024",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493725/20240914_172352_gyaxp4.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1784750119/pexels-pu-ca-adryan-163345030-12881057_lmymgz.jpg",
    subtitle: "Feature walls crafted as works of art.",
    description:
      "Architectural wall features blending texture, lighting and craftsmanship.",
  },

  {
    id: 5,
    slug: "sculptures",
    title: "SCULPTURES",
    category: "ALL WORKS",
    status: "COMPLETED",
    location: "LONDON, UK",
    year: "2023",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
    subtitle: "Large-scale sculptural expressions.",
    description:
      "Contemporary sculptures handcrafted for architectural environments.",
  },

  {
    id: 6,
    slug: "custom-lighting",
    title: "CUSTOM LIGHTING",
    category: "ALL WORKS",
    status: "IN PROGRESS",
    location: "SINGAPORE",
    year: "2025",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
    subtitle: "Lighting that transforms atmosphere.",
    description:
      "Bespoke lighting installations designed to shape mood and space.",
  },

  {
    id: 7,
    slug: "furniture",
    title: "FURNITURE",
    category: "ALL WORKS",
    status: "IN PROGRESS",
    location: "BENGALURU, INDIA",
    year: "2024",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764168/WhatsApp_Image_2026-01-03_at_6.59.10_PM_umq9vl.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/WhatsApp_Image_2026-01-03_at_6.59.12_PM_top8di.jpg",
    subtitle: "Furniture designed as functional sculpture.",
    description:
      "Handcrafted furniture combining premium materials with timeless design.",
  },

  {
    id: 8,
    slug: "doors-partitions",
    title: "DOORS & PARTITIONS",
    category: "ALL WORKS",
    status: "IN PROGRESS",
    location: "HYDERABAD, INDIA",
    year: "2024",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
    subtitle: "Elegant transitions between spaces.",
    description:
      "Custom pivot doors and architectural partition systems.",
  },

  {
    id: 9,
    slug: "metal-works",
    title: "METAL WORKS",
    category: "ALL WORKS",
    status: "IN PROGRESS",
    location: "CHENNAI, INDIA",
    year: "2025",
    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
    subtitle: "Decorative metal craftsmanship.",
    description:
      "Luxury brass, bronze and stainless-steel elements for bespoke interiors.",
  },
];