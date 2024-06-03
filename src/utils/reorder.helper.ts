/* eslint-disable no-param-reassign */
export const handleReorderHelper = (
  activeIndex: number,
  overIndex: number,
  originalArrayData: any[]
): {
  resultId: string;
  resultIndex: number;
  resultData: any[];
} => {
  let newIndex = 1;
  if (overIndex === 0) {
    // ON FIRST ITEM IN ARRAY
    newIndex = originalArrayData[0].index + 1;
    originalArrayData[activeIndex].index = newIndex;
  } else if (overIndex >= originalArrayData.length - 1) {
    // ON LAST ITEM IN ARRAY
    newIndex = originalArrayData[overIndex].index / 2;
    originalArrayData[activeIndex].index = newIndex;
  } else if (activeIndex > overIndex) {
    // ON MOVE UP
    newIndex = (originalArrayData[overIndex - 1].index + originalArrayData[overIndex].index) / 2;
    originalArrayData[activeIndex].index = newIndex;
  } else {
    // ON MOVE DOWN
    newIndex = (originalArrayData[overIndex + 1].index + originalArrayData[overIndex].index) / 2;
    originalArrayData[activeIndex].index = newIndex;
  }

  return {
    resultId: originalArrayData[activeIndex].id,
    resultIndex: parseFloat(newIndex.toFixed(9)),
    resultData: originalArrayData,
  };
};
