document.addEventListener('DOMContentLoaded', function () {
    const savePostBtn = document.getElementById('savePostBtn');

    savePostBtn.addEventListener('click', function () {
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const tags = document.getElementById('postTags').value;

        if (title && content && tags) {
            // Save post logic (this could be saved to localStorage or a server)
            const post = {
                title,
                content,
                tags: tags.split(',').map(tag => tag.trim()),
                date: new Date().toISOString()  // Save the current date and time
            };

            localStorage.setItem(`post-${title}`, JSON.stringify(post));
            alert('Post saved!');
            window.location.href = 'index.html';  // Redirect to main page after saving
        } else {
            alert('Please fill out all fields');
        }
    });
});
