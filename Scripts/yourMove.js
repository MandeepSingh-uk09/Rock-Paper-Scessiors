//Set your move

function yourMove(move){
    if(move==='ROCK'){
        const you= document.querySelector('.js-you');
        you.src="Images/YourMove/Rock.png"
        const general_movetxt= document.querySelector('.js-general-movetxt-you');
        general_movetxt.innerHTML='Rock';
    }
    else if(move==='PAPER'){
        const you= document.querySelector('.js-you');
        you.src="Images/YourMove/Paper.png"
        const general_movetxt= document.querySelector('.js-general-movetxt-you');
        general_movetxt.innerHTML='Paper';
    }
    else if(move==='SCISSORS'){
        const you= document.querySelector('.js-you');
        you.src="Images/YourMove/Scissors.png";
        const general_movetxt= document.querySelector('.js-general-movetxt-you');
        general_movetxt.innerHTML='Scissors';
    }
}