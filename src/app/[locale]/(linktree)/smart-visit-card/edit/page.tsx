import React from 'react';
import { AppActionEnum } from '@/config/constant';
import SmartVisitCardForm from '../SmartVisitCardForm';

const EditSmartVisitCard = () => (
    <div>
      <SmartVisitCardForm typeForm={AppActionEnum.update} />
    </div>
  );

export default EditSmartVisitCard;
