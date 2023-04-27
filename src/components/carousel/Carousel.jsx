import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../productCard/ProductCard';
import Button from '../button/Button';

import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Carousel = ({ products }) => {
  const [length, setLength] = useState(products.length);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [items, setItems] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    setLength(products.length);

    const resizeObserver = new ResizeObserver(() => {
      setWidth(sliderRef.current.offsetWidth);
      setItems(Math.floor(width / 250) || 1);
    });

    resizeObserver.observe(sliderRef.current);
    return () => resizeObserver.disconnect();
  }, [products, width, items]);

  const handleClick = (dir) => {
    switch (dir) {
      case 'L':
        if (index > 0) setIndex((prev) => prev - 1);
        break;
      case 'R':
        if (index < length - items) setIndex((prev) => prev + 1);
        break;
    }
  };

  return (
    <div className='w-full py-8'>
      {/* i:{index} len:{length} w:{width} items:{items} maxw: {items * 266} */}
      <div className='flex flex-wrap xs:flex-nowrap items-center justify-center gap-2'>
        <Button
          onClick={() => handleClick('L')}
          variant='primary_squared'
          customStyle='hidden xs:flex'
        >
          <IoArrowBack size={'1.2rem'} />
        </Button>
        <div ref={sliderRef} className='flex justify-center min-w-0 w-full'>
          <div
            style={{
              maxWidth: `${items * 250 + (items - 1) * 16}px`,
              minWidth: `${items * 250 + (items - 1) * 16}px`,
            }}
            className={`flex w-full min-w-[250px] overflow-x-hidden`}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: `-${index * 266}px` }}
              className='flex gap-4'
            >
              {products.map((prod, i) => (
                <ProductCard product={prod} key={i} />
              ))}
            </motion.div>
          </div>
        </div>
        <div className='flex items-center justify-between min-w-[250px] rounded-md p-2 xs:hidden bg-[--light-background-color] dark:bg-[--dark-background-color-tertiary]'>
          <Button variant='primary_squared' onClick={() => handleClick('L')}>
            <IoArrowBack size={'1.2rem'} />
          </Button>
          <div className='font-medium uppercase'>
            {index + 1} / {length}
          </div>
          <Button variant='primary_squared' onClick={() => handleClick('R')}>
            <IoArrowForward size={'1.2rem'} />
          </Button>
        </div>
        <Button
          onClick={() => handleClick('R')}
          variant='primary_squared'
          customStyle='hidden xs:flex'
        >
          <IoArrowForward size={'1.2rem'} />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
