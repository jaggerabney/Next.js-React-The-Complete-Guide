import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load project

    router.push(`/clients/${router.query.clientId}/project1`);
  }

  return (
    <div>
      <h1>Client projects page!</h1>
      <p>Client ID: {router.query.clientId}</p>
      <button onClick={loadProjectHandler}>Load first project</button>
    </div>
  );
}

export default ClientProjectsPage;
