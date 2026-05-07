const resList = [
  {
    data: {
      id: "1",
      cloudinaryImageId: "un4omn7rcunkmlw6vikr",
      name: "Hotel Empire",
      avgRating: 3.7,
      cuisines: ["North Indian", "Kebabs"],
      costForTwo: 45000,
      deliveryTime: 30,
    },
  },
  {
    data: {
      id: "2",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/50fe77b8-6e45-4d87-8a5d-8c2f0a7fd18f_72560.JPG",
      name: "Meghana Foods",
      avgRating: 3.4,
      cuisines: ["Biryani", "Andhra", "South Indian"],
      costForTwo: 40000,
      deliveryTime: 25,
    },
  },
  {
    data: {
      id: "3",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/7f5c4b35-6a50-4f30-9f2d-7a3fd7c1ccfb_84039.JPG",
      name: "Truffles",
      avgRating: 3.3,
      cuisines: ["Burgers", "Beverages", "American"],
      costForTwo: 35000,
      deliveryTime: 20,
    },
  },
  {
    data: {
      id: "4",
      cloudinaryImageId: "n35l8h2e1x5q4j7k9m0p",
      name: "A2B",
      avgRating: 3.2,
      cuisines: ["South Indian", "Snacks"],
      costForTwo: 25000,
      deliveryTime: 18,
    },
  },
  {
    data: {
      id: "5",
      cloudinaryImageId: "m8k2q7v4r1t9s6p3c5d8",
      name: "Rameshwaram Cafe",
      avgRating: 3.5,
      cuisines: ["South Indian", "Breakfast"],
      costForTwo: 20000,
      deliveryTime: 22,
    },
  },
  {
    data: {
      id: "6",
      cloudinaryImageId: "p1s4d7f9g2h6j8k3l0m5",
      name: "Empire Restaurant",
      avgRating: 3.0,
      cuisines: ["Kebabs", "Chinese"],
      costForTwo: 30000,
      deliveryTime: 28,
    },
  },
  {
    data: {
      id: "7",
      cloudinaryImageId: "q2w3e4r5t6y7u8i9o0p1",
      name: "Barbeque Nation",
      avgRating: 3.3,
      cuisines: ["BBQ", "Grill", "Desserts"],
      costForTwo: 60000,
      deliveryTime: 35,
    },
  },
  {
    data: {
      id: "8",
      cloudinaryImageId: "a1s2d3f4g5h6j7k8l9z0",
      name: "Pizza Hut",
      avgRating: 4.1,
      cuisines: ["Pizzas", "Italian"],
      costForTwo: 28000,
      deliveryTime: 24,
    },
  },
  {
    data: {
      id: "9",
      cloudinaryImageId: "z9x8c7v6b5n4m3q2w1e0",
      name: "KFC",
      avgRating: 3.2,
      cuisines: ["Fast Food", "Fried Chicken"],
      costForTwo: 32000,
      deliveryTime: 26,
    },
  },
  {
    data: {
      id: "10",
      cloudinaryImageId: "h1j2k3l4p5o6i7u8y9t0",
      name: "Burger King",
      avgRating: 3.0,
      cuisines: ["Burgers", "Fast Food"],
      costForTwo: 26000,
      deliveryTime: 21,
    },
  },
  {
    data: {
      id: "11",
      cloudinaryImageId: "b1n2m3v4c5x6z7l8k9j0",
      name: "Wow! Momo",
      avgRating: 3.1,
      cuisines: ["Momos", "Tibetan"],
      costForTwo: 22000,
      deliveryTime: 19,
    },
  },
  {
    data: {
      id: "12",
      cloudinaryImageId: "t1r2e3w4q5a6s7d8f9g0",
      name: "Biryani Blues",
      avgRating: 3.2,
      cuisines: ["Biryani", "North Indian"],
      costForTwo: 38000,
      deliveryTime: 27,
    },
  },
  {
    data: {
      id: "13",
      cloudinaryImageId: "c1v2b3n4m5l6k7j8h9g0",
      name: "Domino's",
      avgRating: 3.0,
      cuisines: ["Pizzas", "Italian", "Desserts"],
      costForTwo: 29000,
      deliveryTime: 23,
    },
  },
  {
    data: {
      id: "14",
      cloudinaryImageId: "r1t2y3u4i5o6p7a8s9d0",
      name: "Haldiram's",
      avgRating: 3.2,
      cuisines: ["Snacks", "Sweets"],
      costForTwo: 24000,
      deliveryTime: 17,
    },
  },
  {
    data: {
      id: "15",
      cloudinaryImageId: "g1h2j3k4l5z6x7c8v9b0",
      name: "Sagar Ratna",
      avgRating: 3.1,
      cuisines: ["South Indian", "Chinese"],
      costForTwo: 27000,
      deliveryTime: 20,
    },
  },
  {
    data: {
      id: "16",
      cloudinaryImageId: "f1d2s3a4q5w6e7r8t9y0",
      name: "The Bowl Company",
      avgRating: 3.3,
      cuisines: ["Healthy Food", "Bowls"],
      costForTwo: 34000,
      deliveryTime: 29,
    },
  },
  {
    data: {
      id: "17",
      cloudinaryImageId: "u1i2o3p4a5s6d7f8g9h0",
      name: "Faasos",
      avgRating: 3.0,
      cuisines: ["Wraps", "Rolls"],
      costForTwo: 23000,
      deliveryTime: 18,
    },
  },
  {
    data: {
      id: "18",
      cloudinaryImageId: "j1k2l3z4x5c6v7b8n9m0",
      name: "Chinese Wok",
      avgRating: 3.1,
      cuisines: ["Chinese", "Asian"],
      costForTwo: 31000,
      deliveryTime: 24,
    },
  },
  {
    data: {
      id: "19",
      cloudinaryImageId: "p0o9i8u7y6t5r4e3w2q1",
      name: "Starbucks",
      avgRating: 4.4,
      cuisines: ["Beverages", "Cafe", "Desserts"],
      costForTwo: 36000,
      deliveryTime: 16,
    },
  },
  {
    data: {
      id: "20",
      cloudinaryImageId: "l9k8j7h6g5f4d3s2a1q0",
      name: "Subway",
      avgRating: 4.1,
      cuisines: ["Sandwiches", "Salads"],
      costForTwo: 25000,
      deliveryTime: 15,
    },
  },
];

export default resList;
