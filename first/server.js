const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// Serve frontend static files from the 'front end' directory
app.use(express.static('front end'));

// Parse JSON request bodies
app.use(express.json());

// Users mock database
const users = [
    {
        id: 1,
        name: "john",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        id: 2,
        name: "amber",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        id: 3,
        name: "lily",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
        id: 4,
        name: "juan",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        id: 5,
        name: "valtteri rantala",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 6,
        name: "sophia",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        id: 7,
        name: "liam",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
        id: 8,
        name: "chloe",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 9,
        name: "mateo",
        gender: "male",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        id: 10,
        name: "zara",
        gender: "female",
        image: "https://randomuser.me/api/portraits/women/81.jpg"
    }
];

let nextId = 11;

// Helper to find array index by user ID
function findIndex(id) {
    for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
            return i;
        }
    }
    return -1;
}

// GET all users
app.get("/api/users", function (req, res) {
    return res.json(users);
});

// GET user by ID
app.get("/api/users/:id", function (req, res) {
    const id = Number(req.params.id);
    const index = findIndex(id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found with id: " + id
        });
    }

    return res.json(users[index]);
});

// GET random user
app.get("/api/random-user", function (req, res) {
    if (users.length === 0) {
        return res.status(404).json({
            message: "No user found"
        });
    }

    const randomIndex = Math.floor(users.length * Math.random());
    return res.json(users[randomIndex]);
});

// POST - Create new user
app.post("/api/users", function (req, res) {
    const newUser = req.body;

    const tempUser = {
        id: nextId,
        name: newUser.name,
        gender: newUser.gender,
        image: newUser.image
    };

    nextId = nextId + 1;
    users.push(tempUser);

    return res.status(201).json({
        message: "User created successfully",
        user: tempUser
    });
});

// PUT - Update existing user
app.put("/api/users/:id", function (req, res) {
    const id = Number(req.params.id);
    const index = findIndex(id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found with id: " + id
        });
    }

    const updatedUser = req.body;

    users[index] = {
        id: id,
        name: updatedUser.name,
        gender: updatedUser.gender,
        image: updatedUser.image
    };

    return res.json({
        message: "User updated successfully",
        user: users[index]
    });
});

// DELETE - Remove user by ID
app.delete("/api/users/:id", function (req, res) {
    const id = Number(req.params.id);
    const index = findIndex(id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found with id: " + id
        });
    }

    users.splice(index, 1);

    return res.json({
        message: "User deleted successfully"
    });
});

// Start Express server
app.listen(port, function () {
    console.log("Server running on http://localhost:" + port);
});





















