"use client";
import React, { useState } from "react";
import { ImStatsDots } from "react-icons/im";
import HeaderAdmin from "../../components/HeaderAdmin";

import "tailwindcss/tailwind.css";

import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/SlideBar";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

export default function RootLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <HeaderAdmin />
      <div className="flex flex-row">
        <Navbar/>
        <main className="w-full p-10">{children}</main>
      </div>
    </div>
  );
}
