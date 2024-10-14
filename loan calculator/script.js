document.getElementById("calculateBtn").addEventListener("click", calculateLoan);

function calculateLoan(){

    console.log("calculateLoan function called");

    
    

    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value );
    const interestRate = parseFloat(document.getElementById("interestRateInput").value );
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value );


    if(isNaN(loanAmount) || isNaN(interestRate) ||isNaN(loanTerm)){
        alert("please enter valid values in all fields");
    }


    const monthlyInterest = interestRate/100/12;
    const totalPayments = loanTerm;
    const monthlyPayment=(loanAmount*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayments));
    const totalInterest=(monthlyPayment*totalPayments)-loanAmount;
   


    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
   const resultDiv= document.getElementById("result");
   resultDiv.innerHTML=`
   <p><strong>   MonthlyPayment: ${monthlyPayment.toFixed(2)} </p></strong>;
   <p><strong>   totalInterest: ${totalInterest.toFixed(2)} </p></strong>;
   `
}


