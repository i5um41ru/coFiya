var data = require('./data_input');
var sa = require('./sa');

var waktuLama = Date.now();

console.log('===============================================');
console.log('Asana bot challange #02');
console.log('===============================================');

for (var i = 0; i < data.length; i++) {
  // console.log('-----------------------')
  console.log('Menguji untuk data #' + (i + 1));
  console.log('-----------------------');
  console.log('\tnames\t\t:'  + JSON.stringify(data[i].names));
  console.log('\tstatuses\t:' + JSON.stringify(data[i].statuses));
  console.log('\tprojects\t:' + JSON.stringify(data[i].projects));
  console.log('\ttasks\t\t:'  + JSON.stringify(data[i].tasks));
  console.log('\texpected\t:' + JSON.stringify(data[i].expected));
  console.log('\n*** Hasil: ***');
  sa(data[i].names, data[i].statuses, data[i].projects, data[i].tasks);
  console.log('------------------------------------------------------');
}

var waktuBaru = Date.now();
var lamaProsesData = (waktuBaru - waktuLama) / 1000;
console.log("Data di proses selama " + lamaProsesData + " detik");
