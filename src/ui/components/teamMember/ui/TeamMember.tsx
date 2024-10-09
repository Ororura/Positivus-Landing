import { FC } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  position: string;
  experience: string;
  photo: string;
};

const TeamMember: FC<Props> = ({ name, experience, position, photo }) => {
  return (
    <div className={'min-h-[331px] max-w-[387px] rounded-[45px] border border-b-[6px] border-black px-[35px] pt-10'}>
      <div className={'relative flex'}>
        <Image width={105} height={102} src={`/assets/photos/${photo}`} alt={photo} />
        <div className={'flex items-end'}>
          <p className={'ml-5 text-lg'}>
            <span className={'font-bold'}>{name}</span>
            <br />
            <span>{position}</span>
          </p>
        </div>
        <div className={'absolute right-0 top-0'}>
          <Image width={34} height={34} src={'/assets/svg/linkedin.svg'} alt={'linkedin'} />
        </div>
      </div>
      <div className={'mb-7 mt-7 h-[1px] w-full bg-black'}></div>
      <p>{experience}</p>
    </div>
  );
};

export { TeamMember };
