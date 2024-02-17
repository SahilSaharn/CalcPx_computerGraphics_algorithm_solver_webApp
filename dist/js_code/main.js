const logError = (errMsg) => {
    //check element here
    const errDisplay = document.getElementById('err-msg-log')

    errDisplay.classList.remove('shake-animate')
    void errDisplay.offsetWidth

    errDisplay.style.display = "block"
    errDisplay.innerHTML = errMsg + "!"

    errDisplay.classList.add("shake-animate")
}

const unlogError = () => {
    const errDisplay = document.getElementById('err-msg-log')
    errDisplay.style.display = "none"
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

const main2d = (mode)=> {
    // console.log(mode)
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
        let result = null;
        if(mode === "line_draw_dda"){
            result = ddaLIneDrawCalc(startx,starty, endx, endy);
        } else if(mode === "line_draw_bresenham"){
            result = bresenhamLineDrawCalc(startx,starty, endx, endy);
        }
        showResult(result)
        unlogError()
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

    unlogError()

}

const showResult = (array) => {
    const result_ele = document.getElementById('result-cont')
    let result_str = ""
    array.map( ele => result_str += `<span class="inline-block px-2 py-1 rounded-md m-1 ">[${ele.x} , ${ele.y}]</span>` )
    // console.log(result_str)
    result_ele.innerHTML = result_str

}


// dda line draw algo solver...
const ddaLIneDrawCalc = (startx, starty, endx, endy) => {
    
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

// not working fix testcases ....
const bresenhamLineDrawCalc = (startx, starty, endx, endy) => {
    //refrence algorithm article... 
    //https://saturncloud.io/blog/bresenham-line-algorithm-a-powerful-tool-for-efficient-line-drawing/    console.log('i am bresenham')

    let dx = Math.abs( endx - startx ) , dy = Math.abs( endy - starty )
    
    let slope = ( dy > dx ) ? true : false

    if( slope ){
        let temp = startx
        startx = starty
        starty = temp

        temp = endx
        endx = endy
        endy = temp
    } 

    let swapped = false;
    if( startx > endx ){
        let temp = startx
        startx = endx
        endx = temp

        temp = starty
        starty = endy
        endy = temp
        swapped = true
    }

    dx = Math.abs( endx - startx ) , dy = Math.abs( endy - starty )
    let dp = (2 * dy) - dx
    let ystep = ( starty > endy ) ? -1 : 1


    // console.log(dx , dy , dp )
    let result = new Array()

    while( startx <= endx ){
        // console.log( startx , starty , dp )
        result.push( (slope) ? { x : starty, y : startx }  :{ x : startx, y : starty } )
        if( dp >= 0 ){
            starty += ystep
            dp += 2*( dy - dx )
        } else {
            dp += 2* dy
        }
        startx += 1
    }

    return (swapped) ? result.reverse()  : result

}