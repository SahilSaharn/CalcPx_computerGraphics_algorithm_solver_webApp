/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html" , "./dist/js_code/Components.js"],
  theme: {
    colors : {
      "cblack" : "#0A0908",
      "cblue" : "#00A8E8",
      "cwhite" : "#F5F3F4",
      "clessopacitywhite" : "rgba(245, 243, 244, 0.5)" ,
      "cred" : "#ff0000",
      "cdarkblue" : "#007dac"
    },
    fontFamily :{
      poppins : ['Poppins',"Arial"] 
    },
    opacity :{
      'glass': '0.02'
    },

    extend: {}
  },
  plugins: [],
}

