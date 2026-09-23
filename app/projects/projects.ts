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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at12.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735061/t15.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644201/goa.png",

    description:
      "A distinctive artistic identity for a coastal resort in South Goa, inspired by the beaches, landscape and local culture of Palolem.",

    brief:
      "To create a distinctive artistic identity for a coastal resort in South Goa, carrying the character of its beaches, landscape and local culture through the property.",

    concept:
      "The sea became the thread that connects the project,from tides and sunsets to aquatic life, surf culture and fragments of Goa, each interpreted differently rather than repeated.",

    execution:
      "Hand-cut glass mosaic artworks, layered birchwood wall installations, blown-glass fish sculptures, sculptural mirrors, surfboard installations, room signage, large-scale wall art and handmade glass chandeliers.",

    
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735061/t13.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735057/t19.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at1.png",

  // 04 — Large grid image
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at16.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735046/t3.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735049/t1.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735044/t2.jpg",
  
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735045/t4.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735051/t11_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735048/t6.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735062/t17.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735042/t9.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735050/t14.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at12.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734059/at18.png",
],
  },

  // ============================================================
  // 02 — HYATT REGENCY DEHRADUN
  // ============================================================
/*

  {
    title: "HYATT REGENCY ",
    slug: "hyatt-regency-dehradun",

    category: "RESORTS",
    location: "UTTARAKHAND, INDIA",
    status: "COMPLETED",
    type: "RESORT",
    designStyle: "Organic Contemporary",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738649/hy1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738646/hy2.webp",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644200/uttrakhand.png",

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
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738627/hy6.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738634/hy9.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738623/hy5.webp",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738624/hy7.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738633/hy3.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738641/hy8.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738649/hy1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738627/hy6.png",
],
  },

  */

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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738374/my5.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738417/my9.png",


      
    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644204/andhra_pradesh.png",

    description:
      "A contemporary guest house enriched with traditional iconography and Kalamkari, creating a cultural identity that feels rooted yet contemporary.",

    brief:
      "To bring a sense of tradition and cultural familiarity into a contemporary guest house without making the expression feel overly ceremonial.",

    concept:
      "Traditional iconography and Kalamkari became the foundation, reinterpreted through different scales, formats and materials to create a collection that feels rooted yet contemporary.",

    execution:
      "Hand-painted canvas artworks, wall sculptures, hand-painted wooden panels, devotional art compositions, planters and framed canvas works.",

    
    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738391/my7.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738375/my4.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738376/my6.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738419/my10.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738413/my8.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738369/my3.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738289/my1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789738292/my2.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737925/h1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737933/h5.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/west_bengal.png",

    description:
      "A four-storey contemporary residence transformed through colour, art and sculptural interventions, with every space developing its own artistic character.",

    brief:
      "To introduce colour, art and sculptural detail into a four-storey contemporary residence defined by clean architectural finishes.",

    concept:
      "Rather than following one visual language throughout, the residence became a collection of individual artistic moments, each responding to the mood and scale of its setting.",

    execution:
      "Metal and wooden wall installations, mosaic art, textured canvases, bead and sequin artworks, sculptural wall pieces and FRP sculptures with gloss finishes.",

    
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737932/h2.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737927/h3.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737925/h1.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737966/h12.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737939/h7.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737936/h6.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737949/h11.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737943/h9.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736852/g1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736852/g1.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644204/andhra_pradesh.png",

    description:
      "An extensive art collection for a vibrant four-storey residence, allowing individual rooms and passages to develop their own visual identities.",

    brief:
      "To build an extensive art collection for a vibrant four-storey residence, allowing different rooms and passages to develop their own character.",

    concept:
      "The project celebrates variety, moving between figurative, cultural, abstract and nature-led narratives while allowing material and medium to change from space to space.",

    execution:
      "Hand-painted canvases, textured dust-marble artworks, painted wooden panels, alcohol-ink works, gallery walls, layered wooden installations and sculptural feature compositions.",

    
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736987/g9.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736989/g10.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736998/g14.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736956/g3png.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736853/g2.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736960/g6.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736995/g13.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736956/g4.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736084/c0.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736115/c19.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644198/TAMIL_NADU.png",

    description:
      "A Venetian-style mansion defined by scale, ornament and craftsmanship, using reflection and light to create a sense of grandeur.",

    brief:
      "To create bespoke decorative elements for a Venetian-style mansion where scale, ornament and craftsmanship were integral to the architecture.",

    concept:
      "Reflection and light became central to the project, drawing from Venetian craftsmanship to create a sense of grandeur through glass, crystal, carving and intricate detail.",

    execution:
      "Venetian and Murano mirrors, Murano chandeliers, Asfour crystal chandeliers, cascading crystal light installations, metal curtains, carved wooden frames and decorative wall inlays.",

    
    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736095/c7.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736096/c1.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736112/c17.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736086/c3png.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736093/c6.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736097/c9.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736103/c12.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789736112/c15.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735729/b10.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735722/b2.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/MUMBAI.png",

    description:
      "A warm and understated residence enriched with contemporary artistic interventions built around line, texture and movement.",

    brief:
      "To add contemporary artistic interventions to a warm, understated residence while keeping the overall language light and composed.",

    concept:
      "Line, texture and movement shape the collection, allowing abstract forms and traditional references to coexist within a quieter palette.",

    execution:
      "Textured wall art, thread and fabric artworks, dimensional wooden wall pieces, Pichwai-inspired works and bespoke feature panels.",

   
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735740/b6.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735725/b4.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735729/b10.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735723/b3.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735728/b8.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735740/b9.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735736/b5.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789735742/b7.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737668/ss1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737669/ss9.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644198/TAMIL_NADU.png",

    description:
      "A varied collection of statement pieces where art becomes part of the architecture through layered wood, sculptural forms, ceramic compositions and bespoke lighting.",

    brief:
      "To create a varied collection of statement pieces for the residence, allowing art to move beyond framed works and become part of the architecture itself.",

    concept:
      "Nature and movement run through the project, from flowing contours and waves to organic repetition, translating familiar natural rhythms into material and form.",

    execution:
      "Layered wooden wall installations, sculptural linear wall pieces, textured feature artworks, ceramic disc compositions, large-scale graphic wall art, bespoke chandeliers and patinated metal feature panels.",

   
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737669/ss2.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737720/ss10.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737690/ss3.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737709/ss6.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737707/ss5.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737692/ss4.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737717/ss8.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737668/ss1.png",

  
],
  },
];