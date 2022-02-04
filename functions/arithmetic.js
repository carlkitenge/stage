function powerTwo(num){
    return num **2;
}

function divisiblePar5(num){
    let reste = num % 5;
    if(reste != 0){
        return false;
    }
    return true;
}

function divisiblePar3(num){
    let reste = num % 3;
    if(reste != 0){
        return false;
    }
    return true;
}

