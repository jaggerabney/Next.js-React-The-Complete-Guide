import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch(process.env.NEXT_PUBLIC_BACKEND_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedSales = [];

        for (const key in data) {
          formattedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(formattedSales);
        setIsLoading(false);
      });
  }, []);

  if (!sales || isLoading) {
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

export default LastSalesPage;
