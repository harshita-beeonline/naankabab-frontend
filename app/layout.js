import React from "react";
import "../app/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
export const metadata = {
  title: "Naan Kabob: Authentic Afghan &amp; Mediterranean Cuisine in GTA",
  description: "Discover Afghan and Mediterranean cuisine at Naan Kabob. Mississauga &amp; Toronto’s top-rated Halal spot for kabobs, family meals, and catering. Order online today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
          <Header />

          {children}

          <Footer />
      </body>
    </html>
  );
}
