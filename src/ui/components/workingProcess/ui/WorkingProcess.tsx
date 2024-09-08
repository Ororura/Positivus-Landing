import { FC } from 'react';
import { Heading } from 'components/heading/ui/Heading';

const WorkingProcess: FC = () => {
	return (
		<div>
			<Heading
				maxWidth={'max-w-[744px]'}
				title={'Our Working Process '}
				desc={'Step-by-Step Guide to Achieving Your Business Goals'}
			/>
		</div>
	);
};

export { WorkingProcess };
