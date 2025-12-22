currentPlayer="X";
statusbar=document.getElementById("statusbar");
board=document.getElementById("board");
for(r=1;r<=3;r++)
    for(c=1;c<=3;c++)
    {
        let btn=document.createElement("button");
        board.appendChild(btn);
        btn.innerHTML="";
        btn.id="b"+r+c;
        btn.style.width=125;
        btn.style.height=125;
        btn.style.margin=3;
        btn.className="btn";
        btn.addEventListener("click",btnClicked)
    }


function btnClicked(e)    
{
    e.target.innerHTML=currentPlayer;
    if(checkWinner()==true)
        {
            alert("Winner is :"+currentPlayer);
            return;
        }
    if(currentPlayer=="X")
        currentPlayer="O";
    else
        currentPlayer="X";
    statusbar.innerHTML="Current Player : "+currentPlayer;
    e.target.disabled="true";
}

function checkWinner()
{
    //check horizontally
    for(r=1;r<=3;r++)
    {
        ctr=0;
        for(c=1;c<=3;c++)
        {
            let btn=document.getElementById("b"+r+c);
            if(btn.innerHTML==currentPlayer)
                ctr++;
        }
        if(ctr==3)
            return true;
    }
    //check vertically
    for(c=1;c<=3;c++)
    {
        ctr=0;
        for(r=1;r<=3;r++)
        {
            let btn=document.getElementById("b"+r+c);
            if(btn.innerHTML==currentPlayer)
                ctr++;
        }
        if(ctr==3)
            return true;
    }

    //check 1st diagonal
    ctr=0;
    for(k=1;k<=3;k++)
    {
        let btn=document.getElementById("b"+k+k);
        if(btn.innerHTML==currentPlayer)
            ctr++;
    }
    if(ctr==3)
        return true;

    //check 2nd diagonal
    ctr=0;
    for(r=1,c=3; r<=3  ; r++,c--)
    {
        let btn=document.getElementById("b"+r+c);
        if(btn.innerHTML==currentPlayer)
            ctr++;
    }
    if(ctr==3)
        return true;

return false;
}