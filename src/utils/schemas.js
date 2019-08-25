import fs from 'fs';
import path from 'path';


const allschemas = type => new Promise((resolve, reject) => {
  const pathFile = path.join(
    process.cwd(),
    `src/types/`,
  );
  fs.readdir(pathFile, (err, folder) => {

    const folderValid = folder.filter((f)=> f.indexOf('.'));

    console.log(folderValid)

  })

  // fs.readFile(pathFile, { encoding: 'utf-8' }, (err, schema) => {
  //   if (err) {
  //     reject(err);
  //   }

  //   resolve(schema);
  // });
});

export default allschemas;
