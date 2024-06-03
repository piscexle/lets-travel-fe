import React, { useRef } from 'react';
import './style.scss';
import { Flex } from 'antd';
import { useInView, motion } from 'framer-motion';
import csx from 'classnames';

interface Props {
  title: string;
  titleIsRight: boolean;
  className?: string;
}

const SectionHead: React.FC<Props> = ({ title, titleIsRight, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: titleIsRight ? '-100%' : '100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: titleIsRight ? '-100%' : '100%' },
    transition: { duration: 1 },
  };
  const wordsTitle = title.split(' ');

  return (
    <div className={csx('container container-rectangle', className)} ref={ref}>
      <Flex justify="space-between" align="center">
        {titleIsRight ? (
          <>
            <div
              className={csx(
                { rectangle: wordsTitle?.length <= 2 },
                { 'rectangle-midle': wordsTitle?.length > 2 },
                { 'rectangle-left': titleIsRight === true }
              )}
            >
              <motion.div {...motionSetting} className="rectangle-top" />
              <motion.div {...motionSetting} className="rectangle-bottom" />
            </div>
            <h3>{title}</h3>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <div
              className={csx(
                { rectangle: wordsTitle?.length <= 2 },
                { 'rectangle-midle': wordsTitle?.length > 2 },
                { 'rectangle-right': !titleIsRight }
              )}
            >
              <motion.div {...motionSetting} className="rectangle-top" />
              <motion.div {...motionSetting} className="rectangle-bottom" />
            </div>
          </>
        )}
      </Flex>
    </div>
  );
};

export default SectionHead;
