function smartAssigning(names, statuses, projects, tasks) {
  
    availble = names.map((name, i) => {
        if ( statuses[i] === false ) {
            return { 
                name, 
                status: false, 
                project: projects[i], 
                task: tasks[i]
            }
        }
    }).filter((ava) => ava);
    
    availble.sort((a, b) => {
        if ( b.task === a.task ) {
            return a.project - b.project;
        }
        return a.task - b.task;
    });
    return availble[0].name;
}


function smartAssigning(names, statuses, projects, tasks) {
    var res;
    statuses.forEach(function(item, i) {
        if(item) {
            names.splice(i, 1);
            statuses.splice(i, 1);
            tasks.splice(i ,1);
            projects.splice(i, 1);
        }
    });
    if(names.length === 1) {
        return names[0];
    }
    console.log(tasks, projects);
    for(var i = 0; i < tasks.length; i++) {
        for(var j = i + 1; j < tasks.length; j++) {
            if(tasks[i] < tasks[j]) {
                res =  names[i];
            }
            if(tasks[j] < tasks[i]) {
                res =  names[j];
            }
            if (tasks[j] === tasks[i]) {
                if(projects[i] < projects[j]) {
                    res = names[i];
                }
                if(projects[j] < projects[i]) {
                    res = names[j];
                }
            }
        }
    }
    return res;
}

function smartAssigning(names, statuses, projects, tasks) {
    var i = 0;
    var employee = {
        name : null,
        project : 0,
        task : 0
    };
    for(i; i < names.length; i++){
        if (statuses[i] !== false) continue;
        if(employee.name === null){
            employee.name = names[i];
            employee.project = projects[i];
            employee.task = tasks[i];
        }else{
            if(tasks[i] < employee.task ){
            employee.name = names[i];
            employee.project = projects[i];
            employee.task = tasks[i];
            }else if(tasks[i] === employee.task){
                if(projects[i] < employee.project){
                    employee.name = names[i];
            employee.project = projects[i];
            employee.task = tasks[i];
                }
            }
        }
    }
    return employee.name;
}
        
function smartAssigning(names, statuses, projects, tasks) {

    var index = 0;
    var lowTasks = Infinity;
    var lowProjects = Infinity;
    
    for (var i = 0 ; i <= tasks.length; i++) {
        if (
            (
                tasks[i] < lowTasks ||
                ( tasks[i] === lowTasks && projects[i] < lowProjects )
            ) && statuses[i] === false
        ) {
            index = i;
            lowTasks = tasks[i];
            lowProjects = projects[i];
        }
    }
    
    return names[index];
}

function smartAssigning(names, statuses, projects, tasks) {
//on vacation
var index = 0;
    var arr = [names, statuses, projects, tasks];
for(var i = 0; i < statuses.length; i++)
    {
        if(statuses[i])
            {
               //remove names from array
                delete arr[0][i];
                delete arr[1][i];
                delete arr[2][i];
                delete arr[3][i];
            }
    }
    
    var array = arr[3].slice(0);
    array = array.sort((a, b) => a - b);
    var min = array[0];
    for(var i = 0; i < arr[3].length; i++)
        {
           
            if(arr[3][i] > min)
                {
                delete arr[0][i];
                delete arr[1][i];
                delete arr[2][i];
                delete arr[3][i];   
                }
        }
    
     array = arr[2].slice(0);
    array = array.sort((a, b) => a - b);
    min = array[0];
    
    for(var i = 0; i < arr[2].length; i++)
        {
            if(arr[2][i] == min)
                {
                return arr[0][i];   
                }
        }
  //  return arr[0][0];
}


function smartAssigning(names, statuses, projects, tasks) {
    
    var combined = [];
    
    for(var i = 0; i < names.length; i++){
        combined[i] = {
            names: '',
            statuses: false,
            projects: 0,
            tasks: 0
        }
        combined[i].names = names[i];
        combined[i].statuses = statuses[i];
        combined[i].projects = projects[i];
        combined[i].tasks = tasks[i];
    }
    
    combined.sort(function(a,b){
        return a.tasks - b.tasks || a.projects - b.projects;
    });
    
    for(var i = 0; i < combined.length; i++){
    
        if(combined[i].statuses)
            continue;
        
        return combined[i].names;
    }
}

function smartAssigning(names, statuses, projects, tasks) {
    var people = [];
    names.forEach(function(e, i){
        if (!statuses[i]){
            var person = {name: e, projects: projects[i], tasks: tasks[i]}
            people.push(person);
        }
    });
    var lowestAvail = Infinity;
    var chosenOne = "";
    
    people.forEach(function(e, i) {
        e.avail = 2*e.tasks + e.projects;
        if (e.avail < lowestAvail) {
            lowestAvail = e.avail;
            chosenOne = e.name;
        }
    });
    
    return chosenOne;
}

function smartAssigning(names, statuses, projects, tasks) {
  var ok=names.map((x,i)=>({n:names[i],s:statuses[i],p:projects[i],t:tasks[i]}))
              .filter(x=>!x.s).sort((a,b)=>a.t-b.t||a.p-b.p)
  console.log(ok)
  return ok[0].n
}


function smartAssigning(names, statuses, projects, tasks) {
    var resultIndex = 0;
    var minTasks = tasks[resultIndex];
    var minProjects = projects[resultIndex];
    for(var i = resultIndex + 1; i < names.length; i++){
        if (statuses[i] == true)
            continue;
        if (minTasks > tasks[i])
            {
                resultIndex = i;
                minTasks = tasks[i];
                minProjects = projects[i];
            }
        else if (minTasks == tasks[i] && minProjects > projects[i])
            resultIndex = i;
    }
    return names[resultIndex];
}

