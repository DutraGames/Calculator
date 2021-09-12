let result:string = ''
let resultbox:any = document.getElementById('result')
resultbox.value = '0'

const calc = (char:string, symbol:boolean = false) =>{
    if (symbol === true){
        result += ` ${char} `
    }else{
        result += char
    }

    resultbox.value = result
}

const clean = () =>{
    result = ''
    resultbox.value = '0'
}

const resolve = () =>{
    if(resultbox === '0'){
        resultbox.value = '0'
    }else{
        result = eval(result)
        resultbox.value = result
    }
}