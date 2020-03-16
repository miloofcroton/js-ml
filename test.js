const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

console.log(
  tf.scalar(
    87
  ) === tf.tensor(
    [87],
    []
  )
);
console.log(
  tf.tensor1d(
    [1, 2, 3]
  ) === tf.tensor(
    [1, 2, 3],
    [3]
  )
);
console.log(
  tf.tensor2d(
    [
      [8, 5, 3],
      [1, 2, 9]
    ]
  ) === tf.tensor2d(
    [8, 5, 3, 1, 2, 9],
    [2, 3]
  )
);

// innermost arrays must be same length
console.log(
  tf.tensor3d(
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
  ) === tf.tensor3d(
    [1, 2, 3, 4, 5, 6, 7, 8],
    [2, 2, 2]
  )
);
