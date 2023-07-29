/** @type {import('tailwindcss').Config} */
module.exports = {
  //route thorugh which the tailwindcss should be applied!
  content: ['./build/**/*.{html,js}'],
  theme: {
    //whatever you add it should be added to the extendded e=section so that we don't override the existing classes of tailwindcss!! tailwindcss classes will not be applied to clase=ses outside of the scope
    extend: {
      // how to use cutom color!!
      colors: {
        papayawhip:{
         dark:"#fee5bc",
		     light: "#fef4e4",
		     DEFAULT: "ffefd5",
	   }
      },
      // useing cutom screen size !!
      screens: {
        widescreen: {row:("max-aspect-ratio:60%")},
        tallscreen: {row:("max-aspect-ratio:13/20")},
      },
      //animations (look into css animation ones more!!)
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      //animations(contiuned from above) class that is in acual use(it is part of the autocomplete suggestion!!)
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

