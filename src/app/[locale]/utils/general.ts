import { current } from '@mongez/react';

export const isRtl = () => {
  console.log(current('direction'))
  return current('direction') == 'rtl';
};

export const getLocaleCode = () => {
  console.log(current('locale'))
}
