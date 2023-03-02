import { getSession } from 'next-auth/client';

export default function Home(props) {
	return (
		<>
			<StartingPageContent />
		</>
	);
}

export async function getServerSideProps(context) {
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
