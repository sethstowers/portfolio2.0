import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Seth Stowers",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/mylogoblueaccent.png" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased 
          dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
