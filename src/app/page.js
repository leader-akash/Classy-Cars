import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Card from "./components/cards/Card";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="app-container">
        <Navbar />
        <Banner />
        <Card />
        <Footer />
    </main>
  );
}
