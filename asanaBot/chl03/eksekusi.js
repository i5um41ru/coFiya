var data = require('./data_input');
var rT = require('./rT');

var waktuLama = Date.now();

console.log('===============================================');
console.log('Asana bot challange #03');
console.log('===============================================');

for (var i = 0; i < data.length; i++) {
  // console.log('-----------------------')
  console.log('Menguji input data ke #' + (i + 1));
  console.log('-----------------------');
  console.log('\tfirstDate\t:'  + JSON.stringify(data[i].firstDate));
  console.log('\tk\t\t:' + JSON.stringify(data[i].k));
  console.log('\tdaysOfTheWeek\t:' + JSON.stringify(data[i].daysOfTheWeek));
  console.log('\tn\t\t:'  + JSON.stringify(data[i].n));
  console.log('\texpected\t:' + JSON.stringify(data[i].expected));
  console.log('\n*** Hasil: ***');
  hasil = rT(data[i].firstDate, data[i].k, data[i].daysOfTheWeek, data[i].n);

  console.log('>');
  if (hasil == data[i].expected) {
    console.log('> ' + JSON.stringify(hasil) + ' == ' + JSON.stringify(data[i].expected));
    console.log('> status: BERHASIL');
  } else {
    console.log('> ' + JSON.stringify(hasil) + ' != ' + JSON.stringify(data[i].expected));
    console.log('> status: GAGAL');
  }
  console.log('>');
  console.log('------------------------------------------------------');
}

var waktuBaru = Date.now();
var lamaProsesData = (waktuBaru - waktuLama) / 1000;
console.log("Data di proses selama " + lamaProsesData + " detik");
