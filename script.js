var initialPrice = document.querySelector('#initial-price')
var quantity = document.querySelector('#quantity')
var currentPrice = document.querySelector('#current-price')
var btnCheck = document.querySelector('#btn-check')
var outputDiv = document.querySelector('#output')

btnCheck.addEventListener('click',check)
function check(){
    var ip =Number(initialPrice.value)
    var qty= Number(quantity.value)
    var curr= Number(currentPrice.value)
    
    calculateProfitAndLoss(ip,qty,curr)
    if(!ip || !qty || !curr){
        outputDiv.innerText = 'please fill all the fields'
    }else if(ip<0 || qty<0 || curr<0){
        outputDiv.innerText = 'The value should not be negative'
    }


}



function calculateProfitAndLoss(initial,quantity,current){
   
   
    if(current>initial){
        var profit = (current-initial)*quantity
        var profitPercentage = (profit/initial)*100
        outputDiv.innerText = `the profit is Rs. ${profit} and profit percentage is ${profitPercentage}%`
    }
    else if(initial>current){
        var loss = (initial-current)*quantity
        var lossPercentage = (loss/initial)*100
        outputDiv.innerText = ` the loss is ${loss} and loss percentage is ${lossPercentage}%`
    }
    

    else{
        outputDiv.innerText = `No pain No gain`
    }
}

