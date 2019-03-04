const fs = require('fs')

if (process.argv.length < 2 || process.argv.length > 5) {
  console.log("Usage: '$ merge path/to/directory' or '$ merge' to merge files in current directory.");
  process.exit(-1);
}

let path;
// 2 argvs, use current directory path as path
if (process.argv.length === 2) {
  path = process.cwd();
} else {
  path = process.argv[2];
}
let mergedContent = []

let fileExt = '.md';

let commentsEnabled = false;

try {
  fs.readdirSync(path).forEach((fileName) => {
    if (fileName.indexOf(fileExt) > -1) {

      let cuurentContent = ''
      let commentTitle = fileName.split('.').slice(1)
      commentTitle.pop()
      commentTitle = commentTitle.join('')

      if(commentsEnabled){
        cuurentContent += '# ' + commentTitle + '\n';
      }
      
      cuurentContent += fs.readFileSync(path + '/' + fileName, 'utf-8') + '\n';

      mergedContent.push({
        index: fileName.split('.')[0],
        content: cuurentContent
      })
    }
  });


  mergedContent.sort((a, b) => a.index - b.index)

  fs.writeFileSync(path + '/merged' + fileExt, mergedContent.map(obj => obj.content).join(''));
  console.log(`Success! Check your merged${fileExt} in ${path}`);
} catch (err) {
  console.log(`Oh no, An error occurred! ${err.message}`);
  process.exit(-1);
}
