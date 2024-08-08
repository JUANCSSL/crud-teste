document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);

function submitFeedback(event) {
    event.preventDefault();

    const user_id = document.getElementById('user_id').value;
    const opportunity_id = document.getElementById('opportunity_id').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    fetch('/feedbacks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id, opportunity_id, rating, comment })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadFeedbacks();
    });
}

function loadFeedbacks() {
    fetch('/feedbacks')
        .then(response => response.json())
        .then(data => {
            const feedbacksDiv = document.getElementById('feedbacks');
            feedbacksDiv.innerHTML = '';
            data.forEach(feedback => {
                feedbacksDiv.innerHTML += `<div>
                    <h3>Rating: ${feedback.rating}</h3>
                    <p>${feedback.comment}</p>
                    <button onclick="deleteFeedback(${feedback.id})">Delete</button>
                    <button onclick="editFeedback(${feedback.id})">Edit</button>
                </div>`;
            });
        });
}

function deleteFeedback(id) {
    fetch(`/feedbacks/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadFeedbacks();
    });
}

function editFeedback(id) {
    const rating = prompt('New Rating:');
    const comment = prompt('New Comment:');
    
    fetch(`/feedbacks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating, comment })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadFeedbacks();
    });
}

loadFeedbacks();
