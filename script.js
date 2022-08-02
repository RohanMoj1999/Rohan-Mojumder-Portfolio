// night-light mode effects

let container = document.getElementById('container');
let desPara = document.getElementById('desPara');
let introImage = document.getElementById('introImage');
let socialContactLinks = document.getElementsByClassName('socialContactLinks');
let year = document.getElementsByClassName('year');
let heading = document.getElementsByClassName('heading');
let para = document.getElementsByClassName('para');

let icons = document.getElementsByClassName('items');
let menuIcons = document.getElementsByClassName('itemIcons');
let floatingButton = document.getElementById('floatingButton');

let personalDetails = document.getElementById('personalDetails');

let introHeading = document.getElementById('introHeading');
let introText1 = document.getElementById('pre1');
let introText2 = document.getElementById('pre2');

var liDa = 0;

function lightDark() {
    // light mode
    if (liDa == 1) {
        container.style.backgroundImage = 'linear-gradient(40deg, rgb(226, 226, 226), white)';

        // night/light mode icon 
        floatingButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        floatingButton.style.boxShadow = '0px 0px 5px grey';
        floatingButton.style.color = 'black';

        // image
        introImage.style.boxShadow = '0px 0px 5px grey';

        // intro text and heading
        introHeading.style.color = '#00a8ad';
        introText1.style.color = '#0B504F';

        // intro description
        desPara.style.color = 'black';

        // menu icons
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.boxShadow = '0px 2px 5px grey';
        }
        for (let i = 0; i < menuIcons.length; i++) {
            menuIcons[i].style.color = 'black';
        }

        // social icons
        for (let i = 0; i < socialContactLinks.length; i++) {
            socialContactLinks[i].style.color = 'black';
        }

        // year section
        for (let i = 0; i < year.length; i++) {
            year[i].style.color = 'var(--colorYear)';
        }

        // headings
        for (let i = 0; i < heading.length; i++) {
            heading[i].style.color = 'var(--color1)';
        }

        // education,project, etc.. para
        for (let i = 0; i < para.length; i++) {
            para[i].style.color = 'var(--colorDetails)';
        }

        // socialcontact section heading
        personalDetails.style.color = 'black';

        liDa = 0;
    }
    // dark mode
    else {
        container.style.backgroundImage = 'linear-gradient(40deg, rgb(73, 0, 0), rgb(29, 12, 4), rgb(1, 1, 20), rgb(0, 0, 0))';

        floatingButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        floatingButton.style.boxShadow = 'none';
        floatingButton.style.color = 'grey';

        introImage.style.boxShadow = 'none';

        introHeading.style.color = 'silver';
        introText1.style.color = 'silver';

        desPara.style.color = 'white';

        for (let i = 0; i < icons.length; i++) {
            icons[i].style.boxShadow = 'none';
        }
        for (let i = 0; i < menuIcons.length; i++) {
            menuIcons[i].style.color = 'grey';
            menuIcons[i].style.boxShadow = 'none';
        }

        for (let i = 0; i < socialContactLinks.length; i++) {
            socialContactLinks[i].style.color = '#ecf0f1';
        }

        for (let i = 0; i < year.length; i++) {
            year[i].style.color = '#FFC600';
        }

        for (let i = 0; i < heading.length; i++) {
            heading[i].style.color = '#DBE2E9';
        }

        for (let i = 0; i < para.length; i++) {
            para[i].style.color = '#FEFCD7';
        }

        personalDetails.style.color = 'white';

        liDa = 1;
    }
}


// MENU ACTIONS

let education = document.getElementById('education');
let work = document.getElementById('work');
let project = document.getElementById('project');
let publication = document.getElementById('publication');


function pubDetails() {
    publication.style.display = 'grid';

    project.style.display = 'none';
    education.style.display = 'none';
    intro.style.display = 'none';
    work.style.display = 'none';
}

function projectDetails() {
    project.style.display = 'grid';

    education.style.display = 'none';
    intro.style.display = 'none';
    work.style.display = 'none';
    publication.style.display = 'none';
}

function eduDetails() {
    education.style.display = 'grid';

    intro.style.display = 'none';
    work.style.display = 'none';
    project.style.display = 'none';
    publication.style.display = 'none';
}

function workDetails() {
    work.style.display = 'grid';

    intro.style.display = 'none';
    education.style.display = 'none';
    project.style.display = 'none';
    publication.style.display = 'none';
}

function home() {
    intro.style.display = 'grid';

    education.style.display = 'none';
    work.style.display = 'none';
    project.style.display = 'none';
    publication.style.display = 'none';
}