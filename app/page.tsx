import { FC } from 'react';
import { Landing } from 'components/landing/Landing';
import { Services } from 'components/services/ui';

const Home: FC = () => {
	return (
		<main>
			<Landing />
			<Services />
		</main>
	);
};

export default Home;
