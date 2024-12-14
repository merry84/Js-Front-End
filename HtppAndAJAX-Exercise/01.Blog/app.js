
async function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostButton = document.getElementById('btnViewPost');
    const postsDropdown = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    let posts = {};

    
    loadPostsButton.addEventListener('click', async () => {
        try {
            const response = await fetch(postsUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.statusText}`);
            }

            posts = await response.json();
            postsDropdown.innerHTML = ''; 

            for (const postId in posts) {
                const post = posts[postId];
                const option = document.createElement('option');
                option.value = postId;
                option.textContent = post.title;
                postsDropdown.appendChild(option);
            }
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    });

   
    viewPostButton.addEventListener('click', async () => {
        const selectedPostId = postsDropdown.value;

        if (!selectedPostId) {
            alert('Please select a post first.');
            return;
        }

        try {
            
            const selectedPost = posts[selectedPostId];
            postTitle.textContent = selectedPost.title;
            postBody.textContent = selectedPost.body;

            const commentsResponse = await fetch(commentsUrl);
            if (!commentsResponse.ok) {
                throw new Error(`Failed to fetch comments: ${commentsResponse.statusText}`);
            }

            const comments = await commentsResponse.json();
            postComments.innerHTML = ''; 

            for (const commentId in comments) {
                const comment = comments[commentId];
                if (comment.postId === selectedPostId) {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    postComments.appendChild(li);
                }
            }
        } catch (error) {
            console.error('Error loading post or comments:', error);
        }
    });
}

attachEvents();
