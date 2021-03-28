//checks the password and sets the feedback
checkPassword = () => {
  const feedbackP = document.getElementById("feedback");
  const feedbackDiv = document.getElementById("fDiv");
  let pw = document.getElementById("pw");
  const isAdmin = document.getElementById("isAdmin").checked;
  if (pickReqs(isAdmin).test(pw.value)) {
    feedbackDiv.classList.add("strong-pw");
    feedbackDiv.classList.remove("weak-pw");
    feedbackP.innerHTML = "The password entered is acceptable!";
  } else {
    feedbackDiv.classList.add("weak-pw");
    feedbackDiv.classList.remove("strong-pw");
    feedbackP.innerHTML = "The password entered is not acceptable because " + whyWeak(pw, isAdmin);
  }
}

//tells the user why the password is weak
whyWeak = (pw, isAdmin) => {
  //the array and counter are for minimal formatting when giving results to user
  let reason = [];
  let i = 0;
  //check for at least 1 number
  if (!new RegExp(/^(?=.*\d)/).test(pw.value)) {
    reason.push("it does not contain any numbers");
    i++;
  }
  //check for at least one letter
  if (!new RegExp(/^(?=.*[a-zA-Z])/).test(pw.value)) {
    reason.push("it does not contain any letters");
    i++;
  }
  if (!new RegExp(/([!@#$%^&*]){3,}/).test(pw.value) && isAdmin) {
    reason.push("it does not contain at least 3 special characters");
    i++;
  }
  //check alphanumeric length. Will fail with only special characters
  if (pw.value.length < 10 && !isAdmin) {
    reason.push("it is not the minimum length");
    i++;
  }
  if (pw.value.length < 13 && isAdmin) {
    reason.push("it is not the minimum length");
    i++;
  }
  if (reason.length > 2) {
    return reason.join(', ');
  } else if (reason.length === 2) {
    return reason.join(' and ');
  } else {
    return reason.join(' ');
  }
}

//figures out which requirements to use when checking the password
pickReqs = (isAdmin) => {
  if (!isAdmin) {
    return new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/);
  } else {
    return new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*].*[!@#$%^&*].*[!@#$%^&*]).{13,}$/);
  }
}