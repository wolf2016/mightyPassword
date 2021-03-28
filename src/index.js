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
    feedbackP.innerHTML = "The password entered is not acceptable!";
  }
}