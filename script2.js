    // aap method
    let arr=[1, 2, 3, 4, 5]

    let result = arr.map((x)=>x)
    console.log(result);



    let scores = [12,7,22,15,32,6,4,27,11,16]
    let highscores = 
    scores.filter((score)=> {
 
        if(score>=15){
          console.log(score,"pass")
                
        }
     else{
           console.log(score,"fail")
     }
    });