import fs from "fs/promises";
import path from "path";

function HomePage({ products }) {
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const dummyData = JSON.parse(fileData);

  if (!dummyData) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (dummyData.products.length < 1) {
    return { notFound: true };
  }

  return {
    props: {
      products: dummyData.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
