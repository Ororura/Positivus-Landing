'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton } from 'components/emblaCarouselDotButton/ui';
import { PrevButton, NextButton, usePrevNextButtons } from 'components/emblaCarouselArrowButtons/ui';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import { useDotButton } from 'components/emblaCarouselDotButton/hooks';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <p>
                  We have been working with Positivus for the past year and have seen a significant increase in website
                  traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares
                  about the success of our business. We highly recommend Positivus to any company looking to grow their
                  online presence.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='embla__buttons'>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' ' + 'embla__dot--selected' : '')}
            />
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export { EmblaCarousel };
