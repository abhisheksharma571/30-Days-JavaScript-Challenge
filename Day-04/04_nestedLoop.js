//Task 7: Write a program to a pattern using nested for loops.
for(let i=1;i<=5;i++){
    let pattern = '';
    for(let j=1;j<=i;j++){
        pattern += '*';
    }
    console.log(pattern); 
}
//By concatenating all items into a single string and then printing that string once with console.log(), you ensure that everything is printed on the same line.


//or it can be solved like this also 

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write('*');
    }
    //console.log();
    process.stdout.write('\n');   //newline character
}
//process.stdout.write(): This method is used in Node.js to write output without automatically adding a newline. It's useful for real-time updates or printing multiple items on the same line.

