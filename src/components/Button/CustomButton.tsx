import React, { ReactNode, FC } from 'react';
import { Button, ButtonProps } from 'antd';

import { ButtonType } from '@/config/constant';
import './style.scss';

interface Props extends ButtonProps {
  children: ReactNode;
  buttonType?: ButtonType;
  className?: string;
}

const CustomButton: FC<Props> = ({
  children,
  className,
  shape,
  buttonType = ButtonType.DEFAULT,
  ...rest
}: Props) => (
  <Button className={buttonType + (className ? ` ${  className}` : '')} {...rest}>
    {children}
  </Button>
);

export default CustomButton;
