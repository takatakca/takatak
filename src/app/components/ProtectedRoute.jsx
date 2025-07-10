// src/app/components/ProtectedRoute.jsx
"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/signup"); // Redirect if not logged in
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
