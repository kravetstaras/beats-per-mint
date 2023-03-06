import { getSession } from 'next-auth/client';
import DiscoverSection from '@/components/home-page/discover-section';

export default function Home() {
  return <DiscoverSection />;
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
