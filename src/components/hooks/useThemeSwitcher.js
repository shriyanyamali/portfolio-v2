import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(null);

  useEffect(() => {
    console.log("Initial theme setup");
    const userPref = window.localStorage.getItem("theme");
    const mediaQuery = window.matchMedia(preferDarkQuery);

    console.log("User Preference:", userPref);
    console.log("Media Query Matches:", mediaQuery.matches);

    if (userPref) {
      setMode(userPref);
    } else {
      setMode(mediaQuery.matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    console.log("Applying mode:", mode);
    if (mode) {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
