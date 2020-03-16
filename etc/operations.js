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


// OPERATIONS
const sum1 = zeroD1.add(zeroD2);
const sum2 = tf.add(zeroD1, zeroD2);
const sum3 = tf.add(zeroD1, oneD2);
const sum4 = tf.add(zeroD1, twoD2);
const sum5 = tf.add(zeroD1, threeD2);

const sub1 = zeroD1.sub(zeroD2);
const sub2 = tf.sub(zeroD1, zeroD2);
const sub3 = tf.sub(oneD2, zeroD1);
const sub4 = tf.sub(twoD2, zeroD1);
const sub5 = tf.sub(twoD2, oneD1);
const sub6 = tf.sub(threeD2, zeroD1);


// testing equality of operations
sum1.print();
sum2.print();
sum3.print();
sum4.print();
sum5.print();

sub1.print();
sub2.print();
sub3.print();
sub4.print();
sub5.print();
sub6.print();
