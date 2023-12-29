/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/vecteezy_chatgpt-logo-chat-gpt-icon-on-white-background_21059827.jpg')",
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}