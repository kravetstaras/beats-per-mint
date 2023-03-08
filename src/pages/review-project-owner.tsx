import { getSession } from 'next-auth/client';

export default function ReviewProjectOwner() {
  return <></>;
}

export async function getServerSideProps(context: { req: any }) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
