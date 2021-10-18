function rotate_matrix(M) {
    const len = array_length(M);
    function swap(i, j, M){
        const temp = M[i][j];
        M[i][j] = M[j][i];
        M[j][i] = temp;
    }
    
    function swap_d(A, i, j) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    
    function reverse_array(A) {
        const len = array_length(A);
        const half_len = math_floor(len / 2);
        let i = 0;
        while (i < half_len) {
            const j = len - 1 - i;
            swap_d(A, i, j);
            i = i + 1;
        }
    }
    for (let i = 0; i < len; i = i + 1){
        for (let j = 0; j < i; j = j + 1) {
            swap(i, j, M);
        }
    }
    for (let c = 0; c < len; c = c + 1){
        reverse_array(M[c]);
    }
    return M;
}

let my_matrix = [[1,2,3,4]
                ,[5,6,7,8]
                ,[9,10,11,12]
                ,[13,14,15,16]];
                
rotate_matrix(my_matrix);