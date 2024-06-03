'use client';

import React from 'react';
import { AppActionEnum } from '@/config/constant';
import SmartVisitCardForm from '../SmartVisitCardForm';

const AddSmartVisitCard = () => (
    <div>
      <SmartVisitCardForm typeForm={AppActionEnum.create} />
    </div>
  );

export default AddSmartVisitCard;
