const login = async (username, password) => {
  // * fill here...

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const getMyInfomation = async () => {
  const token = localStorage.getItem("token");

  try {
    //  * fill here...

    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const main = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  const getMyInfoButton = document.getElementById("get-info");

  getMyInfoButton.addEventListener("click", getMyInfomation);

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    getMyInfoButton.addEventListener("click", await getMyInfomation);

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value);
    localStorage.setItem("token", accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
