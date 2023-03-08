import { getSession } from 'next-auth/client';

import CommunityCreationsSection from '@/components/project-owner/community-creations-section';

export default function ProfilePage() {
  return (
    <>
      <CommunityCreationsSection />
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
