const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // TODO replace with current id
      // document.location.replace('/dashboard');
      console.log('stay');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// document
// .querySelector('.post-list')
// .addEventListener('click', delButtonHandler);
