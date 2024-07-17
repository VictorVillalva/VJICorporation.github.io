'use client'

import Header from "./components/Header";
import Services from "./components/Services";
import Banner from "./components/Banner";
import SectionRigth from "./components/SectionRight";
import Comment from "./components/Comments";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <Banner />
      <SectionRigth />
      <Comment />
    </main>
  );
}
