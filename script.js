      function submitform() {

            var name = document.getElementById("name").value;

            var email = document.getElementById("email").value;

            var message = false;

            if (name == "") {
                message = true;
                document.getElementById("name-field").style.display = "block";
            }
            else {
                document.getElementById("name-field").style.display = "none";
            }


            if (email == "") {
                message = true;
                document.getElementById("email-field").style.display = "block";
            }
            else {
                document.getElementById("email-field").style.display = "none";
            }

            if (message == false) {
                document.getElementById("show").style.display = "block";
            }
        }