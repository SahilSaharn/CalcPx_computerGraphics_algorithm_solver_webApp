const logError = (errMsg) => {
    const errDisplay = document.getElementById('err-msg-log')
    errDisplay.style.display = "block"
    errDisplay.innerHTML = errMsg + "!"
}

//validates and returns the number elses thrws the error
const validateAndConvNumber = ( num_str ) => {
    try{

        if(num_str.trim() === "")
            throw new Error("All fields are required ")
        
        const num = Number(num_str)
        if( isNaN(num) )
            throw new Error("Only Numbers are allowed as co-ordinates")
        else if( !Number.isInteger(num) )
            throw new Error("Only Integers are allowed as co-ordinates")
        else return num

    } catch (err) {
        //thrown again to the parent function...
        throw err
    }
}

const main2d = (code)=> {
    //this is the main fnctn which will take the algo_code and coordinates
    try{

        //getting the inputed values and validating it...
        let startx = validateAndConvNumber(document.getElementById('startXCoOrdinate').value)
        let starty = validateAndConvNumber(document.getElementById('startYCoOrdinate').value)
        let endx = validateAndConvNumber(document.getElementById('endXCoOrdinate').value)
        let endy = validateAndConvNumber(document.getElementById('endYCoOrdinate').value)
        
        console.log(startx , starty, endx , endy)

        //here we have the all vaildated coordinates and now we just have to get the result!
        togglePxLoader()
        const result = ddaCalc(startx,starty, endx, endy);
        showResult(result)
        setTimeout( ()=> togglePxLoader() , Math.floor(Math.random() * (2000 - 500 + 1) + 500))

    } catch(err) {
        console.log(err.message);
        logError(err.message)
    }

}


//this takes all the input elements having class [cordinate-inputs] and remove its content to reset them.
const resetInputs = () => {
    const input_flds = document.getElementsByClassName('cordinate-inputs')
    // console.log(input_flds)

    for(let i= 0 ; i < input_flds.length ; i++)
        input_flds[i].value = "";

    const errDisplay = document.getElementById('err-msg-log').style.display = 'none'

}

const showResult = (array) => {
    const result_ele = document.getElementById('result-cont')
    let result_str = ""
    array.map( ele => result_str += `<span class="inline-block px-2 py-1 rounded-md m-1 ">[${ele.x} , ${ele.y}]</span>` )
    // console.log(result_str)
    result_ele.innerHTML = result_str

}


const ddaCalc = (startx, starty, endx, endy) => {
    
    // console.log(startx, starty , endx , endy)
    let dx = endx - startx , dy = endy - starty;
    let steps = Math.max( dx , dy )
    if(steps < 0) steps = -steps

    let x_inc = dx/steps , y_inc = dy/steps
    let swapped= false
    if( x_inc > 1 || x_inc < -1 || y_inc > 1 || y_inc < -1){
        // console.log('i am wrong block')
        swapped = true
        //then we need to swap the start and end coords and calc new dx , dy , steps , x_inc & y_inc
        let temp = startx
        startx = endx
        endx = temp

        temp = starty
        starty = endy
        endy = temp
        //coords swappped...

        dx = endx-startx, dy = endy- starty, steps = Math.max(dx , dy)
        x_inc = dx / steps , y_inc = dy /steps
    }

    steps++
    console.log( x_inc , y_inc , steps )

    let result = new Array()
    while(steps--){
        let curr_x = Math.round(startx)
        let curr_y = Math.round(starty)

        result.push({x: curr_x , y :curr_y})
        startx += x_inc
        starty += y_inc
    }

    if(swapped)
        result.reverse()

    return result
}