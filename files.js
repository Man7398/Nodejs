const fs = require('fs')
//reading files

// fs.readFile('./blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

//writing files

// fs.writeFile('./blog.txt','hello world',()=>{
// console.log('file name was given');
// })
// fs.writeFile('./blog.txt','hello world',()=>{
//     console.log('file name was given');
//     })

//directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder craeated');
//     })
//  } else{
// fs.rmdir('./assets', (err) => {
// if (err) {
//     console.log(err)
//     }
//     console.log('folder deleted');
//     })
//  }

//deleting files

// if (fs.existsSync ('./docs/deleteme.txt')) {
// fs.unlink('./docs/deleteme.txt', (err) => {
// if (err) {
// console.log(err)
// }
// console.log('file deleted');
// })
// }
