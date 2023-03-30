const fs=require('fs');
const readStream=fs.createReadStream('./blog2.txt',{encoding:'utf8'});
const writeStream=fs.createWriteStream('./blog2.txt');
readStream.on('data',(chunk)=>{
console.log('______NEWCHUNK_______');
console.log(chunk);
//console.log(chunk.toString());
console.log(chunk);
writeStream.write('\n NEW CHUNK\n');
writeStream.write(chunk)
})

//piping
readStream.pipe(writeStream);
