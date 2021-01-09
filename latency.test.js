let _ = require('./index');

_.start();
console.log('Test Print');
console.log(`Latency: ${_.end()} ms.`);