export interface ServiceProcess {
  title: string;
  text: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Service {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  subtitle: string;
  description: string;
  process: ServiceProcess[];
  gallery: GalleryItem[];
}

export const services: Service[] = [
  // =========================================================
  // 01 — ART INSTALLATIONS
  // =========================================================

  {
    title: "Art Installations",
    slug: "art-installations",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_085843092.PORTRAIT.ORIGINAL_r9irhi.jpg",

    subtitle: "Art that transforms spaces.",

    description:
      "Custom art installations created to transform architecture, interiors and hospitality spaces through scale, material and emotion.",

    process: [
      {
        title: "Concept",
        text: "Creative direction.",
      },
      {
        title: "Design",
        text: "Visual development.",
      },
      {
        title: "Fabrication",
        text: "Craftsmanship and production.",
      },
      {
        title: "Installation",
        text: "On-site execution.",
      },
    ],

    gallery: [
      {
        title: "The Sacred Form",
        category: "Wall Installation",
        description:
          "A sculptural wall installation created to bring cultural expression and visual depth into contemporary interiors.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Organic Flow",
        category: "Sculptural Art",
        description:
          "An organic composition inspired by natural movement and designed to create a quiet visual rhythm.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_085843092.PORTRAIT.ORIGINAL_r9irhi.jpg",
      },
      {
        title: "Heritage Lines",
        category: "Bespoke Art",
        description:
          "A contemporary interpretation of traditional forms developed specifically for a luxury interior.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Living Sculpture",
        category: "Sculptural Installation",
        description:
          "A statement sculpture conceived as an architectural focal point within the space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Light & Form",
        category: "Light Installation",
        description:
          "A layered artwork where light, shadow and material interact to create an atmospheric experience.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "The Whale",
        category: "Art Installation",
        description:
          "A handcrafted sculptural artwork developed as a strong visual identity element for hospitality spaces.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "Material Study",
        category: "Mixed Media",
        description:
          "An exploration of texture and materiality combining handcrafted surfaces with contemporary detailing.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Quiet Geometry",
        category: "Wall Art",
        description:
          "Minimal geometric artwork created to complement the architectural language of the surrounding space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Cultural Narrative",
        category: "Bespoke Installation",
        description:
          "A site-specific artwork translating cultural references into a refined contemporary composition.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Architectural Rhythm",
        category: "Spatial Art",
        description:
          "A large-scale installation designed to connect artwork with the rhythm and proportions of architecture.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
    ],
  },

  // =========================================================
  // 02 — SCULPTURES
  // =========================================================

  {
    title: "Sculptures",
    slug: "sculptures",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",

    subtitle: "Statement sculptures crafted with precision.",

    description:
      "Sculptural works created through a balance of form, material and craftsmanship, bringing identity and character to every environment.",

    process: [
      {
        title: "Sketch",
        text: "Initial concepts.",
      },
      {
        title: "Model",
        text: "Prototype development.",
      },
      {
        title: "Fabrication",
        text: "Material craftsmanship.",
      },
      {
        title: "Installation",
        text: "Final placement.",
      },
    ],

    gallery: [
      {
        title: "The Guardian",
        category: "Figurative Sculpture",
        description:
          "A powerful sculptural presence designed to create a sense of strength and character within the interior.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Fluid Form",
        category: "Contemporary Sculpture",
        description:
          "A flowing sculptural composition exploring movement, balance and organic geometry.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Ancient Memory",
        category: "Cultural Sculpture",
        description:
          "A contemporary sculptural interpretation inspired by traditional artistic language.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Natural Balance",
        category: "Organic Sculpture",
        description:
          "A sculptural study inspired by natural forms and the relationship between mass and space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_085843092.PORTRAIT.ORIGINAL_r9irhi.jpg",
      },
      {
        title: "Dark Matter",
        category: "Statement Sculpture",
        description:
          "A dramatic sculptural object designed to become the visual anchor of a room.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "The Curve",
        category: "Abstract Sculpture",
        description:
          "An abstract form created around continuous curves and controlled proportions.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "Material Dialogue",
        category: "Mixed Material",
        description:
          "Contrasting materials come together to create a tactile and visually layered sculptural object.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Monument",
        category: "Large Scale Sculpture",
        description:
          "A monumental work conceived specifically for large architectural environments.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Silent Form",
        category: "Minimal Sculpture",
        description:
          "A restrained sculptural composition focused on proportion, negative space and material.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Sculptural Landscape",
        category: "Spatial Sculpture",
        description:
          "A large-scale sculptural arrangement developed to interact with architecture and movement.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
    ],
  },

  // =========================================================
  // 03 — LIGHTING
  // =========================================================

  {
    title: "Lighting",
    slug: "lighting",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",

    subtitle: "Architectural lighting that defines spaces.",

    description:
      "Thoughtfully designed lighting systems balancing atmosphere, beauty and functionality to shape the experience of a space.",

    process: [
      {
        title: "Planning",
        text: "Lighting strategy.",
      },
      {
        title: "Selection",
        text: "Fixtures and finishes.",
      },
      {
        title: "Installation",
        text: "Technical execution.",
      },
      {
        title: "Testing",
        text: "Final calibration.",
      },
    ],

    gallery: [
      {
        title: "Ambient Glow",
        category: "Architectural Lighting",
        description:
          "Soft ambient illumination designed to create warmth and depth across the interior.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "Sculptural Light",
        category: "Decorative Lighting",
        description:
          "A lighting element designed to function equally as an illuminated object and an architectural feature.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Linear Rhythm",
        category: "Linear Lighting",
        description:
          "A precise lighting composition following the architectural geometry of the space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Atmosphere",
        category: "Hospitality Lighting",
        description:
          "Layered lighting designed to create a calm and immersive hospitality experience.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_085843092.PORTRAIT.ORIGINAL_r9irhi.jpg",
      },
      {
        title: "Statement Pendant",
        category: "Feature Lighting",
        description:
          "A dramatic pendant designed to become the focal point above a central architectural space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "Light Sculpture",
        category: "Art Lighting",
        description:
          "A sculptural lighting installation combining material, shadow and illumination.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Warm Architecture",
        category: "Interior Lighting",
        description:
          "Warm-toned illumination designed to enhance materiality and architectural surfaces.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Shadow Play",
        category: "Ambient Installation",
        description:
          "Lighting designed around shadow and contrast to introduce depth into the environment.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Golden Detail",
        category: "Decorative Light",
        description:
          "A refined lighting composition using warm finishes to create a luxurious atmosphere.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Night Composition",
        category: "Spatial Lighting",
        description:
          "A complete lighting composition developed to transform the character of the space after dark.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
    ],
  },

  // =========================================================
  // 04 — MIRRORS & CHANDELIERS
  // =========================================================

  {
    title: "Mirrors & Chandeliers",
    slug: "mirrors-chandeliers",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/20260107_231823_qv8hds.jpg",

    subtitle: "Luxury decorative lighting and mirror design.",

    description:
      "Bespoke mirrors and chandeliers handcrafted to elevate interiors through proportion, reflection, material and light.",

    process: [
      {
        title: "Design",
        text: "Custom concepts.",
      },
      {
        title: "Engineering",
        text: "Technical detailing.",
      },
      {
        title: "Production",
        text: "Handcrafted fabrication.",
      },
      {
        title: "Installation",
        text: "On-site finishing.",
      },
    ],

    gallery: [
      {
        title: "The Grand Mirror",
        category: "Bespoke Mirror",
        description:
          "A statement mirror designed to amplify the architecture and create a strong decorative focal point.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "Celestial",
        category: "Chandelier",
        description:
          "A sculptural chandelier inspired by celestial forms and designed to float within the interior.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/20260107_231823_qv8hds.jpg",
      },
      {
        title: "Golden Frame",
        category: "Decorative Mirror",
        description:
          "A handcrafted mirror framed with refined detailing for a luxurious residential environment.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Cascade",
        category: "Feature Chandelier",
        description:
          "A cascading lighting installation designed to create movement and vertical drama.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "Reflection",
        category: "Architectural Mirror",
        description:
          "A large-format mirror installation used to visually extend the proportions of the interior.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Jewelled Light",
        category: "Luxury Chandelier",
        description:
          "A highly decorative chandelier developed to add sparkle and visual richness to the space.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Infinite Reflection",
        category: "Mirror Installation",
        description:
          "A composition of reflective surfaces designed to create depth and layered perspectives.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Orbit",
        category: "Contemporary Chandelier",
        description:
          "A contemporary lighting composition based on circular geometry and balanced proportions.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "The Halo",
        category: "Decorative Lighting",
        description:
          "A refined illuminated form designed to create a subtle halo of light around the architecture.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/20260107_231823_qv8hds.jpg",
      },
      {
        title: "Grandeur",
        category: "Bespoke Lighting",
        description:
          "A large-scale custom chandelier created specifically for a dramatic interior setting.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
    ],
  },

  // =========================================================
  // 05 — DOORS & PARTITIONS
  // =========================================================

  {
    title: "Doors & Partitions",
    slug: "doors-partitions",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    subtitle: "Functional architectural partitions with timeless aesthetics.",

    description:
      "Custom doors and partition systems that seamlessly integrate into luxury spaces while creating privacy, movement and architectural definition.",

    process: [
      {
        title: "Measurement",
        text: "Site survey.",
      },
      {
        title: "Design",
        text: "Custom detailing.",
      },
      {
        title: "Production",
        text: "Precision manufacturing.",
      },
      {
        title: "Installation",
        text: "Final fitting.",
      },
    ],

    gallery: [
      {
        title: "Framed Entry",
        category: "Custom Door",
        description:
          "A refined architectural entrance combining strong proportions with handcrafted detailing.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Open Structure",
        category: "Partition",
        description:
          "An open partition designed to divide space while maintaining visual continuity.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "Timber Lines",
        category: "Wood Partition",
        description:
          "Vertical timber detailing introduces warmth while creating subtle spatial separation.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Metal Grid",
        category: "Metal Partition",
        description:
          "A structured metal screen designed to define zones without closing the architecture.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Glass & Brass",
        category: "Luxury Partition",
        description:
          "Glass and brass details combine transparency with a refined decorative edge.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "The Portal",
        category: "Architectural Door",
        description:
          "A sculptural doorway conceived as a transition between two distinct architectural spaces.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Quiet Separation",
        category: "Interior Partition",
        description:
          "A minimal partition system that creates privacy without interrupting the visual language.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Crafted Frame",
        category: "Bespoke Door",
        description:
          "A custom door developed around precise framing, proportion and tactile materials.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/20260107_231823_qv8hds.jpg",
      },
      {
        title: "Screen",
        category: "Decorative Partition",
        description:
          "A decorative screen balancing privacy with light, shadow and visual permeability.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Architectural Threshold",
        category: "Feature Door",
        description:
          "A statement entrance designed to establish the character of the space from the first moment.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
    ],
  },

  // =========================================================
  // 06 — METAL FINISHES
  // =========================================================

  {
    title: "Metal Finishes",
    slug: "metal-finishes",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",

    subtitle: "Premium metal craftsmanship for luxury interiors.",

    description:
      "Decorative metal finishes designed to enrich architecture and interior spaces through texture, colour, reflection and precision craftsmanship.",

    process: [
      {
        title: "Material Selection",
        text: "Choosing the perfect finish.",
      },
      {
        title: "Fabrication",
        text: "Precision metal work.",
      },
      {
        title: "Finishing",
        text: "Surface treatment.",
      },
      {
        title: "Installation",
        text: "Final execution.",
      },
    ],

    gallery: [
      {
        title: "Brushed Brass",
        category: "Metal Finish",
        description:
          "A warm brushed brass finish developed to introduce subtle luxury and depth into the architecture.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Dark Bronze",
        category: "Bronze Finish",
        description:
          "A deep bronze surface providing contrast and sophistication within contemporary interiors.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
      {
        title: "Aged Brass",
        category: "Decorative Metal",
        description:
          "An aged brass finish developed to bring a sense of heritage and handcrafted character.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491884/20241010_183220_amhyf9.heic",
      },
      {
        title: "Copper Detail",
        category: "Copper Finish",
        description:
          "Warm copper detailing used as a refined accent within architectural and interior elements.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/PXL_20231027_081640919_qiggsc.jpg",
      },
      {
        title: "Blackened Steel",
        category: "Steel Finish",
        description:
          "A dark architectural finish offering a bold material contrast against lighter surfaces.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764176/PXL_20231102_085843092.PORTRAIT.ORIGINAL_r9irhi.jpg",
      },
      {
        title: "Hammered Texture",
        category: "Textured Metal",
        description:
          "Hand-finished metal with a tactile hammered surface that catches light and creates visual movement.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785491874/WhatsApp_Image_2025-06-19_at_11.16.03_d0a7196b_y7eyde.jpg",
      },
      {
        title: "Polished Metal",
        category: "Reflective Finish",
        description:
          "A polished surface designed to interact with surrounding light and reflect architectural details.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785764169/IMG-20260513-WA0011_zkocap.jpg",
      },
      {
        title: "Metal Mesh",
        category: "Architectural Metal",
        description:
          "A lightweight metal mesh system used to introduce texture, transparency and movement.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493722/20240913_174836_i51iog.jpg",
      },
      {
        title: "Patina",
        category: "Special Finish",
        description:
          "A carefully developed patina that gives the metal a naturally aged and richly layered appearance.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785763329/PXL_20240527_113221609_bhsvin.jpg",
      },
      {
        title: "Metal Architecture",
        category: "Large Scale Finish",
        description:
          "A complete architectural metal treatment designed to give the space a distinctive material identity.",
        image:
          "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",
      },
    ],
  },
];