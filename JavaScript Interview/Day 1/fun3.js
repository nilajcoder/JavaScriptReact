function infiniteCurry(val1){
    return function(val2){
        if(!val2){
            return val1;
        }
        return infiniteCurry(val1 + val2)
    }
}

console.log(infiniteCurry(1)(2)(3)(4)(5)(6)())//21
