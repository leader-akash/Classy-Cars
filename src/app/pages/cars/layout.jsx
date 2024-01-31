import { Inter } from "next/font/google";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Footer from "../../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Classy Cars",
};

export default function CarsPage({ children }) {
    return (
        <html lang="en">
            <body >
                <header>
                    <Navbar />
                </header>
                <div className="flex">
                <div >
                 <Sidebar /> 
                </div>
                <div className="mt-5">
                {children}
                </div>  
                </div>

                <div>
                <Footer />
                </div>
            </body>
        </html>
    );
}
