import {playNote, stopNote} from './noteController';
import {compose, flip, isNil, map, prop, reject, tap} from 'ramda';
import {stream, transduce} from 'flyd';

const pressedKeys = new Set();

const keyCodesToPitches = {
  220: -10,
  90: -9,
  83: -8,
  88: -7,
  68: -6,
  67: -5,
  86: -4,
  71: -3,
  66: -2,
  72: -1,
  78: 0,
  74: 1,
  49: 1,
  77: 2,
  81: 2,
  87: 3,
  188: 3,
  51: 4,
  76: 4,
  69: 5,
  190: 5,
  186: 6,
  52: 6,
  59: 6,
  82: 7,
  191: 7,
  84: 8,
  222: 9,
  54: 9,
  89: 10,
  55: 11,
  85: 12,
  56: 13,
  73: 14,
  79: 15,
  48: 16,
  80: 17,
  189: 18,
  219: 19,
  221: 20,
};

const computeNoteParams = (pitch) => ({
  id: `keyboard: ${pitch}`,
  pitch,
});

document.onkeydown = stream();
document.onkeyup = stream();

transduce(compose(map(tap((e) => e.keyCode === 191 && e.preventDefault())),
                  map(prop('keyCode')),
                  reject(::pressedKeys.has),
                  map(tap(::pressedKeys.add)),
                  map(flip(prop)(keyCodesToPitches)),
                  reject(isNil),
                  map(computeNoteParams),
                  map(playNote)),
          document.onkeydown);

transduce(compose(map(prop('keyCode')),
                  map(tap(::pressedKeys.delete)),
                  map(flip(prop)(keyCodesToPitches)),
                  reject(isNil),
                  map(computeNoteParams),
                  map(stopNote)),
          document.onkeyup);
