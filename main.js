let field = document.getElementById('field');
let axisY = document.getElementById('axis-y');
let axisX = document.getElementById('axis-x');

let list = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
let maxValue = Math.max(...list);


//settings for respinsiveness
field.style.height = (maxValue + 1)*30 + 'px';
axisY.style.height = (maxValue + 1)*30 + 'px';
axisX.style.width = (list.length + 1)*20 + 'px';


// build axis Y
for(let i = 0; i <= maxValue; i++){
    let div = document.createElement('div');
    div.innerHTML = i;
    div.className = 'value-y';
    axisY.appendChild(div);
}

//build axis X
for(let i = 1; i <= list.length; i++){
    let div = document.createElement('div');
    div.innerHTML = i;
    div.className = 'value-x';
    axisX.appendChild(div);
}

//build field
list.forEach(el => {
    let div = document.createElement('div');
    div.style.height = el * 30 + 'px';
    div.style.marginTop = (maxValue + 1)*30 - el*30 + 'px';
    div.style.backgroundColor = getColor(el);
    div.className = 'column';
    field.appendChild(div); 
})


//function to get color
function getColor(element){
    if(element >= 0 && element <= 5){
        return '#19d122';
    }
    else if(element >= 6 && element <=10){
        return '#faff0c';
    } 
    else if(element >= 10){
        return '#d12c12';
    }
}

