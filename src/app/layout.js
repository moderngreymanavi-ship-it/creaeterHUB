import "../styles/globals.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "CreatorHub",
  description: "CreatorHub — blog, portfolio & analytics",
  icon: "favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
