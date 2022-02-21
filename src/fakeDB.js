const fakeProductData = [
  {
    id: "001",
    title: "Model X",
    brand: "Tesla",
    price: 19300,
    description: "Electric SUV with impressive capabilities.",
    image:
      "https://www.tesla.com/ownersmanual/images/GUID-999EC68D-FD44-4237-8AB8-AB97A724F3B0-online-en-US.png",
  },
  {
    id: "002",
    title: "Model S",
    brand: "Tesla",
    price: 17500,
    description: "Electric Sedan with impressive capabilites.",
    image: "https://www.peterfisk.com/wp-content/uploads/2018/12/tesla.jpg",
  },
  {
    id: "003",
    title: "Taycan Turbo",
    brand: "Porsche",
    price: 27500,
    description: "Electric Super Car with impressive capabilities.",
    image:
      "https://360view.hum3d.com/zoom/Porsche/Porsche_Taycan_Turbo_S_2020_1000_0001.jpg",
  },
  {
    id: "004",
    title: "Cyber Quad",
    brand: "Tesla",
    price: 7000,
    description: "Electric Quad with impressive capabilities.",
    image:
      "https://www.radioflyer.com/media/wysiwyg/tesla/cyber/feature-high-performance.png",
  },
];

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("Pretending to make things happen (=");
    setTimeout(() => {
      try {
        resolve(fakeProductData);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
