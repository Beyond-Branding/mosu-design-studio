export interface ServiceProcess {
  title: string;
  text: string;
}

export interface Service {
  title: string;
  slug: string;
  image: string;
  heroImage: string;
  subtitle: string;
  description: string;
  gallery: string[];
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    title: "Art Installations",
    slug: "art-installations",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952092/15_rjzr1f.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952095/9_1_xqknm9.png",

    subtitle: "Art that transforms spaces.",

    description:
      "We create distinctive art installations that bring character, emotion and identity to interiors.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952069/27_jkm9hb.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952071/8_shuwmo.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952072/14_utkwhs.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952075/34_am5c9i.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952075/32_x97qrk.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952089/2e_dnzghl.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952091/5_pzi6zf.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952094/20_cz2yfu.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952083/3_a1olug.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952082/31_pu0wnd.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952095/35_hufqyx.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952076/30_a3jyao.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952071/8_shuwmo.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952078/7_h7qhdt.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952090/6_howcv7.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952085/16_azsxkm.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952076/37_ldg15m.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952095/24_kczsld.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952092/13_fchnbn.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952091/11_uozvpx.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the space and developing a strong visual concept.",
      },
      {
        title: "Design",
        text: "Creating artwork that complements the architecture and interior.",
      },
      {
        title: "Execution",
        text: "Producing and installing the final artwork with precision.",
      },
    ],
  },

  {
    title: "Wall Arts",
    slug: "wall-arts",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953882/4_ri30fm.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953895/59_qrewig.png",

    subtitle: "Walls with a story.",

    description:
      "Statement wall art designed to add depth, personality and visual interest to spaces.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953893/56_w7btew.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953888/18_ygdj9r.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953885/12_jx1hpv.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953879/193_upo4ob.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953877/62_mwt8fs.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953869/24_dqunoe.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953867/21_uszy2o.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953872/52_g4aimv.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953876/57_dzqllm.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953882/4_ri30fm.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953890/22_acvv3p.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953896/61_ianh5f.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953891/48_jp5njx.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953883/5_ccxwex.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953878/63_mba6py.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953874/53_szr0k5.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953864/19_x8fk11.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953861/60_wo5x5b.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the mood and character of the space.",
      },
      {
        title: "Design",
        text: "Developing artwork suited to the interior.",
      },
      {
        title: "Installation",
        text: "Carefully installing the artwork in its final location.",
      },
    ],
  },

  {
    title: "Sculptures",
    slug: "sculptures",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952540/4_nhli7q.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952538/10_isqyop.png",

    subtitle: "Form meets expression.",

    description:
      "Sculptural pieces created to become powerful focal points within a space.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952546/9_kehqly.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952537/12_rawpcc.webp",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952537/6_jsviba.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952536/2_moreyx.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952538/8_qlaf2h.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952539/11_bjw3h8.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952541/7_oqo5vo.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952540/4_nhli7q.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952536/1_eevopr.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952536/5_pfkgek.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788952540/3_dedj7o.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Developing the artistic direction and form.",
      },
      {
        title: "Craft",
        text: "Creating the sculpture with carefully selected materials.",
      },
      {
        title: "Placement",
        text: "Positioning the sculpture to work naturally within the space.",
      },
    ],
  },

  {
    title: "Lighting",
    slug: "lighting",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953480/14_ej69hd.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953480/15_fdao2k.png",

    subtitle: "Light as an experience.",

    description:
      "Unique lighting pieces that combine function, atmosphere and artistic expression.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953484/e2_gsucrg.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953483/18_ksmtz1.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953482/17_nkc3jc.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953480/14_ej69hd.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953477/11_jskc4e.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953477/8_v2ugre.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953476/6_vhva8h.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953473/10_scvmlo.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953475/5_obcjgh.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788953471/4_oyzgfq.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the lighting requirements of the space.",
      },
      {
        title: "Design",
        text: "Developing a lighting piece that balances form and function.",
      },
      {
        title: "Installation",
        text: "Installing and positioning the final lighting element.",
      },
    ],
  },

  {
    title: "Mirrors & Chandeliers",
    slug: "mirrors-chandeliers",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788940050/g12_kmgmbh.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788682220/coimbatore_Mansion_1_gt0y0l.png",

    subtitle: "Reflective statements.",

    description:
      "Mirrors and chandeliers designed to create elegance, scale and visual drama.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954644/e13_dpare1.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954638/e10_yevqfm.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954635/6_waekgj.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954628/3_u8no31.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954633/5_riady7.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954639/e11_ypdwha.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954646/e14_aktgv3.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954641/e12_fgvv3i.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954633/4_zkeuqp.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the architectural character of the space.",
      },
      {
        title: "Design",
        text: "Selecting or developing pieces that complement the interior.",
      },
      {
        title: "Installation",
        text: "Precisely installing the final piece.",
      },
    ],
  },

  {
    title: "Doors & Partitions",
    slug: "doors-partitions",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956453/5_prdj7v.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956453/1_fwj2el.png",

    subtitle: "Architecture in detail.",

    description:
      "Custom doors and partitions that combine craftsmanship, material and architectural character.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956455/6_mxaras.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956452/2_e1fned.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956452/4_ff5kee.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956452/3_s7cbbk.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788956453/5_prdj7v.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the architectural requirements.",
      },
      {
        title: "Design",
        text: "Developing a functional and visually distinctive solution.",
      },
      {
        title: "Execution",
        text: "Fabricating and installing the final piece.",
      },
    ],
  },

  {
    title: "Metal Finishes",
    slug: "metal-finishes",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954826/1_2_crcy61.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954833/8_krhjyx.png",

    subtitle: "Material with character.",

    description:
      "Specialized metal finishes that bring texture, depth and personality to interiors.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954835/9_coc3b4.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954833/8_krhjyx.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954830/6_nyuqu8.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954829/1_nhg6zd.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954832/7_s2afvw.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788954838/11_ujpd39.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the desired material character.",
      },
      {
        title: "Finish",
        text: "Developing the appropriate surface treatment.",
      },
      {
        title: "Application",
        text: "Applying the finish with consistency and precision.",
      },
    ],
  },

  {
    title: "Furniture",
    slug: "furniture",

    image:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/7_ezndir.png",

    heroImage:
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/5_hydj50.png",

    subtitle: "Form, function and character.",

    description:
      "Distinctive furniture pieces designed to bring comfort, functionality and character to every space.",

    gallery: [
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/5_hydj50.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958512/3_ybzysz.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/7_ezndir.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/6_aalmou.png",
      "https://res.cloudinary.com/dcaiszxcb/image/upload/v1788958509/4_iatiho.png",
    ],

    process: [
      {
        title: "Concept",
        text: "Understanding the space, purpose and visual character of the furniture.",
      },
      {
        title: "Design",
        text: "Developing unique forms, proportions and material combinations.",
      },
      {
        title: "Craft",
        text: "Creating each piece with attention to detail, material and finish.",
      },
    ],
  },
];