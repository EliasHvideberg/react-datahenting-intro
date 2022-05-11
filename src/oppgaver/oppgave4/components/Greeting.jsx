import { useCurrentUser } from "../contexts/CurrentUser";

export const Greeting = () => {
  // 9. Erstatt linjen under med currentUser fra useCurrentUser hooken
  const currentUser = { name: null };
  return <p>You logged in as {currentUser.name}.</p>;
};

// Gå videre til LoginForm.jsx
