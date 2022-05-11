import { useCurrentUser } from "../contexts/CurrentUser";
import { Panel } from "./Panel";
import { LoginForm } from "./LoginForm";
import { Greeting } from "./Greeting";

export const WelcomePanel = ({ children }) => {
  // 7. Hent currentUser fra useCurrentUser hooken
  const currentUser = null;
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
      {children}
    </Panel>
  );
};

// Gå videre til Panel.jsx
