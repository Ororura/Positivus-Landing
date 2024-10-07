import { FC } from 'react';
import Image from 'next/image';

const Landing: FC = () => {
  return (
    <div className={'mx-auto max-w-[1440px] px-[100px] pt-[70px]'}>
      <div className={'flex justify-between'}>
        <div className='max-w-[531px]'>
          <h1 className={'text-6xl'}>Navigating the digital landscape for success</h1>
          <p className={'mt-[35px] text-xl'}>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including
            SEO, PPC, social media marketing, and content creation.
          </p>
          <button className={'mt-[55px] rounded-2xl bg-black px-[35px] py-[20px] text-white'}>
            Book a consultation
          </button>
        </div>
        <Image src={'/assets/svg/Illustration.svg'} alt={'Illustration'} width={600} height={515} />
      </div>
      <div className={'mt-[70px] flex justify-around'}>
        <Image src={'/assets/svg/Company logo.svg'} alt={'Company logo.svg'} width={125} height={48} />
        <Image src={'/assets/svg/Company logo-1.svg'} alt={'Company logo.svg'} width={125} height={48} />
        <Image src={'/assets/svg/Company logo-2.svg'} alt={'Company logo.svg'} width={125} height={48} />
        <Image src={'/assets/svg/Company logo-3.svg'} alt={'Company logo.svg'} width={125} height={48} />
        <Image src={'/assets/svg/Company logo-4.svg'} alt={'Company logo.svg'} width={125} height={48} />
        <Image src={'/assets/svg/Company logo-5.svg'} alt={'Company logo.svg'} width={125} height={48} />
      </div>
    </div>
  );
};

export { Landing };
