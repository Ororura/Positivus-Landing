import { FC } from 'react';
import { Card } from 'components/card/ui';
import { useSplitTitle } from '../lib/hooks';
import { getData } from 'components/services/lib';
import { Heading } from 'components/heading/ui/Heading';

const Services: FC = async () => {
	const { split } = useSplitTitle();
	const data = (await getData()) as [
		{
			title: string;
			bgColorText: string;
			bgColor: string;
			learnMoreIcon: string;
			learnMoreColor: string;
			image: string;
		},
	];

	const description = () => {
		return (
			<p>
				At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
				services include:
			</p>
		);
	};

	return (
		<div className={'mx-auto mt-[140px] max-w-[1440px] px-[100px]'}>
			<Heading title={'Services'} desc={description()} maxWidth={'max-w-[798px]'} />
			<div className={'mt-[80px] grid grid-cols-2 gap-10'}>
				{data &&
					data.map((data, idx) => (
						<Card
							key={idx}
							title={split(data.title)}
							image={data.image}
							bgColorText={data.bgColorText}
							bgColor={data.bgColor}
							learnMoreIcon={data.learnMoreIcon}
							learnMoreColor={data.learnMoreColor}
						/>
					))}
			</div>
		</div>
	);
};

export { Services };
