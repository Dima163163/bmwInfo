import { useState } from 'react';
import styles from './Slider.module.sass';
import classNames from 'classnames';
import { URL } from '../../constants/constants';

interface SliderProps {
  slides: string[];
}

export const Slider = ({ slides }: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    if (activeSlide < slides.length) setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    if (activeSlide > 1) setActiveSlide(activeSlide - 1);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <ul className={styles.sliderList}>
          {slides.map((item, id) => (
            <li
              key={item}
              className={classNames(styles.sliderItem, {
                [styles.sliderItemActive]: id + 1 === activeSlide
              })}
            >
              <img
                className={styles.sliderImage}
                src={`${URL}/public/images/cars/${item}`}
                alt=''
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.btnWrapper}>
        <button
          className={classNames(styles.btn, styles.btnPrev)}
          onClick={prevSlide}
        >
          <img src='/arrow-left.svg' alt='arrow-left' />
        </button>
        <button
          className={classNames(styles.btn, styles.btnNext)}
          onClick={nextSlide}
        >
          <img src='/arrow-right.svg' alt='arrow-right' />
        </button>
      </div>
    </div>
  );
};
