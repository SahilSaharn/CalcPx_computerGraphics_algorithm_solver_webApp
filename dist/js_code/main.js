
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