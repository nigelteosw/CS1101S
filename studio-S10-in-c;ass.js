function rotate_matrix(M) {
    const len = array_length(M);
    function swap(i, j, M){
        const temp = M[i][j];
        M[i][j] = M[j][i];
        M[j][i] = temp;
    }
    
    for (let i = 0; i < len; i = i + 1){
        for (let j = 0; j < i; j = j + 1) {
            swap(i, j, M);
        }
    }
    return M;
}

let my_matrix = [[1,2,3,4]
                ,[5,6,7,8]
                ,[9,10,11,12]
                ,[13,14,15,16]];
                
rotate_matrix(my_matrix);