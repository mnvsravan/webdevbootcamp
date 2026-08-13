// Toggle logic between CR7 and Messi
let isCR7 = true;

function toggleUser() {
  const img = document.getElementById('user-image');
  const name = document.getElementById('user-name');
  const gender = document.getElementById('user-gender');

  if (isCR7) {
    img.src = 'https://images.squarespace-cdn.com/content/v1/662d6dbc571bdb21fdbc79b5/d53d5940-aef5-4937-8a22-c58e2f78b1b4/sadie-sink-parents-1-f3b182ee9a3545c8acd7a7f62c677099.jpg';
    name.innerText = 'Sadie sink';
    gender.innerText = 'Female';
  } else {
    img.src = 'https://tse2.mm.bing.net/th/id/OIP.dHhxXTonQ0S9wBTPFo3vqQHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
    name.innerText = 'CR7 GOAT';
    gender.innerText = 'Male';
  }
  isCR7 = !isCR7;
}

// Fetch random user from dynamic API
async function randomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    document.getElementById('user-image').src = user.picture.large;
    document.getElementById('user-name').innerText = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-gender').innerText = user.gender;
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}