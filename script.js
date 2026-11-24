/* =====================================================
              SMART HOSTEL MANAGEMENT SYSTEM
                         APP.JS
===================================================== */


/* =====================================================
                     HERO SLIDER
===================================================== */

const slides = [

    {
        title: "Smart Hostel <span>Management System</span>",

        description:
            "A modern digital platform designed to make hostel management simple, secure, and efficient for students and administrators.",

        image: "./hostel.jpg"
    },

    {
        title: "Easy <span>Room Management</span>",

        description:
            "Manage rooms, bed allocation, availability, and student accommodation from one simple platform.",

        image: "./hostel2.jpg"
    },

    {
        title: "Fast <span>Complaint Management</span>",

        description:
            "Students can easily submit complaints and track their status while administrators can manage them efficiently.",

        image: "./hostel3.jpg"
    },

    {
        title: "Secure <span>Hostel Management</span>",

        description:
            "Manage students, visitors, notices, fees, leave requests, and hostel activities from one secure system.",

        image: "./hostel4.jpg"
    }

];


let currentSlide = 0;


/* =====================================================
                    SHOW SLIDE
===================================================== */

function showSlide(index) {

    currentSlide = index;

    const slide = slides[currentSlide];


    /* -----------------------------
          CHANGE HEADING
    ----------------------------- */

    const heading = document.querySelector(
        ".hero-content h1"
    );

    if (heading) {
        heading.innerHTML = slide.title;
    }


    /* -----------------------------
        CHANGE DESCRIPTION
    ----------------------------- */

    const description = document.querySelector(
        ".hero-content p"
    );

    if (description) {
        description.textContent = slide.description;
    }


    /* -----------------------------
        CHANGE BACKGROUND IMAGE
    ----------------------------- */

    const heroImage = document.querySelector(
        ".hero-image"
    );

    if (heroImage) {

        heroImage.style.backgroundImage =
            `url("${slide.image}")`;

    }


    /* -----------------------------
            UPDATE DOTS
    ----------------------------- */

    const dots = document.querySelectorAll(
        ".dot"
    );

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active-dot",
            index === currentSlide
        );

    });

}


/* =====================================================
                     NEXT SLIDE
===================================================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);
}


/* =====================================================
                  PREVIOUS SLIDE
===================================================== */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);
}


/* =====================================================
                  DOT NAVIGATION
===================================================== */

function setupDots() {

    const dots = document.querySelectorAll(
        ".dot"
    );


    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            function () {

                showSlide(index);

            }
        );

    });

}


/* =====================================================
               AUTOMATIC SLIDER
===================================================== */

let sliderInterval;


function startSlider() {

    sliderInterval = setInterval(
        nextSlide,
        5000
    );

}


function stopSlider() {

    clearInterval(sliderInterval);

}


/* =====================================================
                PAUSE ON HOVER
===================================================== */

function setupSliderHover() {

    const hero = document.querySelector(
        ".hero"
    );


    if (!hero) {
        return;
    }


    hero.addEventListener(
        "mouseenter",
        stopSlider
    );


    hero.addEventListener(
        "mouseleave",
        startSlider
    );

}


/* =====================================================
                 INITIALIZE SLIDER
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showSlide(0);

        setupDots();

        setupSliderHover();

        startSlider();

    }
);


/* =====================================================
                    NAVIGATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navLinks =
            document.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                function () {

                    navLinks.forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                    this.classList.add(
                        "active"
                    );

                }
            );

        });

    }
);


/* =====================================================
                  GET STARTED BUTTON
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const getStarted =
            document.querySelector(
                ".get-started"
            );


        if (getStarted) {

            getStarted.addEventListener(
                "click",
                function () {

                    alert(
                        "Welcome to Smart Hostel Management System!"
                    );

                }
            );

        }

    }
);


/* =====================================================
                    LEARN MORE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const learnMore =
            document.querySelector(
                ".learn-more"
            );


        if (learnMore) {

            learnMore.addEventListener(
                "click",
                function () {

                    const features =
                        document.querySelector(
                            ".features"
                        );


                    if (features) {

                        features.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }

    }
);