<script>
document.getElementById("RegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let message = document.getElementById("message");

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration Successful!";
    document.getElementById("RegistrationForm").reset(); 
});
</script>