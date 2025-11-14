
export function enableNavigation() {

    let menuButton = document.getElementById('global-nav-toggle');    
    let globalNav = document.getElementById('global-nav');

    menuButton.addEventListener("click", (e) => {
        let target = e.target;
        let clickedDiv = target.closest('div').className;
        if (clickedDiv === 'global-nav__toggle--closed') {
            // globalNav.style.maxHeight = '275px';
            globalNav.style.maxHeight = '1000px';
            menuButton.ariaExpanded = 'true';
        } else if (clickedDiv === 'global-nav__toggle--open') {
            globalNav.style.maxHeight = '0';
            menuButton.ariaExpanded = 'false';
        }
    });

    globalNav.addEventListener('click', (e) => {
        let parentButton = e.target.closest('button');
        if (parentButton) {
            let isOpen = parentButton.classList.contains('open');
            let parentLi = e.target.closest('li');
            if (isOpen) {
                parentLi.ariaExpanded = 'false';
            } else {
                parentLi.ariaExpanded = 'true';
            }
        }
    });
}
