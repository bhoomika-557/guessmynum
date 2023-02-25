

const call = () => {
    if (!fetchHighScore()) {
        setHighScore("0")
    }
    let secretnumber = Math.ceil(Math.random() * 20);

    let score = document.querySelector('.score').textContent;
    let highscore = document.querySelector('.highscore').textContent = Number(fetchHighScore()) || 0
    console.log("secret number", secretnumber)
  
    //CHECK BUTTON
    document.querySelector('.checkbutton').addEventListener('click',
        function (e) {
            e.preventDefault()
             let openNum = document.querySelector('.enternum').value;
           // let message = document.querySelector('.startguessing').textContent;
            if (openNum == secretnumber) {
                document.querySelector('.secretnum').textContent = "secretnumber";

            } else {
                document.querySelector('.secretnum').textContent = '?';
            }

            console.log("open number", openNum)

            console.log(openNum);

            var message;

            if (!openNum) {
                message = "Start guessing"
                document.querySelector('.startguessing').textContent = message;
                document.querySelector('.secretnum').textContent = '?'
                document.querySelector('.highscore').textContent = score;

            }
            else if(openNum <= 0 || openNum > 20){
                message="Invalid Number";
                score=0;
            }

            else if (openNum == secretnumber) {
                 message = "CORRECT NUMBER";
                if (score > highscore) {
                    document.querySelector('.highscore').textContent = score;
                    setHighScore(score)
                } else {
                    document.querySelector('.highscore').textContent = highscore;
                }
                document.querySelector('.secretnum').textContent = secretnumber
            }

            else if (openNum <= secretnumber) {
                message = "Too Low";
                score--;
                document.querySelector('.secretnum').textContent = '?'
            }

            else if (openNum >= secretnumber) {
                message = "Too High";
                score--;
                document.querySelector('.secretnum').textContent = '?'

            }
            document.querySelector('.startguessing').textContent = message
            document.querySelector('.score').textContent = score;
            

        })



    //AGAIN BUTTON
    document.querySelector('.again').addEventListener("click", function (e) {
        e.preventDefault()
        secretnumber = Math.ceil(Math.random() * 20);
        console.log('new secret number', secretnumber)
        score = document.querySelector('.score').textContent = 20;

        highscore = document.querySelector('.highscore').textContent = Number(fetchHighScore()) || 0
        document.querySelector('.enternum').value = ""
        document.querySelector('.secretnum').textContent = '?';
        document.querySelector('.startguessing').textContent = "Start guessing..."

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

