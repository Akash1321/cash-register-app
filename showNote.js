let billAmount = document.querySelector("#bill");
let cashReceived = document.querySelector("#cash");
let cashReceivedLabel = document.querySelector("#cash-given-holder");
let nextButton = document.querySelector("#go-next");
let checkButton = document.querySelector("#check-amounts");
let errorMessage = document.querySelector("#error-div");
let showNoteAmount = document.querySelectorAll(".show");


let notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

cashReceivedLabel.style.display = "none";
checkButton.style.display = "none";


nextButton.addEventListener("click", function displayHandler() {
    if (billAmount.value > 0) {


        cashReceivedLabel.style.display = "flex"
        checkButton.style.display = "block";



    } else {
        showError("Enter a valid bill amount that is more than 0");
    }
});


checkButton.addEventListener("click", function checkHandler() {

    const billValue = Number(billAmount.value);
    const cashValue = Number(cashReceived.value);

    errorMessage.style.display = "none";

    if (cashValue > billValue) {

        let cashToReturn = cashValue - billValue;
        calculateNotesTOReturn(cashToReturn);

    } else {

        showError("Cash Given should be more than the bill amount");
    }

});

function calculateNotesTOReturn(cashToReturn) {
    for (let i = 0; i < notesAvailable.length; i++) {
        let notesToReturn = Math.trunc(cashToReturn / notesAvailable[i]);
        cashToReturn = cashToReturn % notesAvailable[i];

        showNoteAmount[i].innerText = notesToReturn;

    }
}

function showError(message) {

    errorMessage.style.display = "block";
    errorMessage.innerText = message;

}