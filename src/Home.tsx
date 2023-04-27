import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "./shared/paths";

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // For now redirects to profile until home page is done.
  useEffect(() => {
    if (location.pathname === paths.root) {
      navigate(paths.profile);
    }
  }, [navigate, location.pathname]);

  return <>Home</>;
}
