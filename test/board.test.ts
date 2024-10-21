import { Board } from '@/board.js';
import type { Piece } from '@/types.js';
import { expect, test } from 'vitest';

test('set and get', () => {
  const board = Board.empty();
  expect(board.get(0)).toBeUndefined();
  const knight: Piece = { role: 'knight', color: 'sente' };
  expect(board.set(0, knight)).toBeUndefined();
  expect(board.get(0)).toEqual(knight);
});
