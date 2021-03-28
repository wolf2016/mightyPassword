checkPassword = () => {
  const requirements = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/);
  const feedbackP = document.getElementById("feedback");
  const feedbackDiv = document.getElementById("fDiv");
  let pw = document.getElementById("pw");
  if (requirements.test(pw.value)) {
    feedbackDiv.classList.add("strong-pw");
    feedbackDiv.classList.remove("weak-pw");
    feedbackP.innerHTML = "The password entered is acceptable!";
  } else {
    feedbackDiv.classList.add("weak-pw");
    feedbackDiv.classList.remove("strong-pw");
    feedbackP.innerHTML = "The password entered is not acceptable because" + whyWeak(pw);
  }
}

whyWeak = (pw) => {
  let reason = [];
  let i = 0;
  if (!new RegExp(/^(?=.*\d)/).test(pw.value)) {
    reason.push(" it does not contain any numbers");
    i++;
  }
  if (!new RegExp(/^(?=.*[a-zA-Z])/).test(pw.value)) {
    reason.push(" it does not contain any letters");
  }
  if (!new RegExp(/^[A-Za-z0-9]{8,}$/).test(pw.value)) {
    reason.push(" and it is not the minimum length");
  }
  if (reason.length > 2) {
    return reason.join(',');
  } else {
    return reason.join(' ');
  }
}