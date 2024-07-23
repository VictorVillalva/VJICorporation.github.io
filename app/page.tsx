'use client'

import Header from "./components/Header";
import Services from "./components/Services";
import Banner from "./components/Banner";
import SectionRigth from "./components/SectionRight";
import Comment from "./components/Comments";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Presentation />
      <Services />
      <Banner />
      <SectionRigth />
      <Comment />
      <ContactUs />
      <Footer />
    </main>
  );
}
