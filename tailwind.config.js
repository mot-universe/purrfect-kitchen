/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. CONTENT: Menganalisis file untuk kelas Tailwind
  content: [
    "./index.html", // Ini MENGHARUSKAN Tailwind memindai index.html
    // Jika kamu punya file JS atau lainnya di root:
    // "./*.{js,ts,jsx,tsx}", 
  ],

  // 2. THEME: Tempat kamu menyesuaikan warna, font, spacing, dll.
  theme: {
    extend: {
      // Kamu bisa menambahkan warna custom, misal:
      // colors: {
      //   'primary': '#ff49db',
      // },
      // Kamu bisa menambahkan font custom, misal:
      // fontFamily: {
      //   'sans': ['Inter', 'sans-serif'],
      // }
    },
  },

  // 3. PLUGINS: Digunakan untuk menambahkan fungsionalitas tambahan 
  // (misalnya untuk forms, typography)
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}