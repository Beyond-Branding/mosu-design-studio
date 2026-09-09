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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964219/goa_a174sa.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788683881/8e_tg6pmp.png",

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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935247/2_mr592n.webp",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964215/uttrakhand_yow720.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935247/9_lijci3.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935250/1_rkxewg.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935251/6_vzql3r.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935245/5_uwy2ns.webp",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935251/8_i2m3oj.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935253/3_o0avre.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935357/4_1_wtwyuw.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788935251/7_xrrtkr.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937468/c2_f40xr4.png",


      
    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964221/andhra_pradesh_by1y56.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937450/c4_kbp4hh.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937448/c5_bh8gum.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937459/c7_zdspwd.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937448/c10_niabdx.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937449/c8_d1zele.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937448/c9_jv0s2e.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937467/c1_jajbug.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937464/c3_gfn4gl.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937861/d6_slrwcd.png",

    mapImage: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964212/west_bengal_iqluhu.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937873/d1_wqcxvp.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937857/d11_vlsthd.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937870/d2_p9dl1s.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937854/d10_mqhl2p.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937862/d7_xz4j8s.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937863/7b_kggjok.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937853/d9_ndm93u.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788937853/10c_hzlcqz.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939060/e1_cgxabw.png",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964221/andhra_pradesh_by1y56.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939050/e14_lwwavq.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939048/e10_nfuk0l.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939050/e9_e5ccyr.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939049/e12_hksy7j.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939047/e13_inqnxh.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939058/e3_c4zc5u.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939057/e2_hcxbh3.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939052/e6_bolxgz.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940046/g19_avfb4d.png",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964216/TAMIL_NADU_kfyeaz.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940056/g7_xpwbef.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940053/g10_tiwioc.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940046/g17_jd2ety.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940052/g11_ynjici.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940056/g5_sqgnjb.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940058/g4_ny9ryg.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940050/g12_kmgmbh.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940056/g14_kcp1l5.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940535/h2_cz8ffb.png",

    mapImage: "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964211/MUMBAI_zjktpr.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940958/h6_1_ymt0hv.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940534/h1_thgagc.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940520/h4_vycxgz.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940519/h3_yo5hmd.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940518/h8_vguvx8.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940959/h5_1_wahfn4.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940959/h7_1_trmeyu.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940959/h9_1_zgr4ae.png",
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
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939537/f7_h0r82u.png",

    mapImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788964216/TAMIL_NADU_kfyeaz.png",

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
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939562/f2_zpazsb.png",

  // 02 — Composition
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939530/f8_zlwpdg.png",

  // 03 — Challenge
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939563/f3_o8smgh.png",

  // 04 — Large grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939529/f6_d5rg0p.png",

  // 05 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939530/f10_yj8f8q.png",

  // 06 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939530/f5_beot1q.png",

  // 07 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939528/f9a_hauoly.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939561/f4_caza7u.png",

  // 08 — Grid
  "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788939564/f1_pceped.png",
],
  },
];