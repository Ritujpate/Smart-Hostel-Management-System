/* =========================================================
                SMART HOSTEL MANAGEMENT SYSTEM
                         LOGIN SCRIPT
========================================================= */


/* =========================================================
                    START PAGE ANIMATION
========================================================= */

window.addEventListener("load", () => {

    const body =
        document.getElementById("loginPage");


    /*
        STEP 1
        Lamp comes down from the ceiling.
    */

    body.classList.add(
        "animation-start"
    );


    /*
        STEP 2
        Lamp turns ON.
    */

    setTimeout(() => {

        body.classList.add(
            "lamp-on"
        );

    }, 3200);


    /*
        STEP 3
        Lamp turns OFF briefly.
    */

    setTimeout(() => {

        body.classList.remove(
            "lamp-on"
        );

    }, 4200);


    /*
        STEP 4
        Lamp turns ON permanently.
    */

    setTimeout(() => {

        body.classList.add(
            "lamp-on"
        );

    }, 4700);


    /*
        STEP 5
        Robot enters from bottom.
    */

    setTimeout(() => {

        body.classList.add(
            "robot-start"
        );

    }, 5000);


    /*
        STEP 6
        Robot has arrived.

        IMPORTANT:
        robot-arrived keeps it visible.
        It does NOT remove the robot.
    */

    setTimeout(() => {

        body.classList.add(
            "robot-arrived"
        );

    }, 6800);


    /*
        STEP 7
        Login form appears.
    */

    setTimeout(() => {

        body.classList.add(
            "form-start"
        );

    }, 7100);

});



/* =========================================================
                  PASSWORD SHOW / HIDE
========================================================= */

const password =
    document.getElementById(
        "password"
    );


const passwordToggle =
    document.getElementById(
        "passwordToggle"
    );


const eyeIcon =
    document.getElementById(
        "eyeIcon"
    );


if (passwordToggle) {

    passwordToggle.addEventListener(
        "click",
        () => {

            if (
                password.type ===
                "password"
            ) {

                password.type =
                    "text";


                eyeIcon.classList.remove(
                    "fa-eye"
                );


                eyeIcon.classList.add(
                    "fa-eye-slash"
                );

            }

            else {

                password.type =
                    "password";


                eyeIcon.classList.remove(
                    "fa-eye-slash"
                );


                eyeIcon.classList.add(
                    "fa-eye"
                );

            }

        }
    );

}



/* =========================================================
                         LOGIN
========================================================= */

const loginForm =
    document.getElementById(
        "loginForm"
    );


const loginError =
    document.getElementById(
        "loginError"
    );


const signInButton =
    document.getElementById(
        "signInButton"
    );


const buttonText =
    document.getElementById(
        "buttonText"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            loginError.textContent =
                "";


            const username =
                document
                    .getElementById(
                        "username"
                    )
                    .value
                    .trim();


            const passwordValue =
                document
                    .getElementById(
                        "password"
                    )
                    .value;


            /*
                Basic validation
            */

            if (
                !username ||
                !passwordValue
            ) {

                loginError.textContent =
                    "Please enter username and password.";

                return;

            }


            /*
                Loading state
            */

            signInButton.classList.add(
                "loading"
            );


            buttonText.textContent =
                "SIGNING IN...";


            try {

                /*
                    Existing backend
                */

                const response =
                    await fetch(
                        "http://localhost:5000/api/login",
                        {

                            method:
                                "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body:
                                JSON.stringify({

                                    username:
                                        username,

                                    password:
                                        passwordValue

                                })

                        }
                    );


                const data =
                    await response.json();


                /*
                    SUCCESS
                */

                if (
                    response.ok &&
                    data.success
                ) {

                    localStorage.setItem(
                        "shmsLoggedIn",
                        "true"
                    );


                    localStorage.setItem(
                        "shmsUsername",
                        username
                    );


                    localStorage.setItem(
                        "shmsRole",
                        data.role
                    );


                    /*
                        Backend dashboard redirect
                    */

                    if (
                        data.dashboard
                    ) {

                        window.location.href =
                            data.dashboard;

                        return;

                    }


                    /*
                        Fallback redirects
                    */

                    if (
                        data.role ===
                        "student"
                    ) {

                        window.location.href =
                            "student-dashboard.html";

                    }

                    else if (
                        data.role ===
                        "warden"
                    ) {

                        window.location.href =
                            "warden-dashboard.html";

                    }

                    else if (
                        data.role ===
                        "admin"
                    ) {

                        window.location.href =
                            "admin/admin-dashboard.html";

                    }

                }


                /*
                    LOGIN FAILED
                */

                else {

                    loginError.textContent =
                        data.message ||
                        "Invalid username or password.";


                    signInButton.classList.remove(
                        "loading"
                    );


                    buttonText.textContent =
                        "SIGN IN";

                }

            }


            catch (error) {

                console.error(
                    "Login Error:",
                    error
                );


                loginError.textContent =
                    "Unable to connect to server. Please start the backend.";


                signInButton.classList.remove(
                    "loading"
                );


                buttonText.textContent =
                    "SIGN IN";

            }

        }
    );

}