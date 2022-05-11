import { DarkmodeToggle } from "./components/DarkmodeToggle";
import { WelcomePanel } from "./components/WelcomePanel";
import { DarkModeProvider } from "./contexts/DarkMode";
import { CurrentUserProvider } from "./contexts/CurrentUser";

export function Oppgave4() {
  // Her skal du lage en enkel login-flow ved bruk av context
  // Du skal lage og ta i bruk 2 providers
  // En DarkModeProvider og en CurrentUserProvider
  // Du skal også lage customhooks for å bruke de to contextene

  // Oppgaven består av 13 steg og du begynner med å lage en CurrentUserContext i ./contexts/CurrentUser.js

  // 13. Wrap "WelcomePanel" og "DarkmodeToggle" med DarkModeProvider og CurrentUserProvider
  // Dette er siste steg i Oppgave4 og du kan nå teste løsningen og sammenligne med fasit.
  return (
    <>
      <WelcomePanel />
      <DarkmodeToggle />
    </>
  );
}
