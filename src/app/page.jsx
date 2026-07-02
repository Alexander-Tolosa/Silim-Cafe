"use client";

import Hero from "@/components/Hero";
import SignaturesCarousel from "@/components/SignaturesCarousel";
import CustomerLove from "@/components/CustomerLove";
import DeliveryCTA from "@/components/DeliveryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SignaturesCarousel />
      <CustomerLove />
      <DeliveryCTA />
    </>
  );
}
