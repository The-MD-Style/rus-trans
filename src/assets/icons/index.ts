import {  location, telegram, viber, whatsapp } from './custom';

const icons = {
  location,
  viber,
  telegram,
  whatsapp
};

export type Icons = keyof typeof icons;

export default icons;
