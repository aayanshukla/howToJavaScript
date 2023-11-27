const names = ["Aayan", "Aahanika", "krishna", "Kushagra","Vinayak", "Manasvi", "Urja", "Siyona", "Aaryan", "Ananya"];
let currentIndex = 0;

// Function to display the current name
function displayCurrentName() {
    document.getElementById("nameDisplay").innerHTML = names[currentIndex];
}

function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
}
displayCurrentName()