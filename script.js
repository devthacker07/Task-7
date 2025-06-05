const userList = document.getElementById("userList");
const errorDiv = document.getElementById("error");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUserData() {
  userList.innerHTML = "";
  errorDiv.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch((error) => {
      errorDiv.textContent = "Failed to fetch data. Please check your internet connection.";
      console.error("Fetch error:", error);
    });
}

// Fetch data on page load
fetchUserData();

// Reload button handler
reloadBtn.addEventListener("click", fetchUserData);
