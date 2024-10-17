import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        black: '#171717',
        gray: '#AEAEAE',
        secondary: '#767676',
        bar: '#FAFAFA',
        platinum: '#F5F5F5',
        'gray-text': '#8F8F8F',
        'light-gray': '#D9D9D9',
        'dark-gray': '#333333',
        brand: '#FC5660',
        'light-brand': '#FFF2F2',
        green: '#1CCA62',
        'light-green': '#F0FFF6',
        border: '#ECECEC',
        text: '#555555',
      },
    },
  },
  plugins: [],
};
export default config;
