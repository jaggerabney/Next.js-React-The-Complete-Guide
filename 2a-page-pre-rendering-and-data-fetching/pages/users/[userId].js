function UserDetailPage({ id }) {
  return <h1>{id}</h1>;
}

export async function getServerSideProps({ params }) {
  const userId = params.userId;

  return {
    props: { id: `userid-${userId}` },
  };
}

export default UserDetailPage;
