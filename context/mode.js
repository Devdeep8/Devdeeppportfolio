import { createContext, useContext } from "react";

export const ModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const ModeProvider = ModeContext.Provider;

export function useMode() {
  return useContext(ModeContext);
}
