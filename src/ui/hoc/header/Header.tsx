import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

const Header: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<header className={'mx-auto mt-[60px] flex h-[68px] max-w-[1440px] items-center justify-between px-[100px]'}>
				<Image src={'/assets/svg/Logo.svg'} width={220} height={36} alt='Logo' />
				<nav className='flex items-center gap-10'>
					<a>About us</a>
					<a>Services</a>
					<a>Use Cases</a>
					<a>Pricing</a>
					<a>Blog</a>
					<a className={'rounded-2xl border-2 border-black px-[35px] py-5'}>Request quote</a>
				</nav>
			</header>
			{children}
		</>
	);
};

export { Header };
