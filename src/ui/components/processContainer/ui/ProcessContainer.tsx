import { FC } from 'react';

type Props = {
  count: string;
  text: string;
};

const ProcessContainer: FC<Props> = ({ count, text }) => {
  return (
    <div
      className={`min-h[159px] py mt-[30px] max-w-[1234px] rounded-[45px] border border-b-[6px] border-black bg-primary-gray px-[60px] py-[41px]`}
    >
      <div className={'flex items-center'}>
        <span className={`text-[60px]`}>{count}</span>
        <span className={`ml-[25px] text-[30px]`}>{text}</span>
      </div>
    </div>
  );
};

export { ProcessContainer };
