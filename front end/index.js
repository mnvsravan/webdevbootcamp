// Toggle logic between CR7 and Sadie Sink
let isCR7 = true;

function toggleUser() {
  const img = document.getElementById("user-image");
  const name = document.getElementById("user-name");
  const gender = document.getElementById("user-gender");

  if (isCR7) {
    img.src =
      "https://images.squarespace-cdn.com/content/v1/662d6dbc571bdb21fdbc79b5/d53d5940-aef5-4937-8a22-c58e2f78b1b4/sadie-sink-parents-1-f3b182ee9a3545c8acd7a7f62c677099.jpg";
    name.innerText = "Sadie Sink";
    gender.innerText = "Female";
  } else {
    img.src =
      "https://tse2.mm.bing.net/th/id/OIP.dHhxXTonQ0S9wBTPFo3vqQHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    name.innerText = "CR7 GOAT";
    gender.innerText = "Male";
  }

  isCR7 = !isCR7;
}

// Fetch random user from external randomuser.me API
function randomUser() {
  fetch("https://randomuser.me/api")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      const user = data.results[0];

      const userName = document.getElementById("user-name");
      const userGender = document.getElementById("user-gender");
      const userImage = document.getElementById("user-image");

      userName.innerText = user.name.first + " " + user.name.last;
      userGender.innerText = user.gender;
      userImage.src = user.picture.large;
    })
    .catch(function (err) {
      console.log("Error occurred:", err);
    });
}

// Fetch random user from your own local Express server API
function myRandomUser() {
  fetch("/api/random-user")
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }
      return res.json();
    })
    .then(function (user) {
      const userName = document.getElementById("user-name");
      const userGender = document.getElementById("user-gender");
      const userImage = document.getElementById("user-image");

      userName.innerText = user.name;
      userGender.innerText = user.gender;
      userImage.src = user.image;
    })
    .catch(function (err) {
      console.log("Error occurred:", err);
    });
}