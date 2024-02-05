// tailwind.config.js

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
        'FBlack': ['FBlack','mono'],  
        'FBold': ['FBold', 'Ariel'],   
        'FBook': ['FBook', 'sans'],    
        'FBMed': ['FBMed', 'sans'],   
        'FMedi': ['FMedi', 'sans'],    
        'FBooki': ['FBooki', 'sans'],  
        'FBoldi': ['FBoldi', 'sans'], 
        'FBlacki': ['FBlacki', 'sans'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
