const del = require('del');

(async () => {
  const deletedFilePaths = await del(['src/**/*.js', 'src/**/*.js.map', 'src/**/*.jsx', 'src/**/*.jsx.map']);

  console.log('Deleted files:\n', deletedFilePaths.join('\n'));
})();