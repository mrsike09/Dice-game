function dicegame(){
    var n1 = Math.random()*6 
    n1=Math.floor(n1)+ 1
    
    var n2 = Math.random()*6
    n2 =Math.floor(n2)+ 1

    var p1score =document.getElementById("player1")
    var p2score= document.getElementById("player2")
    p1score.innerHTML= n1
    p2score.innerHTML = n2

    if(n1==n2){
        var result = document.querySelector(".result")
        result.innerHTML = "It is a draw Play again"
    } else if (n1>n2){
        var result = document.querySelector(".result")
        result.innerHTML = "Player 1 wins"
    } else{
        var result = document.querySelector(".result")
        result.innerHTML = "Player 2 wins"
    }
    

}

