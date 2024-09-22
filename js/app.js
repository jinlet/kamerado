// Function to handle FAQ content
function handleFAQs() {
    const faqs = document.querySelectorAll(".faq-content");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
}

// Function to handle the burger menu
function handleBurgerMenu() {
    const hamMenu = document.querySelector(".burger-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const navItems = document.querySelectorAll(".burger-nav li"); 
    const logoLink = document.querySelector(".nav-logo-link"); 

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    // Function to close the menu if screen width exceeds 1200px
    function closeMenuOnLargeScreen() {
        const menu = document.querySelector('.off-screen-menu');
        if (window.innerWidth >= 1200 && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }

    // Add event listeners to each nav item to close the menu when clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (offScreenMenu.classList.contains('active')) {
                offScreenMenu.classList.remove('active');
                hamMenu.classList.remove('active');
            }
        });
    });

    // Add an event listener to the logo link to close the menu when clicked
    logoLink.addEventListener('click', () => {
        if (offScreenMenu.classList.contains('active')) {
            offScreenMenu.classList.remove('active');
            hamMenu.classList.remove('active');
        }
    });
}

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    handleFAQs();
    handleBurgerMenu();
});


// Switches between forms
document.addEventListener('DOMContentLoaded', function () {
    // Get form and button elements
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const btnForm1 = document.getElementById('btnForm1');
    const btnForm2 = document.getElementById('btnForm2');
    const formHeading = document.getElementById('formHeading'); // Reference to the h2 heading

    // Define the showForm function
    function showForm(formId) {
        // Hide both forms
        form1.style.display = 'none';
        form2.style.display = 'none';

        // Show the selected form
        document.getElementById(formId).style.display = 'block';

        // Update the heading based on the selected form
        if (formId === 'form1') {
            formHeading.textContent = 'Søknadsskjema Kamerado';
        } else if (formId === 'form2') {
            formHeading.textContent = 'Rapporteringsskjema';
        }
    }

    // Function to highlight the active button
    function highlightButton(activeButton) {
        // Remove 'active' class from both buttons
        btnForm1.classList.remove('active');
        btnForm2.classList.remove('active');

        // Add 'active' class to the clicked button
        activeButton.classList.add('active');
    }

    // Add event listeners to the buttons
    btnForm1.addEventListener('click', function () {
        showForm('form1');
        highlightButton(btnForm1);
    });

    btnForm2.addEventListener('click', function () {
        showForm('form2');
        highlightButton(btnForm2);
    });


});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('regnskapFile');
    const fileLabel = document.getElementById('fileLabel');
    const fileStatus = document.getElementById('fileStatus');

    // When the label is clicked, it triggers the file input
    fileLabel.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        fileInput.click(); // Simulate click on the hidden file input
    });

    // Update the label and status when a file is selected
    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name; // Get the selected file name
            fileLabel.textContent = fileName; // Update the label to show the file name
            fileStatus.textContent = ''; // Clear the status text
        } else {
            fileLabel.textContent = 'Velg fil'; // Reset the label if no file is selected
            fileStatus.textContent = 'Ingen fil valgt'; // Update status text
        }
    });
});
