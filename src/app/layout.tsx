import Footer from "@/Layout/Footer/Footer";
import NavBar from "@/Layout/NavBar/NavBar";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
