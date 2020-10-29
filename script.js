function getMatrixDet(matrix) {
    let det = null;

    if (matrix.length !== matrix[0].length) {
        return 'Колонок и строк должно быть равное количество'
    }
    else if (matrix.length > 2) {
        matrix[0].forEach((el, i) => {
            const matrixBelowLevel = [];

            for(let k = 1; k < matrix.length; k++) {
                matrixBelowLevel.push([]);
                matrix[k].forEach((el, j) => {
                    if (j != i) {
                        matrixBelowLevel[k-1].push(el)
                    }
                })
            }

            if (i % 2) {
                return  det -= el * getMatrixDet(matrixBelowLevel);
            } else {
                return  det += el * getMatrixDet(matrixBelowLevel);
            }
        })
    }
    else if (matrix.length === 2) {
        det = matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];
    }
    else if (matrix.length === 1) {
        det = matrix[0][0];
    }

    return det
}

const matrix = [
    [1, 2, 2, 2, 2, 2, 3],
    [-1, 4, 2, 5, 4, 2, 5],
    [-1, 6, 4, -1, 6, 4, 7],
    [8, 4, 1, 2, 5, 4, -7],
    [-8, 9, 4, 4, -1, 6, 7],
    [8, 5, -1, 6, 7, 9, 7],
    [-7, 9, 4, 4, 4, 4, -5]
];

// const matrix = [[4]];


console.log(getMatrixDet(matrix));