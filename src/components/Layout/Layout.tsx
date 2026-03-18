import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({children}:any) {
  return (
    <div className="layout">
      <Header />
        <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}