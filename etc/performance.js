const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

// DEFINITIONS

// 0-dimensional tensors
const zeroD1 = tf.scalar(
  87
);
const zeroD2 = tf.tensor(
  [87],
  []
);

// 1-dimensional tensors
const oneD1 = tf.tensor1d(
  [1, 2, 3]
);
const oneD2 = tf.tensor(
  [1, 2, 3],
  [3]
);

// 2-dimensional tensors
const twoD1 = tf.tensor2d(
  [
    [8, 5, 3],
    [1, 2, 9]
  ]
);
const twoD2 = tf.tensor2d(
  [8, 5, 3, 1, 2, 9],
  [2, 3]
);

// 3-dimensional tensors
const threeD1 = tf.tensor3d(
  [
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ],
  ]
);
const threeD2 = tf.tensor3d(
  [1, 2, 3, 4, 5, 6, 7, 8],
  [2, 2, 2]
);

// only relevant within WebGL? Copy to web browser.

// logs memory stats
tf.memory()

// removes tensors from memory
tf.dispose(zeroD1, zeroD2, oneD1, oneD2, twoD1, twoD2, threeD1, threeD2);

// removes all tensors after callback returns
// but doesn't clean variables??
tf.tidy(() => {
  const zeroD = tf.scalar(
    87
  );
  const oneD = tf.tensor1d(
    [1, 2, 3]
  );
  const sum = tf.add(zeroD, oneD);

  return sum;
})

// this example saves an external tensor from within a tidy call using keep()
let sum;
tf.tidy(() => {
  const zeroD = tf.scalar(
    87
  );
  const oneD = tf.tensor1d(
    [1, 2, 3]
  );
  sum = tf.keep(
    tf.add(zeroD, oneD)
  );

  return sum;
})
sum.print()
