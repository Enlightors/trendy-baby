import Products from "@/src/components/Productscom";
import React from "react";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Pattern from "@/src/components/Pattern";
import Aboutcom from "@/src/components/Aboutcom";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
      <Aboutcom/>
  
      <Pattern />
      <Header />
    </div>
  );
}
