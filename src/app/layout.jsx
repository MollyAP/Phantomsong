// app/layout.jsx
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Phantomsong — Creative Studio",
  description: "Brands & websites that connect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
