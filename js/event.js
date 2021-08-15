function makeRed(){
    document.body.style.backgroundColor='red';
}


//set onclick by giving id and set function name
const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//green button by setting the function
const greenBtn = document.getElementById("green-btn");
greenBtn.onclick = function (){
    document.body.style.backgroundColor = "green";
}

// golden rod btn using eventlistener
const gold = document.getElementById("goldenrod-btn");
        gold.addEventListener('click', makeGolden);

        function makeGolden(){
            document.body.style.backgroundColor='GoldenRod';
        }
// pink btn by writing full function inside the eventlistener
const pink = document.getElementById("pink-btn");
        pink.addEventListener('click', 
        function makePink(){
            document.body.style.backgroundColor='pink';
        });

 //direct eventlistener
 document.getElementById("lightblue-btn").addEventListener('click', function makeLightBlue(){
    document.body.style.backgroundColor="lightblue";
});


