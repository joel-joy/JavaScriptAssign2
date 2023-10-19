// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const ptag = document.getElementById('myStudentId');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const studentId = "200535886";

// Function to change background color based on user input
function changeCustomColor() {
    const userInput = Number(customNumberInput.value);
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
    ptag.textContent = studentId;
}

// Function to change background color with a random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    changeBackgroundColor(randomNumber);
}

function changeBackgroundColor(value) {
    if (value < 0 || value > 100) {
        document.body.style.backgroundColor = "red";
    } else if (value >= 0 && value <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (value > 20 && value <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (value > 40 && value <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (value > 60 && value <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (value > 80 && value <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// Function to generate options for select list
function addList() {
    
    for (let i = 0; i < imageNames.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `img ${i + 1}`;
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    const selectedIndex = imageSelect.value;
    if (selectedIndex >= 0 && selectedIndex < imageNames.length) {
        const selectedImageSrc = imageNames[selectedIndex];
        images.src = selectedImageSrc;
    }
}

// Event listeners for on click event of buttons and select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);

// Event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);