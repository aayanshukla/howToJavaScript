//asgnmt10
function print_table(n, i = 1) {
    if (i == 11) 
        return;
    console.log(n + " * " + i + " = " + n * i);
    i++; 
    print_table(n, i);
}

let n = 7;
print_table(n)