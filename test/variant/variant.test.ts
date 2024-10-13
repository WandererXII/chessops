import { InvalidSfen, parseSfen } from '../../src/sfen.js';

test('roles outside variant', () => {
  const r1 = parseSfen('minishogi', '2k2/2p2/2l2/2P2/2K2 b - 1', true);
  expect(
    r1.unwrap(
      _ => undefined,
      err => err.message
    )
  ).toEqual(InvalidSfen.BoardPiece);
});
