import { FC } from 'react';
import { Heading } from 'components/heading/ui/Heading';

const WorkingProcess: FC = () => {
	return (
		<div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
			<Heading
				maxWidth={'max-w-[828px]'}
				title={'Our Working Process '}
				desc={'Step-by-Step Guide to Achieving Your Business Goals'}
			/>
			<div className={`min-h[310px] max-w-[600px] rounded-[45px] border border-b-[6px] border-black`}>
				<div className={'flex items-center'}>
					<span className={`text-[60px]`}>01</span>
					<span className={`text-[30px]`}>Consultation</span>
				</div>
				<hr />
				<p className={`ml-[15px] text-[20px]`}>Learn more</p>
			</div>
		</div>
	);
};

export { WorkingProcess };
