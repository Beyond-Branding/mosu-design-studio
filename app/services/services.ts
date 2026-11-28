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
  heading: string;
  description: string;
  gallery: string[];
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    title: "Art Installations",
    slug: "art-installations",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863716/tg40.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734060/at9.png",

    subtitle: "Art that transforms spaces.",

    heading: "Made to hold attention.",

    description:
      "Bespoke installations created to become a defining presence within the space .",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734408/at30.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803646/cb25.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863720/tg43.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795864084/tg33.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228138/at22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734062/at37.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805071/sa9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734061/at35.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734061/at21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802649/hz6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863713/tg39.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863689/tg24.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795865085/tg44_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863724/tg4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863588/tg36.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734056/at1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863739/tg48.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734054/at36.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805077/sa2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734053/at39.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734053/at41.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795865027/tg38_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804730/gn4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734035/at10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863705/tg32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795802649/hz11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863684/tg20.png",
     
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795804733/gn10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863702/tg30.png",
      
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228114/at44.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734025/at32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805075/sa4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863716/tg40.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734023/carousel-2_05.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734022/at8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789734021/at28.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795805073/sa6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795863708/tg34.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165230/atn4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165207/atn1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790165163/atn2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790177513/ant3_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790177521/atn5_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793383416/at53.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793383428/at55.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793383416/at54.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793383414/at52.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793383413/at51.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228129/at38.png",

     
      
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739259/wa3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228731/wa1.png",

    subtitle: "Walls with a story.",

    heading: "Made to leave an impression.",

    description:
      "Custom wall pieces shaped through texture, material and detail to feel naturally part of the space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739296/wa36.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739293/wa34.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739283/wa23.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739280/wa22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739276/wa13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739268/wa10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739265/wa9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739262/wa4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739259/wa3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739256/wa40.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739254/wa39.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739249/wa37.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790260164/Screenshot_2026-09-24_195819.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739243/wa32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739240/wa31.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739236/wa30.webp",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739230/wa29.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739223/wa28.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739222/wa25.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739216/wa24.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739213/wa20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739210/wa19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739207/wa18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739204/wa17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739201/wa15.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739197/wa14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739192/wa11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739186/wa8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739184/wa7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739181/wa6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739178/wa2_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228731/wa1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739171/wa38.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228790/wa27_1_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228776/wa26_1_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739154/wa21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789739153/wa16.png",
      
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228974/s26.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794233006/s28_1.png",

    subtitle: "Form meets expression.",
  
    heading: "Creating work with intention. ",

    description:
      "Culptural pieces created to become powerful focal points within a space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s21.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723345/s20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723344/s18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723340/s17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723339/s16.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723338/s15.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789723336/s14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228974/s26.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261039/s1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261025/s4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261024/s2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794233006/s28_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261130/s9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261121/s8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228976/s25_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228980/s24.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228981/s22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794228973/s27.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794461907/sp5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794461906/sp23.png",

      
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
    title: "Lighting & Chandeliers",
    slug: "lighting",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l14.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l13.png",

    subtitle: "Light as an experience.",

    heading: "Light with a point of view.",

    description:
      "Bespoke chandeliers and luminaires created to bring together light, form and craft.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719913/l18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719911/l17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719908/l19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719907/l14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794229175/light_1.jpg",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794229174/light_2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803648/cb22.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857868/cb2_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803644/cb26.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803640/cb32.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803641/cb31.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803643/cb30.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178319/ln1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803643/cb27.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789719897/l4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857901/cb8_ii_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803644/cb29.png",
      


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
    title: "Mirrors",
    slug: "mirrors-chandeliers",

    image:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790261310/m3.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803620/cb1.png",

    subtitle: "Reflective statements.",

    heading: "More than reflection. ",

    description:
      "Bespoke mirrors designed as visual pieces in their own right, through form, proportion and detail.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857664/cb21_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857595/cb16_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857530/cb13_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795857443/cb12_1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803659/cb10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803657/cb11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803657/cb12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803656/cb13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803655/cb14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803655/cb15.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803654/cb17.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803653/cb16.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803651/cb18.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803651/cb19.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803649/cb20.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1795803649/cb21.png",
      
      
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722313/d10.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d1.png",

    subtitle: "Architecture in detail.",

    heading: "Designed beyond function. ",

    description:
      "Custom doors and partitions created to define transitions while becoming part of the visual language of the space.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722313/d10.png",
     
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722311/d7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722311/d8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722308/d6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722305/d3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722305/d5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722304/d4.png",
      
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178398/dn2.png",
     
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1790178399/dn4.png",
      
      
      
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt8.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721059/mt6.png",

    subtitle: "Material with character.",

    heading: "Finish makes the difference.",

    description:
      "Custom metal treatments developed through tone, texture and technique to give each surface a distinct expression.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721085/mt14.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt8.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721072/mt2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721070/mt4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721066/mt13.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721065/mt12.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721064/mt11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721063/mt1.jpg",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721062/mt10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721059/mt7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793379508/mt6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789721057/mt3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793379509/mt9.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1794462081/mtf5.png",
      
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
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722914/f1.png",

    heroImage:
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722920/f5.png",

    subtitle: "Form, function and character.",

    heading: "Made to belong.",

    description:
      "Bespoke furniture created around proportion, material and use, with every detail considered from the start.",

    gallery: [
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793379720/f10.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f3.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f7.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722921/f6.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722920/f5.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722919/f4.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722916/f2.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1789722914/f1.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793379721/f11.png",
      "https://res.cloudinary.com/i1hfhoaw/image/upload/v1793379722/f12.png",
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