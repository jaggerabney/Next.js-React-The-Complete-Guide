import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage({ initialSales }) {
  const [sales, setSales] = useState(initialSales);
  // const [isLoading, setIsLoading] = useState();

  const { data, error } = useSWR(process.env.NEXT_PUBLIC_BACKEND_URL, (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const formattedSales = [];

      for (const key in data) {
        formattedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(formattedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(process.env.NEXT_PUBLIC_BACKEND_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const formattedSales = [];

  //       for (const key in data) {
  //         formattedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(formattedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load data.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL);
  const data = await response.json();
  const sales = [];

  for (const key in data) {
    sales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      initialSales: sales,
    },
  };
}

export default LastSalesPage;
