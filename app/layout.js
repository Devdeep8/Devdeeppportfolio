import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Devdeep Patidar's Portfolio",
  description: "Portfolio of Devdeep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      
      </link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
