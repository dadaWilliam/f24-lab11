interface GameState {
  cells: Cell[];
  currentPlayer: string; // Tracks the current player
  winner: string | null; // Tracks the winner (null if no winner yet)
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }