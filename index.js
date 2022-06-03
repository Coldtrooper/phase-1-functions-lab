// Code your solution in this file!
function distanceFromHqInBlocks(start){
    if (start < 42){
    return 42 - start 
    }
    return start - 42
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264
}
function distanceTravelledInFeet(beginning, end){
    if (beginning > end){
        return (beginning - end) * 264 
    }
    return (end - beginning) * 264
}
function calculatesFarePrice(beginning, end){
    console.log (distanceTravelledInFeet(beginning, end))
    if (distanceTravelledInFeet(beginning, end) <= 400){
        return 0 
    }
    else if (distanceTravelledInFeet(beginning,end) > 400 && (distanceTravelledInFeet(beginning, end)) <= 2000){
        return (distanceTravelledInFeet(beginning, end) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(beginning, end) > 2000 && distanceTravelledInFeet(beginning, end) <= 2500){
       return 25
    }
    return "cannot travel that far"
    
   
   
}
    
 