let numParticipants = 1;

// Connect the 'Add Participant' button
document.querySelector("#add").addEventListener("click", function() {
    // Since we already have the HTML laid out, we can just copy it over
    const sectionHTML = document.querySelector(".participant1").innerHTML;
    const newSection = document.createElement("section");
    newSection.innerHTML = sectionHTML;
    // Because there are id's in the copied HTML, we have to update them so they are unique
    newSection.querySelector("#fname").id = "fname" + numParticipants;
    newSection.querySelector("#activity").id = "activity" + numParticipants;
    newSection.querySelector("#fee").id = "fee" + numParticipants;
    newSection.querySelector("#date").id = "date" + numParticipants;
    document.querySelector(".participants").insertBefore(newSection, this);
    // Update the number of participants and change the text above each participant field
    numParticipants++;
    newSection.querySelector("p").textContent = "Participant " + numParticipants;
});
