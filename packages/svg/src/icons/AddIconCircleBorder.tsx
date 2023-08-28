import { FC } from 'react';
import { IconProps } from './types';

export const AddIconCircleBordered: FC<IconProps> = ({ width, height, color, ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zm-2-10c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z" />
    </svg>
  );
};

export default AddIconCircleBordered;
