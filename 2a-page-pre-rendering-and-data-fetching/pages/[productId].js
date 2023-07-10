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

async function getDummyData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const dummyData = JSON.parse(fileData);

  return dummyData;
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const dummyData = await getDummyData();

  const product = dummyData.products.find((item) => item.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const dummyData = await getDummyData();
  const paths = dummyData.products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
