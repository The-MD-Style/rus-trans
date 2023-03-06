"use client";

import Image from "next/image";
// import { Inter } from "@next/font/google";
import classes from "./page.module.scss";
import HomePageView from "@/view/HomePage/HomePage.view";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePageView></HomePageView>;
}
