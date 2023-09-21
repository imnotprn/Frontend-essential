const main = () => {
  const frontendInput = document.getElementById("frontend");

  const frontendButton = document.getElementById("add-front");

  const frontendMilestonesList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMilestonesList.appendChild(newList);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
