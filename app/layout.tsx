import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MiuMiu Agency",
  description: "The agency with the most love!",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className={`${poppins.className} text-[#091512]`}>
        <main className="md:min-h-screen flex flex-col items-center h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
