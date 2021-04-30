const ghpages = require('gh-pages');

const path = 'dist/client';
console.log('publishing ', path);
ghpages.publish(path, err => {
  if (err) {
    console.error(err);
  }
});
