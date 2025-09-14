document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameIcon = document.getElementById("usernameIcon");
    const passwordIcon = document.getElementById("passwordIcon");
    const messages = document.getElementById("messages");
  
    // reset
    messages.innerHTML = "";
    messages.classList.remove("success");
  
    [usernameInput, passwordInput].forEach(input => {
      input.classList.remove("error", "success");
    });
    [usernameIcon, passwordIcon].forEach(icon => {
      icon.className = "fa";
      icon.style.display = "none";
    });
  
    let errors = [];
  
    // username validation
    if (usernameInput.value.trim() === "") {
      errors.push("please, enter username");
      usernameInput.classList.add("error");
      usernameIcon.classList.add("fa-circle-xmark", "error-icon");
    } else if (usernameInput.value.trim() !== "new_user") {
      errors.push("please, enter valid username");
      usernameInput.classList.add("error");
      usernameIcon.classList.add("fa-circle-xmark", "error-icon");
    } else {
      usernameInput.classList.add("success");
      usernameIcon.classList.add("fa-circle-check", "success-icon");
    }
  
    // password validation
    if (passwordInput.value.trim() === "") {
      errors.push("please, enter password");
      passwordInput.classList.add("error");
      passwordIcon.classList.add("fa-circle-xmark", "error-icon");
    } else if (passwordInput.value.trim() !== "123456789") {
      errors.push("please, enter valid password");
      passwordInput.classList.add("error");
      passwordIcon.classList.add("fa-circle-xmark", "error-icon");
    } else {
      passwordInput.classList.add("success");
      passwordIcon.classList.add("fa-circle-check", "success-icon");
    }
  
    // prikaz poruka
    if (errors.length > 0) {
      messages.innerHTML = errors.join("<br>");
    } else {
      messages.textContent = "Successful login!";
      messages.classList.add("success");
    }
  });
  