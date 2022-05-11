import { useCurrentUser } from "../contexts/CurrentUser";
import { Panel } from "./Panel";
import { LoginForm } from "./LoginForm";
import { Greeting } from "./Greeting";

export const WelcomePanel = ({ children }) => {
  const { currentUser } = useCurrentUser();
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
      {children}
    </Panel>
  );
};
