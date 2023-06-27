import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Client projects page!</h1>
      <p>Client ID: {router.query.clientId}</p>
    </div>
  );
}

export default ClientProjectsPage;
