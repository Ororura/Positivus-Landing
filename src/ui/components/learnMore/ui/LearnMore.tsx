import { FC } from 'react';
import Image from 'next/image';

const LearnMore: FC = () => {
  return (
    <div className={'mt-[20px] flex items-center'}>
      <strong className={'text-primary-light-green'}>Learn more</strong>
      <Image className={'ml-[15px]'} width={17} height={10} src={'/assets/svg/learnMore.svg'} alt={'learnMore'} />
    </div>
  );
};

export { LearnMore };
