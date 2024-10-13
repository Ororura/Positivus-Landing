import { FC } from 'react';
import { Heading } from 'components/heading/ui';
import { EmblaCarousel } from 'components/emblaCarousel/ui';
import { EmblaOptionsType } from 'embla-carousel';

//TODO Доделать слайдер.
const Testimonials: FC = () => {
  return (
    <div className={'mt-[100px] px-[100px]'}>
      <Heading
        title={'Testimonials'}
        maxWidth={'max-w-[768px]'}
        desc={
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More about Our Digital Marketing
            Services
          </p>
        }
      />
      <div className={'mt-[80px] h-[625px] w-[1240px] rounded-[45px] bg-primary-dark'}>
        <EmblaCarousel slides={Array.from(Array(5).keys())} options={{} as EmblaOptionsType} />
      </div>
    </div>
  );
};

export { Testimonials };
