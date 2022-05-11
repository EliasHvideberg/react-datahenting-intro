import { useConfettiMode, ConfettiProvider } from "./context/ConfettiContext";
import Confetti from "react-confetti";

export const Bonus = () => {
  return (
    <ConfettiProvider>
      <div className="bonus-container">
        <BonusHeader />
        <BonusButton />
        <ConfettiWrapper />
      </div>
    </ConfettiProvider>
  );
};

const BonusButton = () => {
  const { confettiMode, toggle } = useConfettiMode();

  return confettiMode ? null : (
    <button onClick={toggle} className="bonus-button">
      Trykk her for en hyggelig overaskelse
    </button>
  );
};

const BonusHeader = () => {
  const { confettiMode } = useConfettiMode();
  return (
    <>
      <h1 className="bonus-header">
        {confettiMode ? "Gratulerer! 🥳" : "Bonus!"}
      </h1>
      {confettiMode && (
        <p className="bonus-paragraph">
          Du har gjennomført alle oppgavene. Bra jobba! 👏
        </p>
      )}
    </>
  );
};

const ConfettiWrapper = () => {
  const { confettiMode } = useConfettiMode();
  return confettiMode ? <Confetti numberOfPieces={800} /> : null;
};
