document.addEventListener("DOMContentLoaded", function(){
    console.log('Yes your content is loaded ');

    const calculateButton = document.getElementById("calculate");
    const resultDisplay = document.getElementById("result");

    calculateButton.addEventListener("click", function(){

        // get User input
        const weight = parseFloat(document.getElementById("weight").value);
        const purity = parseFloat(document.getElementById("purity").value);
        const currentGoldPrice = parseFloat(document.getElementById("currentGoldPrice").value);
        const makingCharge = parseFloat(document.getElementById("makingCharge").value);
        const gst = parseFloat(document.getElementById("gst").value);
        
        // check logic rule implement 
        if(isNaN(weight) || isNaN(purity) || isNaN(currentGoldPrice) || isNaN(makingCharge) || isNaN(gst)){
            resultDisplay.innerHTML= "Please enter valid numbers for all fields."
        }else{
            // calculate total cost 

            const goldValue = (weight * purity * currentGoldPrice) / 24;
            const makingChargeAMount = (goldValue * makingCharge) / 100;
            const gstAMount = (goldValue + makingChargeAMount) * (gst/100)

            const totalCost = goldValue + makingChargeAMount + gstAMount;

            resultDisplay.innerHTML = `
                <p>Total Gold Value : Rs ${goldValue.toFixed(2)}</p>
                <p>Making Charge Value : Rs ${makingChargeAMount.toFixed(2)}</p>
                <p>GST Amount Charge Value : Rs ${gstAMount.toFixed(2)}</p>
                <p>Total Cost of Gold Value : Rs ${totalCost.toFixed(2)}</p>
            `
        }

    })
})