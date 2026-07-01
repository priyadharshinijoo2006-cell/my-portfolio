const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old message if exists
    const oldMessage = document.querySelector(".message");
    if (oldMessage) {
        oldMessage.remove();
    }

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    const msg = document.createElement("p");
    msg.classList.add("message");

    if (name === "" || email === "" || subject === "" || message === "") {
        msg.textContent = "⚠ Please fill in all the fields.";
        msg.style.color = "red";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = "⚠ Please enter a valid email address.";
        msg.style.color = "red";
    }
    else {
        msg.textContent = "✅ Your message has been sent successfully!";
        msg.style.color = "green";
        form.reset();
    }

    form.appendChild(msg);
});