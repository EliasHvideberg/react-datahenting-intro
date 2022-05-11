// Denne komponenten er en wrapper rundt elementer som skal være sentrert i nettleser.
export const CenteredContent = ({ children }) => {
  if (children) {
    return (
      <div className="App">
        <header className="App-header">{children}</header>
      </div>
    );
  } else {
    return null;
  }
};
