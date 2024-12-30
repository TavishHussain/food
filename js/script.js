let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


{/* <script> */}
 
// </script>
{/* <script> */}
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const darkModeIcon = darkModeToggle.querySelector('i');
    const body = document.body;

    // Check if dark mode is already enabled (stored in local storage)
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Toggle icon between moon and sun
        if (body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    document.querySelectorAll('.toggle-content').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contentBox = this.closest('.box');
            const extraContent = contentBox.querySelector('.extra-content');
            const icon = this.querySelector('i');
            if (contentBox.classList.contains('expanded')) {
                extraContent.style.maxHeight = '100px';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
                this.innerHTML = 'read more <i class="fas fa-plus"></i>';
            } else {
                extraContent.style.maxHeight = 'none';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
                this.innerHTML = 'read less <i class="fas fa-minus"></i>';
            }
            contentBox.classList.toggle('expanded');
        });
    });
    