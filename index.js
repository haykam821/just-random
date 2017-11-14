function c(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports = function(input) {
    switch (typeof arguments[0]) {
      case 'number':
        if (typeof arguments[1] == 'number') {
          return c(min, max);
        } else {
          return c(0, max);
        }

        break;
      case 'boolean':
        return Boolean(c(0, 1));
      case 'object':
        if (input.isArray()) {
          return input[c(0, input.length)];
        } else {
          throw new Error('This object type doesn\'t seem to be supported!');
        }

        break;
      default:
        throw new Error('This object type doesn\'t seem to be supported!');
    }
};
