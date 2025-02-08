import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export const metadata = {
  title: 'ZNUAVIN - List Anime Terpopuler',
  description: 'Website Anime Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gabarito&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body className="font-poppins bg-color-dark" suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
