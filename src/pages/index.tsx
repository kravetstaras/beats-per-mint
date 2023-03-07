import { getSession } from 'next-auth/client';

import DiscoverSection from '@/components/home-page/discover-section';
import AboutSection from '@/components/home-page/about-section';
import BannersSection from '@/components/home-page/banner-section';

export default function Home() {
  return (
    <>
      <BannersSection />
      <AboutSection />
      <DiscoverSection />
    </>
  );
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
