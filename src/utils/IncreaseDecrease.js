export const handleDecrease = (statValue,minValue) => {
    if(statValue > minValue){
    return statValue - 1;
    }
    return statValue
};

export const handleIncrease = (statValue,maxValue) =>{
    if(statValue < maxValue){
    return statValue + 1;
    }
    return statValue
};

export const handleIncrease10 = (statValue,maxValue) =>{
    if((statValue+10) <= maxValue){
    return statValue + 10;
    }
    return statValue
};

export const handleDecrease10 = (statValue,minValue) =>{
    if((statValue-10) >= minValue){
    return statValue - 10;
    }
    return statValue;
};

export const handleIncrease100 = (statValue,maxValue) =>{
    if((statValue+100) <= maxValue){
        return statValue + 100;
    }
    return statValue;
};

export const handleDecrease100 = (statValue,minValue) =>{
    if((statValue-100) >= minValue){
        return statValue - 100;
    }
    return statValue;
};