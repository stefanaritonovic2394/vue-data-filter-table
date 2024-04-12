// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());

// Sample tasks data
const tasks = [
    { id: 1, user: {name: 'John Stone'}, status: 'in progress', title: 'Title for Task 1', due_at: '2023-10-09', details: 'Details for Task 1' },
    { id: 2, user: {name: 'Kyle Barnes'}, status: 'planned', title: 'Title for Task 2', due_at: '2023-10-08', description: 'Details for Task 2' },
    { id: 3, user: {name: 'Mia Wong'}, status: 'blocked', title: 'Title for Task 3', due_at: '2023-10-07', description: 'Details for Task 3' },
    { id: 4, user: {name: 'Peter Stanbridge'}, status: 'completed', title: 'Title for Task 4', due_at: '2023-10-06', description: 'Details for Task 4' },
    { id: 5, user: {name: 'Natalie Lee-Walsh'}, status: 'started', title: 'Title for Task 5', due_at: '2023-10-05', description: 'Details for Task 5' },
    { id: 6, user: {name: 'Natasha Will'}, status: 'completed', title: 'Title for Task 6', due_at: '2023-10-04', description: 'Details for Task 6' },
    { id: 7, user: {name: 'Janice Middleton'}, status: 'in progress', title: 'Title for Task 7', due_at: '2023-10-03', description: 'Details for Task 7' },
    { id: 8, user: {name: 'Omar Bowers'}, status: 'blocked', title: 'Title for Task 8', due_at: '2023-10-02', description: 'Details for Task 8' },
    { id: 9, user: {name: 'Denni Shaw'}, status: 'planned', title: 'Title for Task 9', due_at: '2023-10-01', description: 'Details for Task 9' },
    { id: 10, user: {name: 'Susana Bray'}, status: 'blocked', title: 'Title for Task 10', due_at: '2023-01-09', description: 'Details for Task 10' },
    { id: 11, user: {name: 'Isaiah Kaiser'}, status: 'planned', title: 'Title for Task 11', due_at: '2023-01-08', description: 'Details for Task 11' },
    { id: 12, user: {name: 'Liliana Shah'}, status: 'completed', title: 'Title for Task 12', due_at: '2023-01-07', description: 'Details for Task 12' },
    { id: 13, user: {name: 'Alexis Powell'}, status: 'in progress', title: 'Title for Task 13', due_at: '2023-01-06', description: 'Details for Task 13' },
    { id: 14, user: {name: 'Kristina Dawson'}, status: 'started', title: 'Title for Task 14', due_at: '2023-01-05', description: 'Details for Task 14' },
    { id: 15, user: {name: 'Nick Mcgrath'}, status: 'planned', title: 'Title for Task 15', due_at: '2023-01-04', description: 'Details for Task 15' },
    { id: 16, user: {name: 'Willis Carlson'}, status: 'completed', title: 'Title for Task 16', due_at: '2023-01-03', description: 'Details for Task 16' },
    { id: 17, user: {name: 'Bill Rocha'}, status: 'started', title: 'Title for Task 17', due_at: '2024-01-03', description: 'Details for Task 17' },
    { id: 18, user: {name: 'Benny Hamilton'}, status: 'in progress', title: 'Title for Task 18', due_at: '2024-04-12', description: 'Details for Task 18' },
    { id: 19, user: {name: 'Gregory Tucker'}, status: 'blocked', title: 'Title for Task 19', due_at: '2024-04-12', description: 'Details for Task 19' },
    { id: 20, user: {name: 'Alison Adams'}, status: 'completed', title: 'Title for Task 20', due_at: '2024-04-12', description: 'Details for Task 20' }
];

// Route to serve tasks data
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
