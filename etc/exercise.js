const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

tf.tidy(() => {
  console.info(`Original snippet:`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.mul(tf.scalar(5));
  ys.print();
});

tf.tidy(() => {
  console.info(`Created with .tensor:`);
  const xs = tf.tensor([1, 2, 3], [3]);
  const ys = xs.mul(tf.scalar(5));
  ys.print();
});

tf.tidy(() => {
  console.info(`As a 2D tensor:`);
  const xs = tf.tensor([1, 2, 3], [3, 1]);
  // or: tf.tensor2d([[1],[2],[3]]);
  const ys = xs.mul(tf.scalar(5));
  ys.print();
});

console.info(`Shape mismatch (produces an Error):`);
tf.tidy(() => {
  try {
    const xs = tf.tensor([1, 2, 3], [3, 2]);
    // or: tf.tensor2d([[1],[2],[3]]);
    const ys = xs.mul(tf.scalar(5));
    ys.print();
  }
  catch (err) {
    console.warn(err);
  }
});

tf.tidy(() => {
  console.info(`Using .add(...):`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.add(tf.scalar(5));
  ys.print();
});

tf.tidy(() => {
  console.info(`Using .sub(...):`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.sub(tf.scalar(5));
  ys.print();
});

tf.tidy(() => {
  console.info(`Using .add(...) with a 1D tensor:`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.add(tf.tensor1d([1, 0, 1]));
  ys.print();
});

tf.tidy(() => {
  console.info(`Using .add(...) with a 2D tensor (3 x 1):`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.add(tf.tensor2d([[1], [0], [1]]));
  ys.print();
});

tf.tidy(() => {
  console.info(`Using .add(...) with a 2D tensor (1 x 3):`);
  const xs = tf.tensor1d([1, 2, 3]);
  const ys = xs.add(tf.tensor2d([[1, 0, 1]]));
  ys.print();
});

// returns y from y = mx + c
const getYs = (xs, m, c) => xs
  .mul(m)
  .add(c);

tf.tidy(() => {
  const t1 = tf.tensor1d([1,5,10]);
  const t2 = getYs(t1, 2, 1);
  t2.print();
});


tf.tidy(() => {

  const t3 = tf.tensor1d([25, 76, 4, 23, -5, 22]);

  const min = t3.min();
  const max = t3.max();
  min.print();
  max.print();

  const minMaxNormalisation = (tensor) => {
    const min = tensor.min();
    const max = tensor.max();
    const normalisedTensor = tensor
      .sub(min)
      .div(max
        .sub(min)
      );
    return normalisedTensor;
  }

  const normalisedT3 = minMaxNormalisation(t3);
  normalisedT3.print();
});


let startInd1 = 0;
while (startInd1 < 100) {
  const createdTensor = tf.tensor1d([1,2,3]);
  createdTensor.dispose();
  startInd1++;
}
let startInd2 = 0;
while (startInd2 < 100) {
  tf.tidy(() => {
    // do not to return tensor, otherwise it stays in memory
    tf.tensor1d([4,5,6])
  });
  startInd2++;
}

// checks memory
console.info(`Check memory is empty:`);
console.log(tf.memory());
