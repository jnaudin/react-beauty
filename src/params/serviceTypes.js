const serviceTypes = [
  {
    type: "Mains",
    services: [
      { duration: 15, label: "Pose de vernis mains", price: 15 },
      { duration: 30, label: "mani simple", price: 35 },
      { duration: 45, label: "mani complète", price: 45 }
    ]
  },
  {
    type: "Pieds",
    services: [
      { duration: 15, label: "Pose de vernis pieds", price: 15 },
      { duration: 45, label: "Pédi simple", price: 45 },
      { duration: 60, label: "Pédi complète", price: 55 }
    ]
  },
  {
    type: "Forfaits",
    services: [
      { duration: 75, label: "mani-pédi", price: 66 },
      { duration: 90, label: "mani-pédi semi", price: 88 }
    ]
  }
];
export default serviceTypes;
