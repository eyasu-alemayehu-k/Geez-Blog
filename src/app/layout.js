import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
// import { Inter, Poppins } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const pop = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Ge'ez Dev",
  description: "Ge'ez dev description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
