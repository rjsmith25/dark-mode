import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [storedValue, setStoredValue] = useLocalStorage("darkmode", false);

  useEffect(() => {
    let body = document.querySelector("body");
    if (storedValue) {
      body.classList.add("dark-mode");
      return;
    }

    body.classList.remove("dark-mode");
  }, [storedValue]);

  return [storedValue, setStoredValue];
}

export default useDarkMode;
