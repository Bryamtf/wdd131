const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
for (let i = 0; i < studentReport.length; i++) { 
   if (studentReport[i] < LIMIT) {
     console.log(studentReport[i]);
   }

}
// while
let i = 0;
while (i < studentReport.length) { 
    if (studentReport[1] < DAYS) { 
    console.log(studentReport[i]);
        
    }
    i++;
}
// forEach
studentReport.forEach(items => { 
    if (items < LIMIT) { 
        console.log(items);
    }
});
// for in loop
for (let i in studentReport) { 
    if (studentReport[i] < LIMIT) { 
        console.log(studentReport[i]);
    }
}