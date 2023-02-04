/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "480px" },
      // => @media (max-width: 480px) { ... }

      mob: { max: "360px" },
      // => @media (max-width: 360px) { ... }
    },
    extend: {
      width: {
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
      },
    },
    colors: {
      'hpink': '#c03084',
      'blue-dark': '#001d3d',
      'orange': '#ff7849',
      'green': '#6dad1f',
      'white' : '#fff',
      'red': '#c70039',
      'gray': '#eeeeee',
      'gray-light': '#d3dce6',
      'gray-dark' : '#686b78',
      'gray-details' : '#535665',
      'gray-desc' :'rgba(40,44,63,.45)',
      'github' : '#333',
      'linkedin' : '#0e76a8', 
      'google' : '#ea4335',
      'title' : '#444',
      'bio' : '#999',
      'blue' : '#1890ff',
      'shimmer' : '#999',
      'pink': "#FFC0CB"
    },
  },
  plugins: [],
};