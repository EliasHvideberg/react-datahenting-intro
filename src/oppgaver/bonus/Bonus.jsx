import { useConfettiMode, ConfettiProvider } from "./context/ConfettiContext";
import Confetti from "react-confetti";

export const Bonus = () => {
  // Nå er det tid for en liten bonusoppgave!
  // Start med å lage context i ./context/ConfettiContext.js

  // 2. Wrap bonus-container med ConfettiProvider
  return (
    <div className="bonus-container">
      <BonusHeader />
      <BonusButton />
      <ConfettiWrapper />
    </div>
  );
};

const BonusButton = () => {
  // 3. Bruk useConfettiMode
  const confettiMode = null;
  const toggle = () => null;

  return confettiMode ? null : (
    <button onClick={toggle} className="bonus-button">
      Trykk her for en hyggelig overaskelse
    </button>
  );
};

const BonusHeader = () => {
  // 4. Bruk useConfettiMode
  const confettiMode = null;
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
  // 5. Bruk useConfettiMode
  // 6. Test løsningen i nettleser 🤩
  const confettiMode = null;
  return confettiMode && <Confetti numberOfPieces={800} />;
};
