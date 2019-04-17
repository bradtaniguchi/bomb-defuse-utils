const liveServer = require('live-server');

console.log('starting smoke server');
liveServer.start({
  port: 4200,
  root: 'dist/client',
  open: false,
  file: 'index.html'
});
