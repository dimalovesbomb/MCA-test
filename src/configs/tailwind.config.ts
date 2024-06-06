import type { Config } from 'tailwindcss';

export const TWconfig: Partial<Config> = {
  theme: {
    colors: {
      primary: {
        black: 'var(--color-primary)',
        gray: 'var(--color-primary-gray)',
        white: 'var(--color-primary-white)',
        blue: 'var(--color-primary-blue)',
        red: 'var(--color-primary-red)',
      },
      secondary: {
        white: 'var(--color-secondary-white)',
      },
    },
    extend: {
      screens: {
        desktop: '992px',
        tablet: '768px',
      },
    },
  },
};
