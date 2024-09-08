import { FC } from 'react';
import Image from 'next/image';

const CTA: FC = () => {
	return (
		<div className={'mx-auto max-w-[1440px] px-[100px]'}>
			<div className={'bg-primary-gray relative mt-[100px] flex min-h-[394px] rounded-[45px] px-[60px] py-[60px]'}>
				<div className={'max-w-[500px]'}>
					<p className={'text-[30px]'}>Let’s make things happen</p>
					<p className={'text-[18px]'}>
						Contact us today to learn more about how our digital marketing services can help your business grow and
						succeed online.
					</p>
					<button className={'text-[20px]'}>Get your free proposal</button>
				</div>
				<div className={'absolute right-[140px] top-[-30px]'}>
					<Image src={'/assets/svg/Illustration2.svg'} alt={'Illustration2'} width={404} height={324} />
				</div>
			</div>
		</div>
	);
};

export { CTA };
