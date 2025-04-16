// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;

    if (name == '') {
        /// Disini logika ketika gagal
        alert('Please enter your name');
    } else {
        /// Disini logika ketika sukses
        alert('Form submitted successfully');
    }
}

let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName('banner-img');

    // Check if indexBanner is greater than the length of the bannerList
    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    // Hide banner with looping
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    // Show the banner
    bannerList[indexBanner].style = 'display: block';
}

showBanner();

// Set interval to change the banner every 3 seconds
setInterval(() => {
    nextBanner();
}, 3000);
// Function to toggle the menu