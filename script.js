
// appendIn seat details
function apendSeatDetails(seat) {
    const newElement = document.createElement("div");
    newElement.classList.add("flex");
    newElement.classList.add("justify-between");
    const element1InNewElement = document.createElement("p");
    const element2InNewElement = document.createElement("p");
    const seatNumber = document.createElement("p");
    element1InNewElement.innerText = "Economy";
    element2InNewElement.innerText = "550";
    seatNumber.innerText = seat;
    newElement.appendChild(seatNumber);
    newElement.appendChild(element1InNewElement);
    newElement.appendChild(element2InNewElement);
    const parrent = document.getElementById("selected-seats-details");
    return parrent.appendChild(newElement);
}

// add background color
function addBackgroundColor(element) {
    const getElementId = document.getElementById(element.innerText);
    getElementId.style.backgroundColor = "#1DD100";
    getElementId.style.color = "white";
}

// make grand total
function grandTotal() {
    const grandTotalText = document.getElementById("grand-total");
    const totalPrice = document.getElementById("total-price");
    grandTotalText.innerText = parseInt(totalPrice.innerText);

}

// function that execute on click over seat
const seats = document.querySelectorAll(".seat");
const arr = [];
for (const seat of seats) {
    seat.addEventListener("click", function () {
        const totalSelectedSeats = document.getElementById("total-selected-seats");

        if (arr.length === 4) {
            alert("You can't select more seats");
        }
        if (parseInt(totalSelectedSeats.innerText) < 4 && !arr.includes(seat)) {
            const totalPrice = document.getElementById("total-price");
            const seatsLeft = document.getElementById("seats-left");
            totalSelectedSeats.innerText = parseInt(totalSelectedSeats.innerText) + 1;
            totalPrice.innerText = parseInt(totalPrice.innerText) + 550;
            seatsLeft.innerText = parseInt(seatsLeft.innerText) - 1;
            apendSeatDetails(seat.innerText);
            addBackgroundColor(seat);
            grandTotal();
            arr.push(seat)

        }
        if (arr.length >= 4) {
            document.getElementById("coupon-button").removeAttribute("disabled")
        }
        submitForTicket()
    })
}


// coupon 

function grandTotalForCoupon() {
    function appendDiscount() {
        const discountDiv = document.createElement("p");
        const discountTittle = document.createElement("p");
        discountTittle.innerText = "Discount";
        discountDiv.innerText = totalPrice.innerText - grandTotalText.innerText;
        document.getElementById("discount-amount").appendChild(discountTittle);
        document.getElementById("discount-amount").appendChild(discountDiv);
    }

    const grandTotalText = document.getElementById("grand-total");
    const totalPrice = document.getElementById("total-price");
    grandTotalText.innerText = parseInt(totalPrice.innerText);
    const couponValue = document.getElementById("coupon-value");
    if (couponValue.value === "NEW15") {
        grandTotalText.innerText = parseInt(totalPrice.innerText) * .85;
        document.getElementById("coupon-filed").classList.add("hidden");
        appendDiscount()

    } else if (couponValue.value === "Couple 20") {
        grandTotalText.innerText = parseInt(totalPrice.innerText) * .80;
        document.getElementById("coupon-filed").classList.add("hidden");
        appendDiscount()

    } else {
        alert("please Type a valid coupon");
    }

}
document.getElementById("coupon-button").addEventListener("click", grandTotalForCoupon);

// user info
function submitForTicket() {
    const phoneNumber = document.getElementById("phone-number");
    if (phoneNumber.value && arr.length > 0) {
        document.getElementById("submit-button").removeAttribute("disabled")
    }
}
document.getElementById("phone-number").addEventListener("change", function () {
    submitForTicket();
})

function hideElement(elementId) {
    document.getElementById(elementId).classList.add("hidden");
}
function showElement(elementId) {
    document.getElementById(elementId).classList.remove("hidden");
}

document.getElementById("submit-button").addEventListener("click", function () {
    hideElement("header");
    hideElement("main");
    hideElement("footer");
    showElement("popup-div");
})
document.getElementById("popup-button").addEventListener("click", function () {
    showElement("header");
    showElement("main");
    showElement("footer");
    hideElement("popup-div");
})