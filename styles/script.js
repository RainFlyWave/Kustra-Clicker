var currentDPS = 1;
var DPSlvl = 1;
var basicHP = 100;
var currentHP = basicHP;
var nextHP = 300;
var enemyId = 1;



function gameTime(){
    document.getElementById('actualDPS').innerText = currentDPS;
    document.getElementById('lvlDPS').innerText = "LVL."+DPSlvl;
    document.getElementById('actualHP').innerText = currentHP;
    document.getElementById('dpsbutton').innerText = "+ "+(parseFloat((currentDPS * 1.5)-currentDPS)).toFixed(0)+" DPS";




}

function changeEnemy(){
    if(enemyId == 1){
        document.getElementById('enemyImg').setAttribute('src', './assets/enemies/bullet2.png');
        enemyId = 2;
        currentHP = nextHP;
        nextHP *= 5;
        return gameTime();
    }
    else if(enemyId ==2){
        document.getElementById('enemyImg').setAttribute('src', './assets/enemies/bullet1.png');
        enemyId = 1;
        currentHP = nextHP;
        nextHP *= 5;
        return gameTime();

    }
}


function disableProp(){

    //currently disabled, im so lazy :(
    document.getElementById('upgradeButton1').style.backgroundColor = "gray";
    document.getElementById('upgradeButton2').style.backgroundColor = "gray";
    document.getElementById('upgradeButton3').style.backgroundColor = "gray";
    document.getElementById('upgradeButton4').style.backgroundColor = "gray";
}


function hitEnemy(){
    if(currentHP-currentDPS < 0){
        currentHP = 0;
        changeEnemy();
    }else if(currentHP-currentDPS > 0){
        currentHP -= currentDPS;
    }
    

    return gameTime();
}


function addDPS(){
    currentDPS = (parseFloat(currentDPS * 1.5)).toFixed(0);
    DPSlvl +=1;
    return gameTime();

}



function init(){
    document.getElementById('lvlDPS').innerText = "LVL.1";
    document.getElementById('actualHP').innerText = basicHP;
    document.getElementById('enemyImg').setAttribute('src', './assets/enemies/bullet1.png');
   
    
    disableProp();
   
}


init();


document.getElementById('buttonDPS').addEventListener('click', addDPS);
document.getElementById('enemy').addEventListener('click', hitEnemy);