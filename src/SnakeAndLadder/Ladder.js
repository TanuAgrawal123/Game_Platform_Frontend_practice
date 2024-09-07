export const Ladder = (start, end) => ({
  start,
  end,
  hasLadder(position) {
    return this.start === position;
  },
  nextPosition(position) {
    return this.hasLadder(position) ? this.end : position;
  },
});
