function validate() {
    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", (e) => {
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector("#submit").addEventListener("click", (e) => {
        let boolValuesArray = [];
        let username = document.querySelector("#username");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordPattern = /^[\w]{5,15}$/;

        if (usernamePattern.exec(username.value) === null) {
            username.style.borderColor = "red";
            boolValuesArray.push(false);
        } else {
            username.style.borderColor = "";
            boolValuesArray.push(true);
        }

        if (emailPattern.exec(email.value) === null) {
            email.style.borderColor = "red";
            boolValuesArray.push(false);
        } else {
            email.style.borderColor = "";
            boolValuesArray.push(true);
        }

        if (
            password.value === confirmPass.value &&
            passwordPattern.exec(confirmPass.value) != null &&
            passwordPattern.exec(password.value) != null
        ) {
            confirmPass.style.borderColor = "";
            password.style.borderColor = "";
            boolValuesArray.push(true);
        } else {
            confirmPass.style.borderColor = "red";
            password.style.borderColor = "red";
            boolValuesArray.push(false);
        }

        if (checkBox.checked) {
            let company = document.querySelector("#companyNumber");

            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                boolValuesArray.push(false);
            } else {
                company.style.borderColor = "";
                boolValuesArray.push(true);
            }
        }

        if (!boolValuesArray.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}
