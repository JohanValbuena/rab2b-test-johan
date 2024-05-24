import "../globals.scss";
import { firaSans } from "@/app/ui/fonts";
import Header from "../ui/organism/header/header";
export const metadata = {
  title: "rab2b test | Johan Valbuena",
  description: "test",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
