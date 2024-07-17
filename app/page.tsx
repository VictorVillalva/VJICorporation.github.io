'use client'

import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <Banner />
      <Section />
    </main>
  );
}
