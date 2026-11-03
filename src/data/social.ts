import type { ComponentType } from 'react';
import { Instagram, type IconProps } from '../components/Icons';

export type RedSocial = {
  id: 'instagram' | 'facebook' | 'tiktok';
  nombre: string;
  usuario: string;
  url: string;
  icono: ComponentType<IconProps>;
};

/**
 * Cuentas de la comunidad. Reemplazar por los perfiles reales de PaseAR
 * cuando estén definidos.
 */
export const redes: RedSocial[] = [
  {
    id: 'instagram',
    nombre: 'Instagram',
    usuario: '@PASEARAPP',
    url: 'https://www.instagram.com/PASEARAPP/',
    icono: Instagram,
  },
  /*
  {
  *  id: 'facebook',
  *  nombre: 'Facebook',
  *  usuario: '@PASEARAPP',
  *  url: 'https://www.facebook.com/PASEARAPP',
  *  icono: Facebook,
  *},
  *{
  *  id: 'tiktok',
  *  nombre: 'TikTok',
  *  usuario: '@PASEARAPP',
  *  url: 'https://www.tiktok.com/@PASEARAPP',
  *  icono: TikTok,
  *},
  */
];
