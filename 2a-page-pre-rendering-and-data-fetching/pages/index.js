import fs from "fs/promises";
import path from "path";

import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
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
