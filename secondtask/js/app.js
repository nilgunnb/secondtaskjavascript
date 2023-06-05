function Change(){
    let input_value = document.getElementById('input').value;
    let mode = input_value.slice(-3,-2);
    console.log(mode);
    if (mode === "1"){
        document.getElementById('input').style.color = "yellow";
    }

    else if(mode === "2"){
        document.getElementById('input').style.color = "red";
    }

    else if (mode === "3"){
        document.getElementById('input').style.color = "black";
    }

    else{
        alert("Invalid group name");
    }

    if (document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
    }
    else{
        document.body.style.backgroundColor = "black";
    }
}


