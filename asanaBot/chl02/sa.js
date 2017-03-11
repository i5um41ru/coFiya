var data = require('./data_input');
var smartAssigning = function(names, statuses, projects, tasks) {
  available = [];
  for (var i = 0; i < names.length; i++) {
    if (statuses[i] == false) {
      available.push(names[i]);
    }
  }  
  // jika hasil cuma satu maka tampilkan
  if (available.length == 1) {
    // console.log("ada hasil");
    // return JSON.stringify(available[0]);
    console.log('>');
    console.log('> ' + available[0]);
    console.log('> ');
    // console.log('typeof ' + typeof(available[0]));
  } else {
  // :: bantuan ::
  // console.log('Terdapat lebih dari satu programmer yang sedang tidak liburan');
  
  // data lebih dari satu maka proses lagi
    minTask = {
      terendah: '',
      jumlah: []
    };
    for (x in statuses) {
      if (x == 0) {
        if (statuses[x] == false) {
          minTask.terendah = tasks[x];
          minTask.jumlah.push(tasks[x]);
        }
      } else {
        // nilai dari statuses[x] juga harus `false`
        if (statuses[x] == false) {
          if (tasks[x] < minTask.terendah) {
            minTask.jumlah = [tasks[x]]; // perbaharui daftar
            minTask.terendah = tasks[x]; // perbaharui nilai
          } else if (tasks[x] == minTask.terendah) {
            minTask.jumlah.push(tasks[x]);
          }
        }
      }
    }
    
    // :: bantuan ::
    // console.log("Nilai pekerjaan terendah: " + JSON.stringify(minTask));
    
    if (minTask.jumlah.length == 1) {
      console.log('>');
      console.log('> ' + names[tasks.indexOf(Number(minTask.jumlah[0]))]);
      console.log('>');
    } else {
      // :: bantuan ::
      /*
      console.log('>');
      console.log('> ::: MASIH ADA YANG PERLU DI PROSES :::');
      console.log("> Nilai pekerjaan terendah: " + JSON.stringify(minTask));
      console.log('>');
      */
      
      minProjects = {
         terendah: null
      };
      for (x in projects) {
        // nilai tasks[x] harus merupakan nilai terendah
        if (tasks[x] == minTask.terendah) {
          // :: bantuan ::
          // console.log('> Nilai tasks[x] : ' + tasks[x]);
          if (minProjects.terendah == null) {
            minProjects.terendah = projects[x];
            // console.log('> Memproses yang ke #' + x + ' dimana minProjects.terendah = ' + minProjects.terendah);
          } else {
            // console.log('> Memproses yang ke #' + x);
            if (minProjects.terendah > projects[x]) {
              minProjects.terendah = projects[x];
            }
            // console.log('> Memproses yang ke #' + x + ' dimana minProjects.terendah = ' + minProjects.terendah);
          }
        }
      }
      // :: bantuan ::
      // console.log('> Hasil: ' + minProjects.terendah);
      console.log('>');
      console.log('> ' + names[projects.indexOf(Number(minProjects.terendah))]);
      console.log('>');
    }
  }
};
module.exports = smartAssigning;
