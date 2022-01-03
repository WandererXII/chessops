import { roleTo2Kanji } from '../util';
import { Position } from '../shogi';
import { Move, isDrop, Square } from '../types';
import { pieceCanPromote } from '../variantUtil';
import { makeNumberSquare, piecesAiming } from './notationUtil';

// 歩-76
export function makeKitaoKawasakiMove(pos: Position, move: Move, lastDest?: Square): string | undefined {
  if (isDrop(move)) {
    return roleTo2Kanji(move.role).toUpperCase() + '*' + makeNumberSquare(move.to);
  } else {
    const piece = pos.board.get(move.from);
    if (piece) {
      const roleStr = roleTo2Kanji(piece.role).toUpperCase();
      const ambStr = piecesAiming(pos, piece, move.to).without(move.from).isEmpty()
        ? ''
        : `(${makeNumberSquare(move.from)})`;
      const actionStr = pos.board.has(move.to) ? 'x' : '-';
      const destStr = lastDest === move.to ? '' : makeNumberSquare(move.to);
      const promStr = move.promotion ? '+' : pieceCanPromote(pos.rules)(piece, move.from, move.to) ? '=' : '';
      return `${roleStr}${ambStr}${actionStr}${destStr}${promStr}`;
    } else return undefined;
  }
}