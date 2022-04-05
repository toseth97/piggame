

const rollDice = document.getElementById("rollDice");
const diceImg = document.getElementById("dice");
const hold = document.getElementById("hold")
const player_1 = document.getElementById("player_1")
const player_2 = document.getElementById("player_2")
let player_1_point = document.getElementById("player_1_point")
let player_2_point = document.getElementById("player_2_point")
let current_point_1 = document.getElementById("current_point_1")
let current_point_2 = document.getElementById("current_point_2")
let winner = document.getElementById("winner")
let content = document.getElementById("content")
let okay = document.getElementById("okay")
let red1 = document.getElementById("red1")
let red2 = document.getElementById("red2")
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
const newGame = document.getElementById("new")
let current_1 = 0
let current_2 = 0
let point1 = 0
let point2 = 0
let score_1 = 0
let score_2 = 0
console.log(newGame)

window.addEventListener("load", ()=>{
    red1.classList.add("active")
})
function roll(){
    randomValue = Math.floor(Math.random() * 6) + 1;
    diceImg.setAttribute("src", "./dice" + randomValue + ".png")
    console.log(randomValue)
    return randomValue
    
}
function won(point){
    if(point >= 100 && !player_1.classList.contains("active") ){
        score_1 += 1
        current_2 = 0
        point2 = 0
        current_1 = 0
        point1 = 0
        winner.classList.add("active")
        content.innerHTML = "PLAYER 1 WON"  
        score1.innerHTML = score_1
    }
    else if (point >= 100 && !player_2.classList.contains("active") ){
        score_2 += 1
        current_2 = 0
        point2 = 0
        current_1 = 0
        point1 = 0
        winner.classList.add("active")
        content.innerHTML = "PLAYER 2 WON"  
        score2.innerHTML = score_2
    }
}

function renderGame(){
 

    if (player_1.classList.contains("active")){
        
        roll()
        if (randomValue === 1){
            current_point_1.innerHTML = 0
            current_1 = 0
            randomValue = 0
            alert("You have rolled 1 and lost this turn, it is Player 2's turn")
            player_1.classList.remove("active")
            player_2.classList.add("active")
            red2.classList.add("active")
            red1.classList.remove("active")
        }
        else{
            current_1 += randomValue
            current_point_1.innerHTML = current_1
            hold.addEventListener("click", ()=>{
                point1 += current_1
                player_1_point.innerHTML = point1
                player_1.classList.remove("active")
                red2.classList.add("active")
                red1.classList.remove("active")
                player_2.classList.add("active")
                current_1 = 0
                current_point_1.innerHTML = 0

                won(point1)
                
            })
            
            
            
        }
        
    }
    else if(player_2.classList.contains("active")){
        
        roll()
        if (randomValue === 1){
            current_point_2.innerHTML = 0
            current_2 = 0
            randomValue = 0
            alert("You have rolled 1 and lost this turn, it is Player 1's turn")
            player_1.classList.add("active")
            red1.classList.add("active")
            red2.classList.remove("active")
            player_2.classList.remove("active")
            
        }
        else{
            current_2 += randomValue
            current_point_2.innerHTML = current_2
            hold.addEventListener("click", ()=>{
                point2 += current_2
                player_2_point.innerHTML = point2
                player_2.classList.remove("active")
                red1.classList.add("active")
                red2.classList.remove("active")
                player_1.classList.add("active")
                current_2 = 0
                current_point_2.innerHTML = 0

                won(point2)
               
                
            })
            
        }
    }
    
}
console.log(rollDice)


rollDice.addEventListener("click", ()=>{
    
    renderGame()
})

okay.addEventListener("click", ()=>{
    winner.classList.remove("active")
})

function clear(){
    current_2 = 0
    current_point_2.innerHTML = 0
    randomValue = 0
    current_1 = 0
    current_point_1.innerHTML = 0
    score_1 = 0
    current_2 = 0
    point2 = 0
    current_1 = 0
    point1 = 0
    score_2 = 0
    current_2 = 0
    point2 = 0
    current_1 = 0
    point1 = 0
    score1.innerHTML = 0
    score2.innerHTML = 0
    player_1_point.innerHTML = 0
    player_2_point.innerHTML = 0
}
newGame.addEventListener("click", ()=>{
    clear()
})











