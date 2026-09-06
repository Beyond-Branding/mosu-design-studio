export interface Project {
  title: string;
  slug: string;

  category: "RESIDENCES" | "HOTELS" | "RESORTS";
  location: string;
  status?: string;

  image: string;
  heroImage: string;

  description?: string;
  designStyle?: string;
  mapImage?: string;
  type?: string;
  area?: string;
  awards?: string;
  challenge?: string;

  /*
   * GALLERY ORDER
   *
   * gallery[0] → Main image
   * gallery[1] → Composition image
   * gallery[2] → Challenge image
   *
   * FINAL GRID
   * gallery[3] → Large image
   * gallery[4] → Small image
   * gallery[5] → Small image
   * gallery[6] → Small image
   * gallery[7] → Small image
   *
   * TOTAL = 8 IMAGES
   */
  gallery: string[];

  brief?: string;
  concept?: string;
  execution?: string;
}

export const projects: Project[] = [
  // ============================================================
  // 01 — TAJ GATEWAY PALOLEM
  // ============================================================

  {
    title: "TAJ GATEWAY PALOLEM",
    slug: "taj-gateway-palolem",

    category: "RESORTS",
    location: "GOA, INDIA",
    status: "COMPLETED",
    type: "RESORT",
    designStyle: "Coastal Contemporary",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788682126/Taj_Gateway_Goa_Thumbnail_1_zisznu.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788684887/extra_1_toal6p.png",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421741/WhatsApp_Image_2026-09-03_at_13.03.01_h3woer.jpg",

    description:
      "A distinctive artistic identity for a coastal resort in South Goa, inspired by the beaches, landscape and local culture of Palolem.",

    brief:
      "To create a distinctive artistic identity for a coastal resort in South Goa, carrying the character of its beaches, landscape and local culture through the property.",

    concept:
      "The sea became the thread that connects the project, moving from tides and sunsets to aquatic life, surf culture and fragments of Goa, each interpreted differently rather than repeated.",

    execution:
      "Hand-cut glass mosaic artworks, layered birchwood wall installations, blown-glass fish sculptures, sculptural mirrors, surfboard installations, room signage, large-scale wall art and handmade glass chandeliers.",

    challenge:
      "Creating a cohesive artistic identity while allowing each artwork to respond to the coastal character of South Goa required a varied approach to materials, scale and visual language.",

    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683880/13_oo4hay.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683880/14_y1ckgg.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1785493726/08_Spa_01_nifcl7.jpg",

  // 04 — Large grid image
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788684887/extra_1_toal6p.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683882/8_zu2xnu.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683880/9_onnxnf.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683880/12_keujkb.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788682126/Taj_Gateway_Goa_Thumbnail_1_zisznu.png",
],
  },

  // ============================================================
  // 02 — HYATT REGENCY DEHRADUN
  // ============================================================

  {
    title: "HYATT REGENCY ",
    slug: "hyatt-regency-dehradun",

    category: "RESORTS",
    location: "UTTARAKHAND, INDIA",
    status: "COMPLETED",
    type: "RESORT",
    designStyle: "Organic Contemporary",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788681139/Hyatt_Regency_d4r1yj.png",

    heroImage:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2400&q=85",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421742/WhatsApp_Image_2026-09-03_at_13.03.27_zrfnou.jpg",

    description:
      "A quieter artistic language inspired by the natural character of Dehradun, complementing the warmth of the architecture through organic textures and botanical forms.",

    brief:
      "To introduce art into the hotel with a quieter language that could complement the warmth of the architecture while reflecting the natural character of Dehradun.",

    concept:
      "The surrounding landscape became a subtle reference, interpreted through organic textures, botanical forms and earthy materiality rather than literal representations.",

    execution:
      "Textured wall reliefs, sculptural wall installations, framed botanical artworks, decorative panels and freestanding nature-inspired sculptural forms.",

    challenge:
      "The artwork needed to enrich the hospitality environment without overpowering the architecture, creating a balance between natural references, texture and restraint.",

    gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=85",
],
  },

  // ============================================================
  // 03 — MY HOME TIRUMALA
  // ============================================================

  {
    title: "MY HOME TIRUMALA",
    slug: "my-home-tirumala",

    category: "HOTELS",
    location: "ANDHRA PRADESH, INDIA",
    status: "COMPLETED",
    type: "HOTEL",
    designStyle: "Traditional Contemporary",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788682208/my_home_tirumala_1_xjt7ug.png",

    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",


      
    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421741/WhatsApp_Image_2026-09-03_at_13.02.40_dntmud.jpg",

    description:
      "A contemporary guest house enriched with traditional iconography and Kalamkari, creating a cultural identity that feels rooted yet contemporary.",

    brief:
      "To bring a sense of tradition and cultural familiarity into a contemporary guest house without making the expression feel overly ceremonial.",

    concept:
      "Traditional iconography and Kalamkari became the foundation, reinterpreted through different scales, formats and materials to create a collection that feels rooted yet contemporary.",

    execution:
      "Hand-painted canvas artworks, wall sculptures, hand-painted wooden panels, devotional art compositions, planters and framed canvas works.",

    challenge:
      "The challenge was to preserve the cultural character of the project while ensuring the artworks remained appropriate for a contemporary hospitality environment.",

    gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
],
  },

  
  // ============================================================
  // 05 — 76 HAZRA
  // ============================================================

  {
    title: "76 HAZRA",
    slug: "76-hazra",

    category: "RESIDENCES",
    location: "KOLKATA, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Contemporary Eclectic",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788681130/76_Hazra_2_ywicuh.png",

    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

    mapImage: "/maps/goa.png",

    description:
      "A four-storey contemporary residence transformed through colour, art and sculptural interventions, with every space developing its own artistic character.",

    brief:
      "To introduce colour, art and sculptural detail into a four-storey contemporary residence defined by clean architectural finishes.",

    concept:
      "Rather than following one visual language throughout, the residence became a collection of individual artistic moments, each responding to the mood and scale of its setting.",

    execution:
      "Metal and wooden wall installations, mosaic art, textured canvases, bead and sequin artworks, sculptural wall pieces and FRP sculptures with gloss finishes.",

    challenge:
      "The challenge was to create visual richness and individuality across four storeys while maintaining a cohesive relationship with the contemporary architecture.",

   gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
],
  },

  // ============================================================
  // 06 — GUNTUR PROJECT
  // ============================================================

  {
    title: "GUNTUR PROJECT",
    slug: "guntur-project",

    category: "RESIDENCES",
    location: "ANDHRA PRADESH, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Eclectic Contemporary",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788681130/Guntur_Project_pefzpv.png",

    heroImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421741/WhatsApp_Image_2026-09-03_at_13.02.40_dntmud.jpg",

    description:
      "An extensive art collection for a vibrant four-storey residence, allowing individual rooms and passages to develop their own visual identities.",

    brief:
      "To build an extensive art collection for a vibrant four-storey residence, allowing different rooms and passages to develop their own character.",

    concept:
      "The project celebrates variety, moving between figurative, cultural, abstract and nature-led narratives while allowing material and medium to change from space to space.",

    execution:
      "Hand-painted canvases, textured dust-marble artworks, painted wooden panels, alcohol-ink works, gallery walls, layered wooden installations and sculptural feature compositions.",

    challenge:
      "The challenge was to manage a broad collection of artistic styles and materials while maintaining a strong sense of continuity throughout the residence.",

   gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
],
  },

  // ============================================================
  // 07 — COIMBATORE MANSION
  // ============================================================

  {
    title: "COIMBATORE MANSION",
    slug: "coimbatore-mansion",

    category: "RESIDENCES",
    location: "TAMIL NADU, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Venetian Luxury",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788682220/coimbatore_Mansion_1_gt0y0l.png",

    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421741/WhatsApp_Image_2026-09-03_at_13.03.13_kwhzsp.jpg",

    description:
      "A Venetian-style mansion defined by scale, ornament and craftsmanship, using reflection and light to create a sense of grandeur.",

    brief:
      "To create bespoke decorative elements for a Venetian-style mansion where scale, ornament and craftsmanship were integral to the architecture.",

    concept:
      "Reflection and light became central to the project, drawing from Venetian craftsmanship to create a sense of grandeur through glass, crystal, carving and intricate detail.",

    execution:
      "Venetian and Murano mirrors, Murano chandeliers, Asfour crystal chandeliers, cascading crystal light installations, metal curtains, carved wooden frames and decorative wall inlays.",

    challenge:
      "Working with elaborate decorative elements required careful coordination of scale, craftsmanship, light and architectural detailing.",

    gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",
],
  },

  // ============================================================
  // 08 — BIYANI'S RESIDENCE
  // ============================================================

  {
    title: "BIYANI'S RESIDENCE",
    slug: "biyanies-residence",

    category: "RESIDENCES",
    location: "MUMBAI, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Contemporary Art",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788681137/Biyani_i69drt.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683882/7_krkxwa.png",

    mapImage: "/maps/goa.png",

    description:
      "A warm and understated residence enriched with contemporary artistic interventions built around line, texture and movement.",

    brief:
      "To add contemporary artistic interventions to a warm, understated residence while keeping the overall language light and composed.",

    concept:
      "Line, texture and movement shape the collection, allowing abstract forms and traditional references to coexist within a quieter palette.",

    execution:
      "Textured wall art, thread and fabric artworks, dimensional wooden wall pieces, Pichwai-inspired works and bespoke feature panels.",

    challenge:
      "The artwork needed to introduce character without disturbing the residence's understated atmosphere, requiring a restrained palette and carefully scaled interventions.",

   gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",
],
  },

  // ============================================================
  // 09 — SALEM BUNGALOW
  // ============================================================

  {
    title: "SALEM BUNGALOW",
    slug: "salem-bungalow",

    category: "RESIDENCES",
    location: "TAMIL NADU, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Organic Contemporary",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788681129/Salem_vrxfno.png",

    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788421741/WhatsApp_Image_2026-09-03_at_13.03.13_kwhzsp.jpg",

    description:
      "A varied collection of statement pieces where art becomes part of the architecture through layered wood, sculptural forms, ceramic compositions and bespoke lighting.",

    brief:
      "To create a varied collection of statement pieces for the residence, allowing art to move beyond framed works and become part of the architecture itself.",

    concept:
      "Nature and movement run through the project, from flowing contours and waves to organic repetition, translating familiar natural rhythms into material and form.",

    execution:
      "Layered wooden wall installations, sculptural linear wall pieces, textured feature artworks, ceramic disc compositions, large-scale graphic wall art, bespoke chandeliers and patinated metal feature panels.",

    challenge:
      "The project required artworks to function as architectural elements while maintaining a varied and sophisticated visual language across the residence.",

   gallery: [
  // 01 — Main
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",

  // 02 — Composition
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85",

  // 03 — Challenge
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=85",

  // 04 — Large grid
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",

  // 05 — Grid
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",

  // 06 — Grid
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=85",

  // 07 — Grid
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",

  // 08 — Grid
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
],
  },
];