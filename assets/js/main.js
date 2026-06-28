/*=============== SHOW & HIDDEN ===============*/

let hamburger = document.getElementById('header-toggle');
let closehamburger = document.getElementById('sidebar-close');
let sidebar = document.getElementById('sidebar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        sidebar.classList.add('show-sidebar');
        hamburger.classList.add('hide-icon');
    })
}



if (closehamburger) {
    closehamburger.addEventListener('click', () => {
        sidebar.classList.remove('show-sidebar')
        hamburger.classList.remove('hide-icon');
    })
}

/*=============== EXPAND & REDUCE ===============*/

const sidebarExpand = (toggleid, sidebarid) => {
    const toggle = document.getElementById(toggleid),
        sidebar = document.getElementById(sidebarid);

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-expand');
    })
}
sidebarExpand('sidebar-toggle', 'sidebar');