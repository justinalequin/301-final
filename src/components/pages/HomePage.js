import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { fetchProducts } from "../../fakeDB";
import ProductDisplay from "../ProductDisplay";

const HomePage = (props) => {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchProducts().then((data) => setProductData(data));
  }, []);

  if (!productData) {
    return null;
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <h2>Ready for a shockingly good time?</h2>
          <hr></hr>
        </div>

        <div>
          {productData.map((product) => (
            <div
              style={{
                backgroundColor: "rgba(250, 250, 250, 0.5)",
                width: "90vw",
                padding: "2px",
                marginBottom: "22px",
                borderRadius: "2px",
              }}
            >
              <ProductDisplay
                product={{
                  id: product.id,
                  title: product.title,
                  brand: product.brand,
                  price: product.price,
                  description: product.description,
                  image: product.image,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
