import React, { useRef } from 'react';
import './style.scss';
import { Flex } from 'antd';
import { useInView, motion } from 'framer-motion';
import csx from 'classnames';

interface Props {
  miniTitle: string;
  title: string;
  titleIsLeft: boolean;
  className?: string;
  description?: string;
}

const SectionHead: React.FC<Props> = ({
  miniTitle,
  title,
  titleIsLeft,
  className,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionSetting = {
    initial: { opacity: 0, x: titleIsLeft ? '-100%' : '100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: titleIsLeft ? '-100%' : '100%' },
    transition: { duration: 1 },
  };

  const motionCenterSetting = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 1 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className={csx('container container-rectangle', className)} ref={ref}>
      <Flex vertical gap={8} justify="space-between" align={titleIsLeft ? 'center' : 'flex-start'}>
        {titleIsLeft ? (
          <>
            <motion.h5 {...motionCenterSetting}>{miniTitle}</motion.h5>
            <motion.h1 {...motionCenterSetting}>{title}</motion.h1>
            <motion.p {...motionCenterSetting}>{description}</motion.p>
          </>
        ) : (
          <>
            <motion.h5 {...motionSetting}>{miniTitle}</motion.h5>
            <motion.h1 {...motionSetting}>{title}</motion.h1>
            <motion.p {...motionSetting}>{description}</motion.p>
          </>
        )}
      </Flex>
    </div>
  );
};

export default SectionHead;
