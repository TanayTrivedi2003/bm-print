//  ----- Card Page ---
export const shapeCards = [
  {
    id: "shape-standard",
    handle: "visiting-card-standard",
    title: "Standard Visiting Cards",
    description: "Clean & professional cards for everyday business use",

    images: [
      {
        id: "shape-img-1",
        src: "/images/cards/shape-1.png",
        alt: "Standard Visiting Cards",
      },
    ],

    variants: [
      {
        id: "shape-standard-v1",
        title: "Standard Shape",
        price: 200,
        compareAtPrice: 300,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Shape", value: "Standard" }],
      },
    ],
  },

  // {
  //   id: "shape-classic",
  //   handle: "visiting-card-classic",
  //   title: "Classic Visiting Cards",
  //   description: "Timeless design with premium paper quality",

  //   images: [
  //     {
  //       id: "shape-img-2",
  //       src: "/images/cards/shape-2.png",
  //       alt: "Classic Visiting Cards",
  //     },
  //   ],

  //   variants: [
  //     {
  //       id: "shape-classic-v1",
  //       title: "Classic Shape",
  //       price: 250,
  //       compareAtPrice: 0,
  //       minQuantity: 100,
  //       availableForSale: true,
  //       quantityAvailable: 999,
  //       selectedOptions: [{ name: "Shape", value: "Classic" }],
  //     },
  //   ],
  // },

  {
    id: "shape-rounded",
    handle: "visiting-card-rounded-corner",
    title: "Rounded Corner Visiting Cards",
    description: "Smooth edges for a modern premium look",

    images: [
      {
        id: "shape-img-3",
        src: "/images/cards/shape-4.png",
        alt: "Rounded Corner Visiting Cards",
      },
    ],

    variants: [
      {
        id: "shape-rounded-v1",
        title: "Rounded Corner",
        price: 300,
        compareAtPrice: 350,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Shape", value: "Rounded Corner" }],
      },
    ],
  },

  {
    id: "shape-square",
    handle: "visiting-card-square",
    title: "Square Visiting Cards",
    description: "Bold square shape to stand out instantly",

    images: [
      {
        id: "shape-img-4",
        src: "/images/cards/shape-3.png",
        alt: "Square Visiting Cards",
      },
    ],

    variants: [
      {
        id: "shape-square-v1",
        title: "Square Shape",
        price: 250,
        compareAtPrice: 350,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Shape", value: "Square" }],
      },
    ],
  },
];

export const paperTextures = [
  {
    id: "paper-glossy",
    handle: "glossy-visiting-cards",
    title: "Glossy Visiting Cards",
    description: "High-shine finish for vibrant colors and sharp text",

    images: [
      {
        id: "paper-img-1",
        src: "/images/cards/paper1.webp",
        alt: "Glossy Visiting Cards",
      },
    ],

    variants: [
      {
        id: "paper-glossy-v1",
        title: "Glossy Finish",
        price: 200,
        compareAtPrice: 300,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Paper Type", value: "Glossy" }],
      },
    ],
  },

  {
    id: "paper-matte",
    handle: "matte-visiting-cards",
    title: "Matte Visiting Cards",
    description: "Smooth, glare-free finish for a premium feel",

    images: [
      {
        id: "paper-img-2",
        src: "/images/cards/paper2.webp",
        alt: "Matte Visiting Cards",
      },
    ],

    variants: [
      {
        id: "paper-matte-v1",
        title: "Matte Finish",
        price: 200,
        compareAtPrice: 300,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Paper Type", value: "Matte" }],
      },
    ],
  },

  {
    id: "paper-spot-uv",
    handle: "spot-uv-visiting-cards",
    title: "Spot UV Visiting Cards",
    description: "Gloss highlights on selected areas for a luxury look",

    images: [
      {
        id: "paper-img-3",
        src: "/images/cards/paper4.webp",
        alt: "Spot UV Visiting Cards",
      },
    ],

    variants: [
      {
        id: "paper-spot-uv-v1",
        title: "Spot UV Finish",
        price: 550,
        compareAtPrice: 600,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Paper Type", value: "Spot UV" }],
      },
    ],
  },

  {
    id: "paper-transparent",
    handle: "transparent-visiting-cards",
    title: "Transparent Visiting Cards",
    description:
      "Modern transparent business cards with a sleek, glass-like premium finish",

    images: [
      {
        id: "paper-img-transparent",
        src: "/images/cards/paper8.webp", // transparent card image
        alt: "Transparent Visiting Cards",
      },
    ],

    variants: [
      {
        id: "paper-transparent-v1",
        title: "Transparent Finish",
        price: 1000,
        compareAtPrice: 1200,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Paper Type", value: "Transparent" }],
      },
    ],
  },

  {
    id: "paper-velvet",
    handle: "velvet-touch-visiting-cards",
    title: "Velvet Touch Visiting Cards",
    description: "Soft-touch matte finish with a luxurious, velvety feel",

    images: [
      {
        id: "paper-img-4",
        src: "/images/cards/paper10.webp",
        alt: "Velvet Touch Visiting Cards",
      },
    ],

    variants: [
      {
        id: "paper-velvet-v1",
        title: "Velvet Touch",
        price: 300,
        compareAtPrice: 400,
        minQuantity: 100,
        availableForSale: true,
        quantityAvailable: 999,
        selectedOptions: [{ name: "Paper Type", value: "Velvet Touch" }],
      },
    ],
  },
];

export const creativeUseCases = [
  {
    name: "Beauty & Spa",
    image: "/images/cards/paper16.jpg",
  },
  {
    name: "Clothing Store",
    image: "/images/cards/paper17.jpg",
  },
  {
    name: "Travel Agency",
    image: "/images/cards/paper18.jpg",
  },
  {
    name: "Food & Restaurant",
    image: "/images/cards/paper19.jpg",
  },
  {
    name: "Real Estate",
    image: "/images/cards/paper20.jpg",
  },
  {
    name: "Education & Coaching",
    image: "/images/cards/paper21.png",
  },
  {
    name: "Gym & Fitness",
    image: "/images/cards/paper22.jpg",
  },
  {
    name: "Healthcare & Clinic",
    image: "/images/cards/paper23.webp",
  },
  {
    name: "E-commerce",
    image: "/images/cards/paper24.webp",
  },
  {
    name: "Hotel & Resort",
    image: "/images/cards/paper25.webp",
  },
  {
    name: "Salon & Barber",
    image: "/images/cards/paper26.jpg",
  },
  {
    name: "Interior Designer",
    image: "/images/cards/paper27.jpg",
  },
  {
    name: "Event Planner",
    image: "/images/cards/paper28.jpg",
  },
  {
    name: "Photographer",
    image: "/images/cards/paper29.webp",
  },
  {
    name: "Portfolio Website",
    image: "/images/cards/paper30.jpg",
  },
  {
    name: "Personal Brand",
    image: "/images/cards/paper31.jpg",
  },
];
