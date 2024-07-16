import { Oswald } from "next/font/google";
import { ColorProvider } from "@/providers/color-provider";
import "@/styles/globals.scss";

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "300", "400"] });

export const metadata = {
  title: "Thanassis Mavrakis",
  description:
    "My name is Thanassis Mavrakis, a self taught UI designer based in Athens, Greece. I began my journey in design in early 2022 and from the first moment I knew this was what I wanted to do.",
};

export default function RootLayout({ children }) {
  return (
    <ColorProvider>
      <html lang="en">
        <body className={oswald.className}>{children}</body>
      </html>
    </ColorProvider>
  );
}
