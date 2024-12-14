export interface Products {
  id: number;
  imageSrc: string;
  name: string;
  featured?: boolean;
  description?: string;
  category_id?: number;
  Colors?: string[];
  Brand?: string;
  Features?: {
    bg: string;
    icon: string;
    description: string;
  }[];
}

export interface Categories {
  id: number;
  name: string;
}

export const productData: Products[] = [
  {
    id: 1,
    imageSrc: "/images/trending-baby-1.png",
    name: "Smart Formula Milk Maker O5",
    featured: true,
    category_id: 1,
    Colors: ["White", "Gray"],
    Brand: "Trending Baby",
    Features: [
      {
        bg: "#FF8189",
        icon: "/images/smart-formula-1.png",
        description: "Safety Design & Fast Done",
      },
      {
        bg: "",
        icon: "/images/smart-formula-2.png",
        description: "Automatic & Intelligent",
      },
      {
        bg: "",
        icon: "/images/smart-formula-3.png",
        description: "Healthy & Durable",
      },
      {
        bg: "",
        icon: "/images/smart-formula-4.png",
        description: "Customized Design",
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  },
  {
    id: 2,
    imageSrc: "/images/trending-baby-2.png",
    name: "Wavy Video Baby Monitor",
    featured: true,
    category_id: 1,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    Colors: ["Black", "White"],
    Features: [
      {
        bg: "#FF8189",
        icon: "/images/wavy-1.png",
        description: "360 View",
      },
      {
        bg: "",
        icon: "/images/wavy-2.png",
        description: "Temprature Monitoring",
      },
      {
        bg: "",
        icon: "/images/wavy-3.png",
        description: "Two Way-Communication",
      },
      {
        bg: "",
        icon: "/images/wavy-4.png",
        description: "2x Close Up zoom",
      },
    ],
    Brand: "Trending Baby",
  },
  {
    id: 3,
    imageSrc: "/images/trending-baby-3.png",
    name: "Mono Full HD Video Baby Monitor",
    featured: true,
    category_id: 1,
    description: "Mono Full HD Video Baby Monitor",
    Colors: ["Black", "White"],
    Features: [
      {
        bg: "#FF8189",
        icon: "/images/mona-1.png",
        description: "Wi-Fi Connection",
      },
      {
        bg: "",
        icon: "/images/mona-2.png",
        description: "Lullabies",
      },
      {
        bg: "",
        icon: "/images/mona-3.png",
        description: "Infraded Night vision",
      },
      {
        bg: "",
        icon: "/images/mona-4.png",
        description: "1080 HD 5.0 Display",
      },
    ],
    Brand: "Trending Baby",
  },
  {
    id: 4,
    imageSrc: "/images/Baby Strollers.png",
    name: "Baby Strollers",
    featured: true,
    category_id: 2,
    description: "Baby Strollers",
    Brand: "Trending Baby",
  },
  {
    id: 5,
    imageSrc: "/images/trending-baby-4.png",
    name: "Furniture",
    featured: true,
    category_id: 2,
    description: "Furniture",
    Brand: "Trending Baby",
  },
  {
    id: 6,
    imageSrc: "/images/15.png",
    name: "Baby Carrycot",
    featured: true,
    category_id: 3,
    description: "Baby Carrycot",
    Brand: "Trending Baby",
  },
];

export const categoriesData: Categories[] = [
  {
    id: 1,
    name: "Devices",
  },
  {
    id: 2,
    name: "Furniture",
  },
  {
    id: 3,
    name: "Car Seats",
  },
];
