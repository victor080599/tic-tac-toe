export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;
  return (
    <section className="winner">
      <div className="text">
        {winner === false ? (
          <h2>Draw</h2>
        ) : (
          <h2>
            <span className="winner-name">{winner}</span> won the game
          </h2>
        )}

        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  );
};
