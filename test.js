const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

console.log(
  tf.scalar(87) === tf.tensor([87], [])
);
console.log(
  tf.tensor1d([1, 2, 3]) === tf.tensor([1, 2, 3], [3])
);
console.log(
  tf.tensor2d([[8, 5, 3], [1, 2, 9]]) === tf.tensor2d([8, 5, 3, 1, 2, 9], [2, 3])
);
