const fs = require('fs')
const path = require('path')

if (process.argv.length < 2 || process.argv.length > 5) {
  console.log("Usage: '$ merge path/to/directory' or '$ merge' to merge files in current directory.");
  process.exit(-1);
}

let currentPath;
// 2 argvs, use current directory path as path
if (process.argv.length === 2) {
  currentPath = process.cwd();
} else {
  currentPath = process.argv[2];
}
let mergedContent = []

let fileExt = '.md';

let commentsEnabled = false;

function generateImageUrl(name) {
  let curPath = process.cwd().split('\\').slice(2)
  const projectName = curPath.shift()
  curPath.unshift('gh-pages')
  curPath.unshift(projectName)

  curPath = ['raw.githubusercontent.com/xingyuzhe'].concat(curPath).join('/')

  return 'https://' + path.join(curPath, name).replace(/\\/g, '/')
}

try {
  fs.readdirSync(currentPath).forEach((fileName) => {
    if (fileName.indexOf(fileExt) > -1) {

      let cuurentContent = ''
      let commentTitle = fileName.split('.').slice(1)
      commentTitle.pop()
      commentTitle = commentTitle.join('')

      if(commentsEnabled){
        cuurentContent += '# ' + commentTitle + '\n';
      }
      
      cuurentContent += fs.readFileSync(currentPath + '/' + fileName, 'utf-8') + '\n';

      // replace image url
      const regex = /(?<=!\[image]\().*?\.(?:png|jpg)(?=[^)]*\))/g

      const matched = cuurentContent.match(regex)

      if (matched) {
        matched.map(match => {
          cuurentContent = cuurentContent.replace(match, generateImageUrl(match))
        })
      }

      const index = fileName.split('.')[0]
      if (parseInt(index, 10) >= 0) {
        mergedContent.push({
          index: fileName.split('.')[0],
          content: cuurentContent
        })
      }
    }
  });


  mergedContent.sort((a, b) => a.index - b.index)

  fs.writeFileSync(currentPath + '/merged' + fileExt, mergedContent.map(obj => obj.content).join(''));
  console.log(`Success! Check your merged${fileExt} in ${currentPath}`);
} catch (err) {
  console.log(`Oh no, An error occurred! ${err.message}`);
  process.exit(-1);
}
