import { useCurrentUser } from "../contexts/CurrentUser";

export const Greeting = () => {
  const { currentUser } = useCurrentUser();
  return <p>You logged in as {currentUser.name}.</p>;
};
