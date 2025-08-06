const userForm = document.getElementById('userForm');
const cardContainer = document.getElementById('cardContainer');

let users = [];

userForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const bio = document.getElementById('bio').value;
  const imageFile = document.getElementById('image').files[0];

  if (!imageFile) return alert("Please select an image");

  const reader = new FileReader();
  reader.onload = function () {
    const user = { id: Date.now(), name, role, bio, image: reader.result };
    users.push(user);
    renderCards();
    userForm.reset();
  };
  reader.readAsDataURL(imageFile);
});

function renderCards() {
    cardContainer.innerHTML = '';
    users.forEach(user => {
      const card = document.createElement('div');
  
      card.innerHTML = `
        <div class="bg-gray-800 shadow-lg rounded-xl overflow-hidden w-64">
          <img src="${user.image}" alt="${user.name}" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold">${user.name}</h3>
            <p class="text-indigo-400 font-semibold mb-2">${user.role}</p>
            <p class="text-gray-300 mb-4">${user.bio}</p>
            <div class="flex justify-between">
              <button onclick="deleteUser(${user.id})"
                class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-sm">Delete</button>
              <button onclick="editUser(${user.id})"
                class="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-black text-sm">Edit</button>
            </div>
          </div>
        </div>
      `;
  
      cardContainer.appendChild(card);
    });
  }
  
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  renderCards();
}

function editUser(id) {
  const user = users.find(u => u.id === id);
  if (!user) return;

  document.getElementById('name').value = user.name;
  document.getElementById('role').value = user.role;
  document.getElementById('bio').value = user.bio;

  // remove old user and wait for form submit to add updated user
  users = users.filter(u => u.id !== id);
  renderCards();
}
