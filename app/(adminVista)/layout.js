"use client";
import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/SlideBar";
import { Providers } from "./providers";


export default function RootLayout({ children }) {
  return (
    <Providers>
      <div>
        <HeaderAdmin />
        <div className="flex flex-row">
          <Navbar />
          <main className="w-full p-10">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
