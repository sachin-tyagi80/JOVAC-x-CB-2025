const profileDiv = document.getElementById("profile");

fetch("https://api.github.com/users/sachin-tyagi80") // 🔁 Replace with your GitHub username
  .then((response) => response.json())
  .then((data) => {
    profileDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar">
      <h2>${data.name}</h2>
      <p>@${data.login}</p>
      <p>${data.bio || "No bio available"}</p>
      <p>Followers: ${data.followers} | Following: ${data.following}</p>
    `;
  })
  .catch((error) => {
    profileDiv.innerHTML = `<p>Something went wrong: ${error}</p>`;
  });
