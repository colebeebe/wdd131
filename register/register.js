let numParticipants = 1;

function participantTemplate(count) {
    return `<section class="participant${count}">
	<p>Participant ${count}</p>
	<div class="item">
	    <label for="fname${count}"> First name<span>*</span></label>
	    <input id="fname${count}" type="text" name="fname${count}" value="" requred/>
	</div>
	<div class="item activities">
	    <label for="activity${count}">Activity #<span>*</span></label>
	    <input id="activity${count}" type="text" name="activity${count}" />
	</div>
	<div class="item">
	    <label for="fee${count}">Fee ($)<span>*</span></label>
	    <input id="fee${count}" type="number" name="fee${count}" />
	</div>
	<div class="item">
	    <label for="date${count}">Desired Date <span>*</span></label>
	    <input id="date${count}" type="date" name="date${count}" />
	</div>
	<div class="item">
	    <p>Grade</p>
	    <select>
		<option selected value="" disabled selected></option>
		<option value="1">1st</option>
		<option value="2">2nd</option>
		<option value="3">3rd</option>
		<option value="4">4th</option>
		<option value="5">5th</option>
		<option value="6">6th</option>
		<option value="7">7th</option>
		<option value="8">8th</option>
		<option value="9">9th</option>
		<option value="10">10th</option>
		<option value="11">11th</option>
		<option value="12">12th</option>
	    </select>
	</div>
    </section>`;
}

document.querySelector("#add").addEventListener("click", function() {
    numParticipants++;
    this.insertAdjacentHTML("beforebegin", participantTemplate(numParticipants))
});

function successTemplate(info) {
    let thanksMessage = "Thank you";
    if (info.adultName !== "") {
	thanksMessage += ", " + info.adultName;
    }
    thanksMessage += "!";
   
    let participant = "participant";
    if (info.numParticipants > 1) {
	participant += "s";
    }

    return `<div class="confirmation">
	<h2>${thanksMessage}</h2>
	<p>Your total will be $${info.feeTotal} for ${info.numParticipants} ${participant}.</p>
    </div>`
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    //querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() coud be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const sum = feeElements.reduce((acc, curr) => acc + Number(curr.value), 0);
    // once you have your total make sure to return it!
    return sum;
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const info = {
	adultName: document.querySelector("#adult_name").value,
	numParticipants: numParticipants,
	feeTotal: totalFees()
    }
    document.body.insertAdjacentHTML("beforeend", successTemplate(info));
    this.style.display = "none";
    console.log(totalFees());
});

