document.addEventListener('DOMContentLoaded', function() {
    const newPostBtn = document.getElementById('newPostBtn');
    const postModal = document.getElementById('postModal');
    const closeModalBtn = document.querySelector('.close');
    const savePostBtn = document.getElementById('savePostBtn');
    const postList = document.getElementById('postList');
    let posts = [];

    // Show modal to create new post
    newPostBtn.addEventListener('click', function() {
        postModal.style.display = 'block';
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        postModal.style.display = 'none';
    });

    // Save the new post
    savePostBtn.addEventListener('click', function() {
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;

        if (title && content) {
            const post = { title, content };
            posts.push(post);
            displayPosts();
            clearModal();
        }
    });

    // Function to display all posts
    function displayPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postList.appendChild(postElement);
        });
    }

    // Clear modal inputs
    function clearModal() {
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
        postModal.style.display = 'none';
    }

    // Close modal if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target == postModal) {
            postModal.style.display = 'none';
        }
    });
});
