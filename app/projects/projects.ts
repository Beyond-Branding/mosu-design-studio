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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789711336/8.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643535/12_1_1.png",

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

    challenge:
      "Creating a cohesive artistic identity while allowing each artwork to respond to the coastal character of South Goa required a varied approach to materials, scale and visual language.",

   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643541/18_1.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643284/9.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789642071/5_7.png",

  // 04 — Large grid image
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643277/13.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643461/LOBBY_1_7_1.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643490/room.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643599/Taj_Gateway_Goa_Thumbnail_1.png",
  
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643293/ChatGPT_Image_Jul_11_2026_12_10_03_PM_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643499/28.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643501/50.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643495/LOBBY_1_11_2.jpg",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643494/46.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643490/10.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789642317/2a.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643486/39_3.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643618/Hyatt_Regency.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645158/2.webp",

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
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645089/9.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643618/Hyatt_Regency.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645118/6.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645120/5.webp",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645091/8.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645156/3.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645442/4_1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645090/7.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643595/my_home_tirumala_1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643160/11.png",


      
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

    challenge:
      "The challenge was to preserve the cultural character of the project while ensuring the artworks remained appropriate for a contemporary hospitality environment.",

    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643151/17.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645833/5.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645843/7.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645870/10.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645868/9.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645866/8.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645804/1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789645805/3.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643615/76_Hazra_2.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643163/21.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/west_bengal.png",

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
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643615/76_Hazra_2.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646386/11.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646253/2.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646379/10a.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646370/7a.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646373/7b.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646376/9.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789646383/10c.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643612/Guntur_Project.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643612/Guntur_Project.png",

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

    challenge:
      "The challenge was to manage a broad collection of artistic styles and materials while maintaining a strong sense of continuity throughout the residence.",

   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789642311/32.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656148/10.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656149/9.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656147/12.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789642981/1_2.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656161/3.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656162/2.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656151/6.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643575/coimbatore.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643192/59.png",

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

    challenge:
      "Working with elaborate decorative elements required careful coordination of scale, craftsmanship, light and architectural detailing.",

    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656762/7.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656741/10.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656730/17.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656739/11.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656750/5.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656752/4.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656737/12.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789656735/13.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643601/Biyani.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657415/2.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/MUMBAI.png",

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
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657372/6_1.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657193/1.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657187/4.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657189/3.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657183/8.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657377/9_3.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657374/7_1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657369/5_1.png",
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789643600/Salem.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657756/7.png",

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

    challenge:
      "The project required artworks to function as architectural elements while maintaining a varied and sophisticated visual language across the residence.",

   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657733/2.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657751/8.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657739/3.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657745/6.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657758/10.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657743/5.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657752/9_option_2.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789657739/4.png",

  
],
  },
];