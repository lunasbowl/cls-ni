import { useRef, useEffect, useState } from 'react';
import TeacherImages from '../TeacherImages';
import './CardSlider.css';
import { motion } from 'framer-motion';

function CardSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='cardslider'>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel'>
          {TeacherImages.map((image) => {
            return (
              <motion.div className='item'>
                <img
                  src={image}
                  alt=''
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CardSlider;
