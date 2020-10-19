function submit(){
    let w = document.getElementById("inputweight").value
    let h = document.getElementById("inputheight").value
    let result = Number(w)/(Number(h*h))
    document.getElementById("result").innerText = "BMI = "+ result.toFixed(2)
    if(result.toFixed(2)<18.5){
        alert("Underweight")
    }
    else if(result.toFixed(2)>=18.5 || result.toFixed(2)<25){
        alert("Normal")
    }
    else if(result.toFixed(2)>=25 || result.toFixed(2)<30){
        alert("Overweight")
    }
    else{
        alert("Obese")
    }
}