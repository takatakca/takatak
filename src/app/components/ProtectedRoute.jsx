"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading, dashboard, fetchUpmindClientId, upmindClientId } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true); // local flag to block render until check is done

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      const token = sessionStorage.getItem("authToken");

      if (!token) {
        // No token → redirect to login with callback
        sessionStorage.setItem("redirectAfterLogin", pathname);
        router.replace(`/login?redirect=${pathname}`);
        return;
      }

      // If token exists but no user yet → fetch dashboard
      
        try {
          if (!user) {
           await dashboard();
          }

           const clientId = await fetchUpmindClientId();
        if (!clientId) {
          sessionStorage.removeItem("authToken");
          sessionStorage.setItem("redirectAfterLogin", pathname);
          router.replace(`/login?redirect=${pathname}`);
          return;
        }
        if (mounted) setChecking(false);
        } catch (err) {
          console.error("ProtectedRoute checkAuth error:", err);
          sessionStorage.removeItem("authToken"); // clear bad token
          sessionStorage.setItem("redirectAfterLogin", pathname);
          router.replace(`/login?redirect=${pathname}`);
        }
      

      setChecking(false); // done checking
    };

    checkAuth();
    return () => { mounted = false; };
  }, [ router, pathname, dashboard, fetchUpmindClientId, user]);

  if (loading || checking) {
    return (
      <div className="text-center flex items-center justify-center min-h-screen text-[30px] text-white">
        Loading...
      </div>
    );
  }

  if (!user || !upmindClientId) {
     return(
      <div className="text-center flex items-center justify-center min-h-screen text-[30px] text-white">
        Redirecting to login...
      </div>
     );
  }

  return children;
};

export default ProtectedRoute;