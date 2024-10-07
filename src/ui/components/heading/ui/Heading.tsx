import React, { FC } from 'react';

type Props = {
  title: string;
  maxWidth: string;
  desc: React.JSX.Element;
};

const Heading: FC<Props> = ({ title, desc, maxWidth }) => {
  return (
    <div className={`flex ${maxWidth} items-center`}>
      <h2 className={'mr-[40px] rounded-2xl bg-primary-light-green px-[7px] text-[31px]'}>{title}</h2>
      {desc}
    </div>
  );
};

export { Heading };
