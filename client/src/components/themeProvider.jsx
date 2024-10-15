import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Add theme class to body
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return <>{children}</>; // Ensure children are rendered
}
