function tower(){
    for ( index = 0; index <= 19; index++) {
        console.log(index)
        result=Math.floor(index / 4) % 2
        console.log("result: "+result)
        if (result == 0)console.log(" dibujar")
        else console.log("no dibujar")
    }
}

function chooseSlot(){
    for (let i = 0; i < 8; i++) {
        console.log(i)
        result= i % 2 + 1
        console.log("result: "+result)
    }
}

chooseSlot()