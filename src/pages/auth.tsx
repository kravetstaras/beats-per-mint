import { getSession } from 'next-auth/client';

import Auth from '@/components/auth';

function AuthPage() {
  return <Auth />;
}

export async function getServerSideProps(context: { req: any }) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {
        session,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default AuthPage;
