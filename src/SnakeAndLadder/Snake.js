// Snake.js
export const Snake = (start, end) => ({
  start,
  end,
  hasSnake(position) {
    return this.start === position;
  },
  nextPosition(position) {
    return this.hasSnake(position) ? this.end : position;
  },
});
