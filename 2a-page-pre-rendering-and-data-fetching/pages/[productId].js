import fs from "fs/promises";
import path from "path";

function ProductDetailPage({ product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const dummyData = JSON.parse(fileData);

  const product = dummyData.products.find((item) => item.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "p1" } },
      { params: { productId: "p2" } },
      { params: { productId: "p3" } },
    ],
    fallback: "blocking",
  };
}

export default ProductDetailPage;
