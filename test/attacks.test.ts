import {
  attacks,
  between,
  bishopAttacks,
  dragonAttacks,
  goldAttacks,
  horseAttacks,
  kingAttacks,
  knightAttacks,
  lanceAttacks,
  ray,
  rookAttacks,
  silverAttacks,
} from '@/attacks.js';
import { SquareSet } from '@/square-set.js';
import { expect, test } from 'vitest';

test('ray', () => {
  expect(ray(0, 240)).toEqual(SquareSet.fromFile(0));
  expect(ray(240, 0)).toEqual(SquareSet.fromFile(0));
  expect(ray(0, 15)).toEqual(SquareSet.fromRank(0));
  expect(ray(15, 0)).toEqual(SquareSet.fromRank(0));
  expect(ray(0, 255)).toEqual(
    new SquareSet([
      0x20001, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x80004000,
    ])
  );
  expect(ray(255, 0)).toEqual(
    new SquareSet([
      0x20001, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x80004000,
    ])
  );
});

test('between', () => {
  expect(between(42, 42)).toEqual(SquareSet.empty());
  expect(Array.from(between(0, 3))).toEqual([1, 2]);
  expect(Array.from(between(3, 0))).toEqual([1, 2]);
  expect(Array.from(between(0, 34))).toEqual([17]);
  expect(Array.from(between(34, 0))).toEqual([17]);
  expect(Array.from(between(208, 240))).toEqual([224]);
  expect(Array.from(between(240, 208))).toEqual([224]);
});

test('lance attacks', () => {
  expect(lanceAttacks(0, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(1, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(14, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(15, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(42, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x4000400, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(240, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x1])
  );
  expect(lanceAttacks(241, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x2])
  );
  expect(lanceAttacks(254, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([
      0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x4000,
    ])
  );
  expect(lanceAttacks(255, 'sente', SquareSet.empty())).toEqual(
    new SquareSet([
      0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x8000,
    ])
  );

  expect(lanceAttacks(0, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x10000, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001])
  );
  expect(lanceAttacks(1, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x20000, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002])
  );
  expect(lanceAttacks(14, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([
      0x40000000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000,
      0x40004000,
    ])
  );
  expect(lanceAttacks(15, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([
      0x80000000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000,
      0x80008000,
    ])
  );
  expect(lanceAttacks(42, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([
      0x0, 0x4000000, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400,
    ])
  );
  expect(lanceAttacks(240, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(241, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(254, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(lanceAttacks(255, 'gote', SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );

  expect(
    lanceAttacks(42, 'sente', new SquareSet([0x4000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(new SquareSet([0x4000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(
    lanceAttacks(42, 'sente', new SquareSet([0x400, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(new SquareSet([0x4000400, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
});

test('knight attacks', () => {
  expect(knightAttacks(0, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(1, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(14, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(15, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(42, 'sente')).toEqual(
    new SquareSet([0xa00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(240, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x20000, 0x0])
  );
  expect(knightAttacks(241, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x50000, 0x0])
  );
  expect(knightAttacks(254, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xa0000000, 0x0])
  );
  expect(knightAttacks(255, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x40000000, 0x0])
  );

  expect(knightAttacks(0, 'gote')).toEqual(new SquareSet([0x0, 0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(knightAttacks(1, 'gote')).toEqual(new SquareSet([0x0, 0x5, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(knightAttacks(14, 'gote')).toEqual(
    new SquareSet([0x0, 0xa000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(15, 'gote')).toEqual(
    new SquareSet([0x0, 0x4000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(42, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0xa00, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(240, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(241, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(254, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(knightAttacks(255, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
});

test('silver attacks', () => {
  expect(silverAttacks(0, 'sente')).toEqual(
    new SquareSet([0x20000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(1, 'sente')).toEqual(
    new SquareSet([0x50000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(14, 'sente')).toEqual(
    new SquareSet([0xa0000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(15, 'sente')).toEqual(
    new SquareSet([0x40000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(42, 'sente')).toEqual(
    new SquareSet([0xe000000, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(240, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x3])
  );
  expect(silverAttacks(241, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x7])
  );
  expect(silverAttacks(254, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xe000])
  );
  expect(silverAttacks(255, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xc000])
  );

  expect(silverAttacks(0, 'gote')).toEqual(
    new SquareSet([0x30000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(1, 'gote')).toEqual(
    new SquareSet([0x70000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(14, 'gote')).toEqual(
    new SquareSet([0xe0000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(15, 'gote')).toEqual(
    new SquareSet([0xc0000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(42, 'gote')).toEqual(
    new SquareSet([0xa000000, 0xe000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(silverAttacks(240, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x2])
  );
  expect(silverAttacks(241, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x5])
  );
  expect(silverAttacks(254, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xa000])
  );
  expect(silverAttacks(255, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x4000])
  );
});

test('gold attacks', () => {
  expect(goldAttacks(0, 'sente')).toEqual(
    new SquareSet([0x10002, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(1, 'sente')).toEqual(
    new SquareSet([0x20005, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(14, 'sente')).toEqual(
    new SquareSet([0x4000a000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(15, 'sente')).toEqual(
    new SquareSet([0x80004000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(42, 'sente')).toEqual(
    new SquareSet([0xe000000, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(240, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x20003])
  );
  expect(goldAttacks(241, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x50007])
  );
  expect(goldAttacks(254, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xa000e000])
  );
  expect(goldAttacks(255, 'sente')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x4000c000])
  );

  expect(goldAttacks(0, 'gote')).toEqual(
    new SquareSet([0x30002, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(1, 'gote')).toEqual(
    new SquareSet([0x70005, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(14, 'gote')).toEqual(
    new SquareSet([0xe000a000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(15, 'gote')).toEqual(
    new SquareSet([0xc0004000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(42, 'gote')).toEqual(
    new SquareSet([0x4000000, 0xe000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(goldAttacks(240, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x20001])
  );
  expect(goldAttacks(241, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x50002])
  );
  expect(goldAttacks(254, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xa0004000])
  );
  expect(goldAttacks(255, 'gote')).toEqual(
    new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x40008000])
  );
});

test('rook attacks', () => {
  expect(rookAttacks(0, SquareSet.empty())).toEqual(
    new SquareSet([0x1fffe, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001])
  );
  expect(rookAttacks(1, SquareSet.empty())).toEqual(
    new SquareSet([0x2fffd, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002])
  );
  expect(rookAttacks(14, SquareSet.empty())).toEqual(
    new SquareSet([
      0x4000bfff, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000,
      0x40004000,
    ])
  );
  expect(rookAttacks(15, SquareSet.empty())).toEqual(
    new SquareSet([
      0x80007fff, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000,
      0x80008000,
    ])
  );
  expect(rookAttacks(42, SquareSet.empty())).toEqual(
    new SquareSet([
      0x4000400, 0x400fbff, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400,
    ])
  );
  expect(rookAttacks(240, SquareSet.empty())).toEqual(
    new SquareSet([0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0xfffe0001])
  );
  expect(rookAttacks(241, SquareSet.empty())).toEqual(
    new SquareSet([0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0xfffd0002])
  );
  expect(rookAttacks(254, SquareSet.empty())).toEqual(
    new SquareSet([
      0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000,
      0xbfff4000,
    ])
  );
  expect(rookAttacks(255, SquareSet.empty())).toEqual(
    new SquareSet([
      0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000,
      0x7fff8000,
    ])
  );

  expect(
    rookAttacks(42, new SquareSet([0xa000000, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(
    new SquareSet([
      0x4000400, 0x400fbff, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400,
    ])
  );
  expect(
    rookAttacks(42, new SquareSet([0x4000000, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(new SquareSet([0x4000000, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(rookAttacks(42, new SquareSet([0x0, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))).toEqual(
    new SquareSet([0x4000400, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
});

test('bishop attacks', () => {
  expect(bishopAttacks(0, SquareSet.empty())).toEqual(
    new SquareSet([
      0x20000, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x80004000,
    ])
  );
  expect(bishopAttacks(1, SquareSet.empty())).toEqual(
    new SquareSet([
      0x50000, 0x100008, 0x400020, 0x1000080, 0x4000200, 0x10000800, 0x40002000, 0x8000,
    ])
  );
  expect(bishopAttacks(14, SquareSet.empty())).toEqual(
    new SquareSet([0xa0000000, 0x8001000, 0x2000400, 0x800100, 0x200040, 0x80010, 0x20004, 0x1])
  );
  expect(bishopAttacks(15, SquareSet.empty())).toEqual(
    new SquareSet([
      0x40000000, 0x10002000, 0x4000800, 0x1000200, 0x400080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(bishopAttacks(42, SquareSet.empty())).toEqual(
    new SquareSet([0xa001100, 0xa000000, 0x20801100, 0x80204040, 0x80010, 0x20004, 0x1, 0x0])
  );
  expect(bishopAttacks(240, SquareSet.empty())).toEqual(
    new SquareSet([0x40008000, 0x10002000, 0x4000800, 0x1000200, 0x400080, 0x100020, 0x40008, 0x2])
  );
  expect(bishopAttacks(241, SquareSet.empty())).toEqual(
    new SquareSet([0x80000000, 0x20004000, 0x8001000, 0x2000400, 0x800100, 0x200040, 0x80010, 0x5])
  );
  expect(bishopAttacks(254, SquareSet.empty())).toEqual(
    new SquareSet([0x10000, 0x40002, 0x100008, 0x400020, 0x1000080, 0x4000200, 0x10000800, 0xa000])
  );
  expect(bishopAttacks(255, SquareSet.empty())).toEqual(
    new SquareSet([0x20001, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x4000])
  );

  expect(
    bishopAttacks(42, new SquareSet([0x4000000, 0x4000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(
    new SquareSet([0xa001100, 0xa000000, 0x20801100, 0x80204040, 0x80010, 0x20004, 0x1, 0x0])
  );
  expect(
    bishopAttacks(42, new SquareSet([0xa000000, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(new SquareSet([0xa000000, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(
    bishopAttacks(42, new SquareSet([0x8000000, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]))
  ).toEqual(new SquareSet([0xa000100, 0xa000000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
});

test('king attacks', () => {
  expect(kingAttacks(0)).toEqual(new SquareSet([0x30002, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(kingAttacks(1)).toEqual(new SquareSet([0x70005, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(kingAttacks(14)).toEqual(new SquareSet([0xe000a000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(kingAttacks(15)).toEqual(new SquareSet([0xc0004000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  expect(kingAttacks(42)).toEqual(
    new SquareSet([0xe000000, 0xe000a00, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(kingAttacks(240)).toEqual(new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x20003]));
  expect(kingAttacks(241)).toEqual(new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x50007]));
  expect(kingAttacks(254)).toEqual(new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xa000e000]));
  expect(kingAttacks(255)).toEqual(new SquareSet([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x4000c000]));
});

test('dragon attacks', () => {
  expect(dragonAttacks(0, SquareSet.empty())).toEqual(
    new SquareSet([0x3fffe, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001])
  );
  expect(dragonAttacks(1, SquareSet.empty())).toEqual(
    new SquareSet([0x7fffd, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002])
  );
  expect(dragonAttacks(14, SquareSet.empty())).toEqual(
    new SquareSet([
      0xe000bfff, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000,
      0x40004000,
    ])
  );
  expect(dragonAttacks(15, SquareSet.empty())).toEqual(
    new SquareSet([
      0xc0007fff, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000,
      0x80008000,
    ])
  );
  expect(dragonAttacks(42, SquareSet.empty())).toEqual(
    new SquareSet([
      0xe000400, 0xe00fbff, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400, 0x4000400,
    ])
  );
  expect(dragonAttacks(240, SquareSet.empty())).toEqual(
    new SquareSet([0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0x10001, 0xfffe0003])
  );
  expect(dragonAttacks(241, SquareSet.empty())).toEqual(
    new SquareSet([0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0x20002, 0xfffd0007])
  );
  expect(dragonAttacks(254, SquareSet.empty())).toEqual(
    new SquareSet([
      0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000, 0x40004000,
      0xbfffe000,
    ])
  );
  expect(dragonAttacks(255, SquareSet.empty())).toEqual(
    new SquareSet([
      0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000, 0x80008000,
      0x7fffc000,
    ])
  );
});

test('horse attacks', () => {
  expect(horseAttacks(0, SquareSet.empty())).toEqual(
    new SquareSet([
      0x30002, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x80004000,
    ])
  );
  expect(horseAttacks(1, SquareSet.empty())).toEqual(
    new SquareSet([
      0x70005, 0x100008, 0x400020, 0x1000080, 0x4000200, 0x10000800, 0x40002000, 0x8000,
    ])
  );
  expect(horseAttacks(14, SquareSet.empty())).toEqual(
    new SquareSet([0xe000a000, 0x8001000, 0x2000400, 0x800100, 0x200040, 0x80010, 0x20004, 0x1])
  );
  expect(horseAttacks(15, SquareSet.empty())).toEqual(
    new SquareSet([
      0xc0004000, 0x10002000, 0x4000800, 0x1000200, 0x400080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(horseAttacks(42, SquareSet.empty())).toEqual(
    new SquareSet([0xe001100, 0xe000a00, 0x20801100, 0x80204040, 0x80010, 0x20004, 0x1, 0x0])
  );
  expect(horseAttacks(240, SquareSet.empty())).toEqual(
    new SquareSet([
      0x40008000, 0x10002000, 0x4000800, 0x1000200, 0x400080, 0x100020, 0x40008, 0x20003,
    ])
  );
  expect(horseAttacks(241, SquareSet.empty())).toEqual(
    new SquareSet([
      0x80000000, 0x20004000, 0x8001000, 0x2000400, 0x800100, 0x200040, 0x80010, 0x50007,
    ])
  );
  expect(horseAttacks(254, SquareSet.empty())).toEqual(
    new SquareSet([
      0x10000, 0x40002, 0x100008, 0x400020, 0x1000080, 0x4000200, 0x10000800, 0xa000e000,
    ])
  );
  expect(horseAttacks(255, SquareSet.empty())).toEqual(
    new SquareSet([
      0x20001, 0x80004, 0x200010, 0x800040, 0x2000100, 0x8000400, 0x20001000, 0x4000c000,
    ])
  );
});

test('chushogi pieces', () => {
  expect(attacks({ role: 'leopard', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x1c000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'copper', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x8000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'elephant', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x14001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'chariot', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8000000, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'tiger', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x14000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'phoenix', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8002200, 0x8001400, 0x2200, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'kirin', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x14000800, 0x14002200, 0x800, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'sidemover', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x800f7ff, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'verticalmover', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'queen', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'lion', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x3e003e00, 0x3e003600, 0x3e00, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'gobetween', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x8000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'promotedpawn', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x8001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'ox', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c000000, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'stag', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x1c000800, 0x1c001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'boar', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x14002200, 0x1400f7ff, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'falcon', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'prince', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'eagle', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'whale', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x1c000000, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'whitehorse', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x8000000, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'dragonpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x1c000800, 0x1c00f7ff, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'horsepromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x1c002200, 0x1c001400, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'lionpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x3e003e00, 0x3e003600, 0x3e00, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'queenpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'bishoppromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x14002200, 0x14000000, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'elephantpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x14001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'sidemoverpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x800f7ff, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'verticalmoverpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'rookpromoted', color: 'sente' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x800f7ff, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );

  expect(attacks({ role: 'leopard', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x1c000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'copper', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x1c000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'elephant', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x14000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'chariot', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8000000, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'tiger', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x14001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'phoenix', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8002200, 0x8001400, 0x2200, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'kirin', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x14000800, 0x14002200, 0x800, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'sidemover', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x800f7ff, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'verticalmover', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'queen', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'lion', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x3e003e00, 0x3e003600, 0x3e00, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'gobetween', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x8000000, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'promotedpawn', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'ox', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c000000, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'stag', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x1c000800, 0x1c001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'boar', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x14002200, 0x1400f7ff, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'falcon', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x41002a00, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'prince', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x1c000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'eagle', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x8002a00, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'whale', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x8000000, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'whitehorse', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x1c000000, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'dragonpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x1c000800, 0x1c00f7ff, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'horsepromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x1c002200, 0x1c001400, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'lionpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x3e003e00, 0x3e003600, 0x3e00, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'queenpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x49008880, 0x1c002a00, 0x1c00f7ff, 0x49002a00, 0x8408880, 0x8100820, 0x8040808, 0x8010802,
    ])
  );
  expect(attacks({ role: 'bishoppromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x41008080, 0x14002200, 0x14000000, 0x41002200, 0x408080, 0x100020, 0x40008, 0x10002,
    ])
  );
  expect(attacks({ role: 'elephantpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x14000000, 0x1c001400, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'sidemoverpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([0x0, 0x8000000, 0x800f7ff, 0x0, 0x0, 0x0, 0x0, 0x0])
  );
  expect(attacks({ role: 'verticalmoverpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x8001400, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
  expect(attacks({ role: 'rookpromoted', color: 'gote' }, 75, SquareSet.empty())).toEqual(
    new SquareSet([
      0x8000800, 0x8000800, 0x800f7ff, 0x8000800, 0x8000800, 0x8000800, 0x8000800, 0x8000800,
    ])
  );
});
