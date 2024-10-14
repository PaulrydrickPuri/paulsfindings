document.addEventListener('DOMContentLoaded', function () {
    const newPostBtn = document.getElementById('newPostBtn');
    const searchBar = document.getElementById('searchBar');
    const posts = document.querySelectorAll('.post');

    // Redirect to the New Post creation page
    newPostBtn.addEventListener('click', function () {
        window.location.href = 'newpost.html';
    });

    // Search functionality (by title or tag)
    searchBar.addEventListener('keyup', function () {
        const query = searchBar.value.toLowerCase();
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

    // Redirect to the post's full page when clicking on the post
    posts.forEach(post => {
        post.addEventListener('click', function () {
            const title = post.getAttribute('data-title');
            window.location.href = `post.html?title=${encodeURIComponent(title)}`;
        });
    });
});
