import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import type {LayoutRouteProps} from "react-router-dom";
import {Outlet} from "react-router-dom"
import './Layout.css'

export default function Layout({children}:LayoutRouteProps) {
  return (
    <div className="layout">
      <Header />
        <main className="main-content">{children}</main>
        <Outlet />
      <Footer />
    </div>
  );
}