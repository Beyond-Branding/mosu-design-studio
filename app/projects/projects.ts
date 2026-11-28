export interface Project {
  title: string;
  slug: string;

  category: "RESIDENCIES" | "HOSPITALITY" | "INSTITUTIONS";
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
  isCombined?: boolean;

  subProjects?: {
  name: string;
  description: string;
}[];
  

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

    category: "HOSPITALITY",
    location: "GOA, INDIA",
    status: "COMPLETED",
    type: "INSTITUTIONS",
    designStyle: "Coastal Contemporary",
    

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864071/tg3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790360851/12_3.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644201/goa.png",

    description:
      "To create a distinctive artistic identity for a coastal resort in South Goa, carrying the character of its beaches, landscape and local culture through the property.",

    brief:
      "To create a distinctive artistic identity for a coastal resort in South Goa, carrying the character of its beaches, landscape and local culture through the property.",

    concept:
      "The sea became the thread that connects the project, moving from tides and sunsets to aquatic life, surf culture and fragments of Goa, each interpreted differently rather than repeated.",

    execution:
      "Hand-cut glass mosaic artworks, layered birchwood wall installations, blown-glass fish sculptures, sculptural mirrors, surfboard installations, room signage, large-scale wall art and handmade glass chandeliers.",

    
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863682/tg13.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864077/tg5.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863595/tg1.png",

  // 04 — Large grid image
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864088/tg2.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864071/tg3.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863724/tg4.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863726/tg6.jpg",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863597/tg6ii.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863728/tg7.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863599/tg8.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863585/tg9.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863678/tg10.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795866478/tg11.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864101/tg14.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864105/tg15.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864092/tg16.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864106/tg17.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864097/tg18.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863682/tg19.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863684/tg20.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863731/tg21.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863687/tg22.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863586/tg23.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863689/tg24.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863691/tg25.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863694/tg26.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863695/tg27.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863698/tg28.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863700/tg29.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863702/tg30.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863733/tg31.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863705/tg32.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864084/tg33.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863708/tg34.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863709/tg35.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863588/tg36.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863735/tg37.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795865027/tg38_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863713/tg39.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863716/tg40.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863718/tg41.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863738/tg42.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863720/tg43.png",
   "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795865085/tg44_1.png",
   "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863592/tg45.png",
   "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863722/tg46.png",
   "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863739/tg48.png",



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

    category: "HOSPITALITY",
    location: "ANDHRA PRADESH, INDIA",
    status: "COMPLETED",
    type: "HOSPITALITY",
    designStyle: "Traditional Contemporary",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805662/ti1_1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805580/ti3.png",


      
    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644204/andhra_pradesh.png",

    description:
      "To bring a sense of tradition and cultural familiarity into a contemporary guest house without making the expression feel overly ceremonial",

    brief:
      "To bring a sense of tradition and cultural familiarity into a contemporary guest house without making the expression feel overly ceremonial.",

    concept:
      "Traditional iconography and Kalamkari became the foundation, reinterpreted through different scales, formats and materials to create a collection that feels rooted yet contemporary.",

    execution:
      "Hand-painted canvas artworks, wall sculptures, hand-painted wooden panels, devotional art compositions, planters and framed canvas works.",

    
    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805573/ti8.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805578/ti5.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805573/ti9.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805579/ti4.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805582/ti2.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805576/ti6.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805574/ti7.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857187/ti10_1.png",


  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857081/ti1_1_1.png",
],
  },

  
  // ============================================================
  // 05 — 76 HAZRA
  // ============================================================

  {
    title: "76 HAZRA",
    slug: "76-hazra",

    category: "RESIDENCIES",
    location: "KOLKATA, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Contemporary Eclectic",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802648/hz7.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802645/hz12.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/west_bengal.png",

    description:
      "To introduce colour, art and sculptural detail into a four-storey contemporary residence defined by clean architectural finishes.",

    brief:
      "To introduce colour, art and sculptural detail into a four-storey contemporary residence defined by clean architectural finishes.",

    concept:
      "Rather than following one visual language throughout, the residence became a collection of individual artistic moments, each responding to the mood and scale of its setting.",

    execution:
      "Metal and wooden wall installations, mosaic art, textured canvases, bead and sequin artworks, sculptural wall pieces and FRP sculptures with gloss finishes",

    
   gallery: [

  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737932/h2.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802649/hz6.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802648/hz7.png",

  // 04 — Large grid
 

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802648/hz9.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802645/hz12.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802646/hz8.png",

  // 07 — Grid
  

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802648/hz3.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802649/hz2.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802649/hz11.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802652/hz4.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802646/hz10.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802645/hz13.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857317/hz14_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857316/hz15_1.png",
   "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857314/hz16_1.png",


],
  },

  // ============================================================
  // 06 — GUNTUR PROJECT
  // ============================================================

  {
    title: "GUNTUR PROJECT",
    slug: "guntur-project",

    category: "RESIDENCIES",
    location: "ANDHRA PRADESH, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Eclectic Contemporary",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804735/gn1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804735/gn1.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644204/andhra_pradesh.png",

    description:
      "To build an extensive art collection for a vibrant four-storey residence, allowing different rooms and passages to develop their own character.",

    brief:
      "To build an extensive art collection for a vibrant four-storey residence, allowing different rooms and passages to develop their own character.",

    concept:
      "The project celebrates variety, moving between figurative, cultural, abstract and nature-led narratives while allowing material and medium to change from space to space.",

    execution:
      "Hand-painted canvases, textured dust-marble artworks, painted wooden panels, alcohol-ink works, gallery walls, layered wooden installations and sculptural feature compositions.",

    
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804739/gn6.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804736/gn2.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804733/gn10.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795856063/gn9_1.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804741/gn8.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804733/gn13.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804730/gn4.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795855992/gn12_1.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804731/gn5.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804743/gn11.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804740/gn7.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795856112/gn15_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804738/gn3.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804734/gn14.png",

  
],
  },

  // ============================================================
  // 07 — COIMBATORE MANSION
  // ============================================================

  {
    title: "COIMBATORE MANSION",
    slug: "coimbatore-mansion",

    category: "RESIDENCIES",
    location: "TAMIL NADU, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Venetian Luxury",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803643/cb30.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803664/cb6.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644198/TAMIL_NADU.png",

    description:
      "To create bespoke decorative elements for a Venetian-style mansion where scale, ornament and craftsmanship were integral to the architecture.",

    brief:
      "To create bespoke decorative elements for a Venetian-style mansion where scale, ornament and craftsmanship were integral to the architecture.",

    concept:
      "Reflection and light became central to the project, drawing from Venetian craftsmanship to create a sense of grandeur through glass, crystal, carving and intricate detail.",

    execution:
      "Venetian and Murano mirrors, Murano chandeliers, Asfour crystal chandeliers, cascading crystal light installations, metal curtains, carved wooden frames and decorative wall inlays.",

    
    gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803660/cb9.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803620/cb1.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803651/cb18.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857868/cb2_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857959/cb8_ii_1_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803667/cb3.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803664/cb5.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803666/cb7.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803659/cb10.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803657/cb11.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857443/cb12_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857530/cb13_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803655/cb14.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790433763/cb13.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803655/cb15.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803654/cb17.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857595/cb16_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803651/cb18.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803651/cb19.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803649/cb20.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857664/cb21_1.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803648/cb22.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803647/cb24.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803647/cb23.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803646/cb25.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803644/cb26.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803644/cb29.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803643/cb27.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803643/cb30.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803641/cb31.png",
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803640/cb32.png",


],
  },

  // ============================================================
  // 08 — BIYANI'S RESIDENCE
  // ============================================================

  {
    title: "BIYANI'S RESIDENCE",
    slug: "biyanies-residence",

    category: "RESIDENCIES",
    location: "MUMBAI, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Contemporary Art",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803270/bi8_1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803160/bi2.png",

    mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644194/MUMBAI.png",

    description:
      "To add contemporary artistic interventions to a warm, understated residence while keeping the overall language light and composed.",

    brief:
      "To add contemporary artistic interventions to a warm, understated residence while keeping the overall language light and composed.",

    concept:
      "Line, texture and movement shape the collection, allowing abstract forms and traditional references to coexist within a quieter palette.",

    execution:
      "extured wall art, thread and fabric artworks, dimensional wooden wall pieces, Pichwai-inspired works and bespoke feature panels.",

   
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803160/bi3.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803269/bi4_1.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803270/bi8_1.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803160/bi2i.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803160/bi7.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803269/bi5_1.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803158/bi1.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803272/bi6_1.png",
],
  },

  // ============================================================
  // 09 — SALEM BUNGALOW
  // ============================================================

  {
    title: "SALEM BUNGALOW",
    slug: "salem-bungalow",

    category: "RESIDENCIES",
    location: "TAMIL NADU, INDIA",
    status: "COMPLETED",
    type: "RESIDENCE",
    designStyle: "Organic Contemporary",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805071/sa9.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737669/ss9.png",

    mapImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789644198/TAMIL_NADU.png",

    description:
      "To create a varied collection of statement pieces for the residence, allowing art to move beyond framed works and become part of the architecture itself.",

    brief:
      "To create a varied collection of statement pieces for the residence, allowing art to move beyond framed works and become part of the architecture itself.",

    concept:
      "Nature and movement run through the project, from flowing contours and waves to organic repetition, translating familiar natural rhythms into material and form.",

    execution:
      "Layered wooden wall installations, sculptural linear wall pieces, textured feature artworks, ceramic disc compositions, large-scale graphic wall art, bespoke chandeliers and patinated metal feature panels.",

   
   gallery: [
  // 01 — Main
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805075/sa4.png",

  // 02 — Composition
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737720/ss10.png",

  // 03 — Challenge
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737690/ss3.png",

  // 04 — Large grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805077/sa8.png",

  // 05 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805077/sa2.png",

  // 06 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805071/sa7.png",

  // 07 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789737717/ss8.png",

  // 08 — Grid
  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795858108/sa6_1.png",

  "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805071/sa9.png",

  
],
  },

  // ============================================================
// HYDERABAD PROJECT
// ============================================================

{
  title: "HYDERABAD ROCKDALE",
  slug: "hyderabad-residence",

  category: "RESIDENCIES",
  location: "HYDERABAD, INDIA",
  status: "COMPLETED",
  type: "RESIDENCE",
  designStyle: "Traditional Contemporary",

  image: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218380/hr3.png",

  heroImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr4.png",

  mapImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794227948/telengana.png",

  description:
    "To create bespoke wall artworks, partitions and furniture pieces that bring cultural references into a contemporary residential setting.",

  brief:
    "To create bespoke wall artworks, partitions and furniture pieces that bring cultural references into a contemporary residential setting.",

  concept:
    "Traditional imagery and symbolic forms were translated through hand-painted surfaces, shaped wooden elements and refined metalwork, allowing art and function to exist within the same visual language.",

  execution:
    "Hand-painted canvas artworks, hand-painted wooden cutout art, metal-finished wire and bar features, a metal-and-frosted-glass partition, and a custom teakwood table.",

  gallery: [
    // 01 — Main
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr5.png",

    // 02 — Composition
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr2.png",

    // 03 — Challenge
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr6.png",

    // 04 — Large grid
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr4.png",

    // 05 — Grid
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr1.png",

    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218380/hr3.png",

    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr6.png",

    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr2.png",

    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794218379/hr5.png",


    
  ],
},

{
  title: "TRISHVAM – TGI GOA & BANGALORE PUB",
  slug: "trishvam-tgi-goa-bangalore-pub",

  category: "HOSPITALITY",
  location: "GOA & BANGALORE, INDIA",
  status: "COMPLETED",
  type: "HOSPITALITY",
  designStyle: "Contemporary",
  isCombined: true,

  image: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953772/tris4.png",
  heroImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953775/pub1.png",

  concept:
  "Bespoke artworks give each hospitality space a visual identity rooted in its atmosphere. Coastal surfboard art defines the Goa property, while illuminated metalwork shapes the pub’s character.",

  subProjects: [
  {
    name: "Trishvam TGI Goa",
    description:
      "Hand-painted surfboard artworks created to carry Goa’s relaxed coastal character into the guest rooms.",
  },
  {
    name: "Bangalore Pub",
    description:
      "Illuminated ceiling artwork and decorative metal details designed to complement the pub’s energetic atmosphere.",
  },
],
  gallery: [
    // TRISHVAM TGI GOA
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953774/pub2.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953774/tris1.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953773/tris2.png",

    // BANGALORE PUB
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953772/tris3.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953772/tris4.png",
    
  ],
},

{
  title: "NAGPUR & KOLKATA RESIDENCES",
  slug: "nagpur-kolkata-residences",

  category: "RESIDENCIES",
  location: "NAGPUR & KOLKATA, INDIA",
  status: "COMPLETED",
  type: "RESIDENCE",
  designStyle: "Contemporary",
  isCombined: true,

  image: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795854620/kol1ii.png",
  heroImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794231484/WhatsApp_Image_2026-11-09_at_19.07.43.jpg",

  concept:
  "Bespoke metalwork and sculptural wall features become an integral part of the two residences. Refined finishes, textured surfaces and lighting give each interior its own distinct expression.",

 subProjects: [
  {
    name: "Nagpur Residence",
    description:
      "Custom metal-and-glass doors, partitions and furniture details crafted to complement the refined interior.",
  },
  {
    name: "Kolkata Residence",
    description:
      "Illuminated wall features and textured metal surfaces created as bold architectural accents.",
  },
],
  gallery: [
    // NAGPUR RESIDENCE
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953039/Nagpur_1.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953039/kolkata_2.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953038/Nagpur_2.png",

    // KOLKATA RESIDENCE
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953018/Nagpur_3.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953039/kolkata_1.png",
   
  ],
},

{
  title: "ASPEE MONUMENT & SANKAR EYE HOSPITAL",
  slug: "aspee-monument-sankar-eye-hospital",

  category: "INSTITUTIONS",
  location: "MUMBAI,VARANASI",
  status: "COMPLETED",
  type: "INSTITUTIONS",
  designStyle: "Contemporary",
  isCombined: true,

  image: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953932/san2.png",
  heroImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953933/Aspee_Monument.png",

  concept:
  "Large-scale artworks bring cultural narratives and symbolic forms into public spaces. Each piece is created to complement its architectural setting while carrying a distinct cultural expression.",
  subProjects: [
  {
    name: "ASPEE Monument",
    description:
      "A large-scale commemorative structure shaped through sculptural form, material and symbolic detailing.",
  },
  {
    name: "Sankar Eye Hospital",
    description:
      "Cultural artworks, murals and architectural art features created across the hospital’s interior and exterior spaces.",
  },
],
  gallery: [
    // ASPEE MONUMENT
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953933/san1.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953932/san2.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793953925/san3.png",

    
  ],
},

{
  title: "HYDERABAD NCC HARSHA & LUMBINI ELYSEE",
  slug: "hyderabad-ncc-harsha-lumbini-elysee",
  category: "RESIDENCIES",
  location: "HYDERABAD, INDIA",
  status: "COMPLETED",
  type: "RESIDENCE",
  designStyle: "Traditional Contemporary",
  isCombined: true,

  image: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722920/f5.png",
  heroImage: "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793956403/ncc1.png",

  concept: 
  "Sculptural furniture, crafted metal finishes and suspended forms shape these contemporary residences. Each piece responds to its setting through material, scale and light.",
  subProjects: [
  {
    name: "Hyderabad NCC Harsha",
    description:
      "Sculptural furniture, metal finishes and a suspended wooden ceiling feature shaped for a contemporary residence.",
  },
  {
    name: "Lumbini Elysee",
    description:
      "Cascading bespoke chandeliers designed as luminous focal points within double-height interiors.",
  },
],
  gallery: [
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793956404/ncc2.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794229174/light_2.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793956403/ncc1.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793956403/ncc3.png",
    "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794229175/light_1.jpg",
    
  ],
},
];