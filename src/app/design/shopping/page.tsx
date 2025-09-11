import Header from "@/components/shopping/header";
import SubHeader from "@/components/shopping/sub-header";
import React from "react";
import GridCard from "@/components/shopping/body/grid-card";
import SubCard from "@/components/shopping/body/sub-card";

export default function page() {
  return (
    <>
      <Header />
      <SubHeader />
      <GridCard />
      <SubCard />
    </>
  );
}
