module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'sm':'580px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1200px',
      '2xl':'1920px',
    },
    extend: {
      
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
        400:'400px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        primary: '#0B7A24',
        secondary: '#FFFFFF',
        gray:"#6B716C",
        lightGray:"#B5B2B2"
      },
      backgroundColor: {
        primary: '#0B7A24',
        secondary: '#FFFFFF',
      },
      borderColor:{
        primary: '#0B7A24',
        secondary: '#FFFFFF',
      },
      
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
