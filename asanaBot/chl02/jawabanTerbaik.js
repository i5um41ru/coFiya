function smartAssigning(information) {
   var bestPerson = information[0];
    for (var i=1; i<information.length; i++){
        var currentPerson = information[i];
        if (currentPerson[1] == "0"){
            continue;
        }
        
        if (bestPerson[1] == "0" && currentPerson[1] == "1"){
            bestPerson = currentPerson;
            continue;
        }
        
        if (bestPerson[3] > currentPerson[3]){
            bestPerson = currentPerson;
            continue;
        }
        
        if (bestPerson[2] > currentPerson[2]){
            bestPerson = currentPerson;
            continue;
        }
    }
       
    return bestPerson[0];
}
/* dibuat oleh Richard_H */
