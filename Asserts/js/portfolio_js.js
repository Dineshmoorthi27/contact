// JavaScript for hamburger menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    const navItems = document.getElementById('nav-items');
    const menuicon =document.getElementById('menu-icon');
    navItems.classList.toggle('show');
    menuicon.classList.toggle("active");    
});
// Close menu when a link is clicked
document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', () => {
        const navItems = document.getElementById('nav-items');
        const menuIcon = document.getElementById('menu-icon');
        navItems.classList.remove('show');
        menuIcon.classList.remove('active');
    });
});

//Script to download resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Asserts/documents/Dinesh_Resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
}
