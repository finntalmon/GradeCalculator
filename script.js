
function onSubmit(){
    var hw = document.getElementById("hwScores").value;
    var cw = document.getElementById("cwScores").value;
    var tests = document.getElementById("testScores").value;
    var part = document.getElementById("participationScores").value;
    var proj = document.getElementById("projectScores").value;
    var hwWeight = parseInt(document.getElementById("homeworkWeight").value);
    var cwWeight = parseInt(document.getElementById("classworkWeight").value);
    var testsWeight = parseInt(document.getElementById("testWeight").value);
    var partWeight = parseInt(document.getElementById("participationWeight").value);
    var projWeight = parseInt(document.getElementById("projectWeight").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    if(hwWeight + cwWeight + testsWeight + partWeight + projWeight + finalWeight == 100){
        var hw2 = arrSplit(hw);
        var cw2 = arrSplit(cw);
        var tests2 = arrSplit(tests);
        var part2 = arrSplit(part);
        var proj2 = arrSplit(proj);
        var hw3 = avg(hw2);
        var cw3 = avg(cw2);
        var tests3 = avg(tests2);
        var part3 = avg(part2);
        var proj3 = avg(proj2);
        console.log(calculateGrade(hw3, hwWeight, cw3, cwWeight, tests3, testsWeight, part3, partWeight, proj3, projWeight, finalWeight));
        var x = calculateGrade(hw3, hwWeight, cw3, cwWeight, tests3, testsWeight, part3, partWeight, proj3, projWeight, finalWeight);
        document.getElementById("grade").innerHTML = x;
        color(1, hw3);
        color(2, cw3);
        color(3, tests3);
        color(4, part3);
        color(5, proj3);
        return x;
    }else{
        document.getElementById("grade").innerHTML = "Enter values that ad to 100";
    }
}

function arrSplit(x) {
    var arr = x.split(",");
    for(i = 0; i < arr.length; i++){
        arr[i]= parseInt(arr[i])
    }
    return arr;
}

function avg(array){
    var total = 0;
    for(i = 0; i < array.length; i++){
        total += array[i];
    }
return total/(array.length);
}

function correctWeight(weight,finalWeight){
    return (weight)/(100-finalWeight);
}

function calculateGrade(hw3, hwWeight, cw3, cwWeight, tests3, testsWeight, part3, partWeight, proj3, projWeight, finalWeight){
    var fixHwWeight = correctWeight(hwWeight, finalWeight);
    var fixCwWeight = correctWeight(cwWeight, finalWeight);
    var fixTestsWeight = correctWeight(testsWeight, finalWeight);
    var fixPartWeight = correctWeight(partWeight, finalWeight);
    var fixProjWeight = correctWeight(projWeight, finalWeight);
    return (fixHwWeight * hw3) + (fixCwWeight * cw3) + (fixTestsWeight * tests3) + (fixPartWeight * part3) + (fixProjWeight * proj3)
}

function onClick(){
    var totalAvg = onSubmit();
    var wantedGrade = parseInt(document.getElementById("gradeWanted").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    if((wantedGrade - (totalAvg * (100-finalWeight)/100))/(finalWeight/100)> 0){
        var needed = Math.round(100*(wantedGrade -(totalAvg * (100- finalWeight)/100))/(finalWeight/100))/100;
        document.getElementById("finalGradeNeeded").innerHTML = ("you need a " + needed + "% to get a " + wantedGrade + " in the class.");
    }else{
        document.getElementById("finalGradeNeeded").innerHTML = "Enter percentages that add to 100";
    }
}

function reset() {
    document.getElementById("grade").innerHTML = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("1").style.backgroundColor = "#FFFFF0";
    document.getElementById("2").style.backgroundColor = "#fffff0";
    document.getElementById("3").style.backgroundColor = "#fffff0";
    document.getElementById("4").style.backgroundColor = "#fffff0";
    document.getElementById("5").style.backgroundColor = "#fffff0";
    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    for(var i = 0; i<=12; i++){
        inputs[i].value = "";
    }
}

function color(row, grade) {
    if(grade > 100){
        document.getElementById(row).style.backgroundColor = "#00FFFF"
    }
    if (grade >= 90 && grade <= 100) {
        document.getElementById(row).style.backgroundColor = "#228B22"
    }
    if (grade < 90 && grade >= 80) {
        document.getElementById(row).style.backgroundColor = "#7FFF00"
    }
    if (grade < 80 && grade >= 70) {
        document.getElementById(row).style.backgroundColor = "#FFD700"
    }
    if(grade < 70 && grade >= 60){
        document.getElementById(row).style.backgroundColor = "#FF8C00"
    }
    if(grade < 60){
        document.getElementById(row).style.backgroundColor = "#FF0000"
    }
}