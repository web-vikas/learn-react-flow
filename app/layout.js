import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Flow Scrape",
  description: "Flow Scrape By Youtube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
