import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Client project page!</h1>
      <p>Project ID: {router.query.clientProjectId}</p>
    </div>
  );
}

export default ClientProjectPage;
