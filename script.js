document.addEventListener('DOMContentLoaded', function () {
    const newPostBtn = document.getElementById('newPostBtn');
    const searchBar = document.getElementById('searchBar');
    const postsContainer = document.getElementById('posts');

    // Redirect to the New Post creation page
    newPostBtn.addEventListener('click', function () {
        window.location.href = 'newpost.html';
    });

    // Load and display posts from localStorage
    function loadPosts() {
        postsContainer.innerHTML = '';  // Clear existing posts
        const posts = [];

        // Fetch posts from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('post-')) {
                const post = JSON.parse(localStorage.getItem(key));
                posts.push(post);
            }
        }

        // Sort posts by date (most recent first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Display posts
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.setAttribute('data-title', post.title);
            postDiv.setAttribute('data-tags', post.tags.join(','));

            postDiv.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p>${post.content.substring(0, 100)}...</p>
                <div class="tags">Tags: ${post.tags.join(', ')}</div>
                <div class="date">Posted on: ${new Date(post.date).toLocaleString()}</div>
            `;

            // Redirect to full post page on click
            postDiv.addEventListener('click', function () {
                window.location.href = `post.html?title=${encodeURIComponent(post.title)}`;
            });

            postsContainer.appendChild(postDiv);
        });
    }

    // Search functionality (by title or tag)
    searchBar.addEventListener('keyup', function () {
        const query = searchBar.value.toLowerCase();
        const posts = document.querySelectorAll('.post');

        posts.forEach(post => {
            const title = post.getAttribute('data-title').toLowerCase();
            const tags = post.getAttribute('data-tags').toLowerCase();

            if (title.includes(query) || tags.includes(query)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    });

    // Load posts on page load
    loadPosts();
});
