// Type your program in here!

function fizzbuzz(n) {
    function inner(n) {
        if (n < 1) {
            return null;
        }
        else {
            return ((n % 3 === 0) && (n % 5 === 0))
                ? pair("fizzbuzz", inner(n-1))
                : (n % 3 === 0)
                ? pair("fizz", inner(n-1))
                : (n % 5 === 0)
                ? pair("buzz", inner(n-1))
                : pair(n, inner(n-1));
        }
    }
    return reverse(inner(n));
}

// fizzbuzz(15);


function fizzbuzzer(n, ls) {
    let res = enum_list(1, n);
    const fn = pr => x => 
    
}


fizzbuzzer(6, list(pair(1, "a"), pair(2, "ha"), pair(3, "haha")));


function make_empty_frame() {
    return list();
}

function insert(frame, name, value) {
    frame = append(frame, pair(name,value));
    return frame;
}

function get(frame, name) {
    
}

// let sucka = make_empty_frame();
// display(insert(sucka, "define", 1));
// display(insert(sucka, "define", 1 + 3));


function swap(matrix, k) {
    if (k === array_length(matrix)){
        return matrix;
    }
    else {
        let curr_row = matrix[k];
        let bot_row = matrix[k + 1];
        let curr_left = curr_row[0];
        let bot_left = bot_row[0];
        if (curr_left === 0) {
            let temp = matrix[k];
            matrix[k] = matrix[k + 1];
            matrix[k + 1] = temp;
        }
        return matrix;
    }
    
}

let matrix1 = [[0, 2, 1, -8], [1, -2, -3, 0], [-1, 1, 2, 3]];


function eliminate(matrix, k) {
    let selected = matrix[k];
    let x = matrix[k][k];
    
    for (let i = k + 1; i < array_length(matrix); i = i + 1) {
        if (matrix[i][k] !== 0) {
            let change = matrix[i][k]/ - x;
            for (let c = 0; c < array_length(matrix[0]); c = c + 1) {
                matrix[i][c] = matrix[i][c] + change * selected[c];
            }
        }
    }
    return matrix;
}

//eliminate(matrix1, 0);
//eliminate(matrix1, 1);


function gaussian_elimination(matrix) {
    for (let c = 0; c < array_length(matrix) - 1; c = c + 1) {
        swap(matrix, 0);
        eliminate(matrix, c);
    }
    return matrix;
}

// gaussian_elimination(matrix1);



