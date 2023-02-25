const call = () => {
    // if(!fetchHighScore()) {
        setHighScore("0")
    // }
    let secretnumber = Math.ceil(Math.random() * 20);

    let score = document.querySelector('.score').textContent;
    let highscore = document.querySelector('.highscore').textContent = Number(fetchHighScore()) || 0
    

    console.log("secret number", secretnumber)
    document.querySelector('.checkbutton').addEventListener('click',
        function (e) {
            e.preventDefault()
            let openNum = document.querySelector('.enternum').value;
            let message = document.querySelector('.startguessing').textContent;
            //let highscore = document.querySelector('.highscore').textContent;
            // let score = document.querySelector('.score').textContent;
            if (openNum == secretnumber) {
                document.querySelector('.secretnum').textContent = "secretnumber";

            } else {
                document.querySelector('.secretnum').textContent = '?';
            }

            // if(score>highscore){
            //     document.querySelector('.highscore').textContent = score;
            // }else{
            //     document.querySelector('.highscore').textContent = highscore;
            // }


            console.log("open number", openNum)

            console.log(openNum);
            // conditions()
            // openNum = document.querySelector('.enternum').value;
    
    
    if (!openNum) {
        let messageone = "Start guessing"
        document.querySelector('.startguessing').textContent = messageone;
        document.querySelector('.secretnum').textContent = '?'
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;

    }
    else if (openNum == secretnumber) {
        let messagetwo = "Correct Number";
        
        document.querySelector('.startguessing').textContent = messagetwo
        
        if(score>highscore){
            document.querySelector('.highscore').textContent = score;
            setHighScore(score)
        }else{
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.score').textContent = score;
        // document.querySelector('.highscore').textContent = score;

        document.querySelector('.secretnum').textContent = secretnumber

       

    }
    else if (openNum <= secretnumber) {
        let messagethree = "Too Low";
        document.querySelector('.startguessing').textContent = messagethree
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.secretnum').textContent = '?'
    }
    else if (openNum >= secretnumber) {
        let messagefour = "Too High";
        document.querySelector('.startguessing').textContent = messagefour
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.secretnum').textContent = '?'

    }
    
})
    

            
//AGAIN BUTTON
        

        document.querySelector('.again').addEventListener("click",function(e){
            e.preventDefault()
            let secretnumber = Math.ceil(Math.random() * 20);
            console.log("secretnumber",secretnumber)
            let nullvalue = null;
            document.querySelector('.enternum').value = nullvalue;
            let openNum=document.querySelector('.enternum').value;
            console.log("open number",openNum)
            // if (openNum==secretnumber) {
            //     document.querySelector('.secretnum').textContent = secretnumber
            // }else{
            //     document.querySelector('.secretnum').textContent = '?'
            // }
            
            document.querySelector('.startguessing').textContent = "Start Guessing...."
            let score=20
             document.querySelector('.score').textContent = score
            //let score = document.querySelector('.score').textContent;
            
    
            
    
    if (!openNum) {
        let messageone = "Start guessing"
        document.querySelector('.startguessing').textContent = messageone;
        document.querySelector('.secretnum').textContent = '?'
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;

    }


    else if (openNum == secretnumber) {
        let messagetwo = "Correct Number";
        
        document.querySelector('.startguessing').textContent = messagetwo
        
        if(score>=highscore){
            document.querySelector('.highscore').textContent = score;
            setHighScore(score)
        }else{
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.score').textContent = score;
        // document.querySelector('.highscore').textContent = score;

        document.querySelector('.secretnum').textContent = secretnumber
    }


    else if (openNum <= secretnumber) {
        let messagethree = "Too Low";
        document.querySelector('.startguessing').textContent = messagethree
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.secretnum').textContent = '?'
    }
    else if (openNum >= secretnumber) {
        let messagefour = "Too High";
        document.querySelector('.startguessing').textContent = messagefour
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.secretnum').textContent = '?'

    }

            // document.querySelector('.secretnum').textContent = secretnumber;
           // document.querySelector('.highscore').textContent = score;

        })
        

}


window.addEventListener('DOMContentLoaded', call)

function fetchHighScore() {

   const highscore1 = localStorage.getItem('highscore')

   return highscore1
}


function setHighScore(value) {
    localStorage.setItem('highscore', String(value))
}


    // let openNum = document.querySelector('.enternum').value;
    
    
    // if (!openNum) {
    //     let messageone = "Start guessing"
    //     document.querySelector('.startguessing').textContent = messageone;
    //     document.querySelector('.secretnum').textContent = '?'
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.highscore').textContent = score;

    // }
    // else if (openNum == secretnumber) {
    //     let messagetwo = "Correct Number";
        
    //     document.querySelector('.startguessing').textContent = messagetwo
        
    //     if(score>highscore){
    //         document.querySelector('.highscore').textContent = score;
    //         setHighScore(score)
    //     }else{
    //         document.querySelector('.highscore').textContent = highscore;
    //     }
    //     document.querySelector('.score').textContent = score;
    //     // document.querySelector('.highscore').textContent = score;

    //     document.querySelector('.secretnum').textContent = secretnumber

       

    // }
    // else if (openNum <= secretnumber) {
    //     let messagethree = "Too Low";
    //     document.querySelector('.startguessing').textContent = messagethree
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.secretnum').textContent = '?'
    // }
    // else if (openNum >= secretnumber) {
    //     let messagefour = "Too High";
    //     document.querySelector('.startguessing').textContent = messagefour
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.secretnum').textContent = '?'

    // }