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


// adding tensors
const sum1 = zeroD1.add(zeroD2);
const sum2 = tf.add(zeroD1, zeroD2);
sum1.print();
sum2.print();
