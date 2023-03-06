import { telegram, upArrow, viber, whatsapp } from './custom';

const icons = {
  upArrow,
  viber,
  telegram,
  whatsapp
};

export type Icons = keyof typeof icons;

export default icons;
