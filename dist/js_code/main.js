
const logError = (errMsg) => {
    const errDisplay = document.getElementById('err-msg-log')
    errDisplay.style.display = "block"
    errDisplay.innerHTML = errMsg + "!"
}


const main = (code)=> {
    //this is the main fnctn which will take the algo_code and coordinates
    
}


//this takes all the input elements having class [cordinate-inputs] and remove its content to reset them.
const resetInputs = () => {
    const input_flds = document.getElementsByClassName('cordinate-inputs')
    // console.log(input_flds)

    for(let i= 0 ; i < input_flds.length ; i++)
        input_flds[i].value = "";

}