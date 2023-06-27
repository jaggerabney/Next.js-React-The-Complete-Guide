import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <div>
      <h1>Portfolio project page!</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
}

export default PortfolioProjectPage;
