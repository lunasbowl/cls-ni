import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { teacherImages } from '../../data/teacherImages';
import './CardSlider.css';

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
          {teacherImages.map((image) => (
            <motion.div
              key={image}
              className='item'>
              <img
                src={image}
                alt=''
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CardSlider;
