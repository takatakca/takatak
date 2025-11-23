"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/privacymanager"]; // add any root paths here

  // Hide navbar if pathname starts with any route in hideNavbarRoutes
  const hideNavbar = hideNavbarRoutes.some(route => pathname.startsWith(route));

  if (hideNavbar) return null;
  return <Navbar />;
}
