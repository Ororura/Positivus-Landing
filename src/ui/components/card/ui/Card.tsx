import { FC } from 'react';
import Image from 'next/image';

type CardProps = {
  title: { lastWord: string | undefined; remainingWords: string };
  bgColorText: string;
  bgColor: string;
  learnMoreIcon: string;
  learnMoreColor: string;
  image: string;
};

const Card: FC<CardProps> = ({ title, bgColorText, bgColor, learnMoreIcon, learnMoreColor, image }) => {
  return (
    <div
      className={`${bgColor} min-h[310px] flex max-w-[600px] justify-between rounded-[45px] border border-b-[6px] border-black p-[50px]`}
    >
      <div>
        <div className={'min-h[221px] grid'}>
          <span className={`${bgColorText} h-fit w-fit rounded-[7px] px-[7px] text-[30px]`}>
            {title.remainingWords}
          </span>
          <span className={`${bgColorText} h-fit w-fit rounded-[7px] px-[7px] text-[30px]`}>{title.lastWord}</span>
          <div className={'mt-[73px] flex items-center'}>
            <Image src={learnMoreIcon} width={41} height={41} alt={'learn more'} />
            <span className={`${learnMoreColor} ml-[15px] text-[20px]`}>Learn more</span>
          </div>
        </div>
      </div>
      <Image src={image} alt={'illustration'} width={210} height={170} />
    </div>
  );
};

export { Card };
