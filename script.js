 // convert to celsius
    const temperature = document.getElementById("btnFehren").addEventListener("click", ()=>
    {
        const f = document.getElementById("temperature").value;
        if (f === "")
    {
        alert("Please enter a Temperature!");
        return;
    }
    else
    {
        let c = (f - 32) * 5/9;
        document.getElementById("result").innerHTML= f + "F&deg; = " + c.toFixed(2) + "C&deg";
    }
    });
    // convert to fahrenheit
    const temp = document.getElementById("btnCelsius").addEventListener("click", ()=>
    {
        const c = document.getElementById("temperature").value;
        if (c === "")
    {
        alert("Please enter a Temperature!");
        return;
    }
    else
    {
        let f = (c * 5/9) + 32;
        document.getElementById("result").innerHTML= c + "C&deg; = " + f.toFixed(2) + "F&deg";
    }
    });