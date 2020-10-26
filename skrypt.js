
var nuta1 = document.getElementById('muza1');
var nuta2 = document.getElementById('muza2');
var tlo = document.getElementById('main');

function muzyczka(){
    nuta1.play();
    nuta2.play();
}

function pierwszanuta(){
    nuta1.volume = 1;
    nuta2.volume = 0;
    tlo.style.backgroundImage = "url('gorillaz1.jpg')";
    document.title = "ŻAAABSOOOON TO ZIOMAL";



    
  
}

function druganuta(){
    tlo.style.backgroundImage = "url('gorillaz2.jpg')";
    nuta1.volume = 0;
    nuta2.volume = 1;
    document.title = "FEEL GOOOOOOOD";

    
}