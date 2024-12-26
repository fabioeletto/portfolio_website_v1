module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    // height: {
    //   'screen/2': '50vh'
    // },
    fontSize: {
      xxs: ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '16px'],
      '6xl': ['60px', '16px'],
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'main': '#4ade80',
        'dark': '#212121',
        'darker': '#1c1c1c',
        'dark-text': '#9ca3af'
      },
      animation: {
        'bounce-slow': 'bounce 1.3s infinite'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
