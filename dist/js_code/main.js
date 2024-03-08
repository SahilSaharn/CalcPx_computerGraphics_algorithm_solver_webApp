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

const line_draw_main = (mode)=> {
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
        } else{
            throw new Error("Invalid Algorithm. Mode")
        }
        showResult(result)
        unlogError()
        setTimeout( ()=> togglePxLoader() , Math.floor(Math.random() * (2000 - 500 + 1) + 500))

    } catch(err) {
        console.log(err.message);
        logError(err.message)
    }

}

const circle_draw_main = (mode) => {
    // console.log(' iam a circle draw main ')

    try{

        const centerx = validateAndConvNumber( document.getElementById('centerXCoOrdinate').value )
        const centery = validateAndConvNumber( document.getElementById('centerYCoOrdinate').value )
        const rad = validateAndConvNumber( document.getElementById('radius').value )
        console.log(centerx, centery , rad)

        if( rad < 0) {
            throw new Error("Radius cannot Be Negative")
        }

        //till here all inputs are validated...
        togglePxLoader()
        let result = null;

        if(mode === "circle_draw_midpoint"){
            result = midPointCircleDrawCalc(centerx  , centery  ,rad)
        } else if (mode === "circle_draw_bresenham"){
            result = bresenhamCircleDrawCalc(centerx  , centery  ,rad)
        } else{
            throw new Error("Inavlid Algorithm. Mode")
        }

        showResult(result)
        unlogError()
        setTimeout( () => togglePxLoader() , Math.floor(Math.random() * (2000 - 500 + 1) + 500))
        
    } catch ( err ) {
        console.log(err.message)
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

    if(array.length === 0){
        result_ele.innerHTML = "No result..."
        return 
    }

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


const midPointCircleDrawCalc = ( x , y , rad) => {

    let start = {x : 0 , y : rad} , dp = 1 - rad;
    let result = new Array()
    if(rad <= 0)
        return result

    while( start.x < start.y ){
        result.push({ x : start.x  , y : start.y },  { x: start.y , y : start.x })
        // console.log(start.x, start.y , dp)
        start.x++
        if( dp < 0 ){
            dp += 2 * start.x + 1
        } else {
            start.y--
            dp += (start.x * 2) - (start.y * 2) +1
        }
    }

    let newResult = new Array()

    for(let i = 0 ; i < result.length ; i++){
        let ele = result[i]

        // 1st quadrant
        newResult.push( { x : ele.x + x , y : ele.y + y } )
    
        //2nd quadrant
        newResult.push( { x: (-ele.x) + x , y : (ele.y) + y } )

        //3rd quadrant
        newResult.push( { x: (-ele.x) + x , y : (-ele.y) + y } )

        //4th quadrant
        newResult.push( { x: (ele.x) + x , y : (-ele.y) + y } )
    }

    return newResult
}


const bresenhamCircleDrawCalc = ( x , y , rad) => {

    //bresenham circle draw...
    console.log("i am bresenhams");
    
    let start = {x : 0 , y : rad} , dp = 3 - 2*(rad);
    let result = new Array()
    if(rad <= 0)
        return result

    while( start.x < start.y ){

        result.push({ x: start.x  , y: start.y },  { x: start.y , y: start.x })
        // console.log(start.x, start.y , dp)
        start.x++
        if( dp < 0 ){
            dp += 4 * start.x + 6
        } else {
            start.y--
            dp += 4 * (start.x - start.y) +10
        }

    }
    
    let newResult = new Array()

    for(let i = 0 ; i < result.length ; i++){
        let ele = result[i]

        // 1st quadrant
        newResult.push( { x : ele.x + x , y : ele.y + y } )
    
        //2nd quadrant
        newResult.push( { x: (-ele.x) + x , y : (ele.y) + y } )

        //3rd quadrant
        newResult.push( { x: (-ele.x) + x , y : (-ele.y) + y } )

        //4th quadrant
        newResult.push( { x: (ele.x) + x , y : (-ele.y) + y } )
    }

    return newResult
}