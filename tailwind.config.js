/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
				'title-xxl': ['40px', '55px'],
				'title-xl': ['36px', '45px'],
				'title-xl2': ['33px', '45px'],
				'title-lg': ['28px', '35px'],
				'title-md': ['24px', '30px'],
				'title-md2': ['26px', '30px'],
				'title-sm': ['20px', '26px'],
				'title-xsm': ['18px', '24px'],
			},

      colors:{
        'purple':'#080325'
      }
      
    },
  },
  plugins: [],
}

