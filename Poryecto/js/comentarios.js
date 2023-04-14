const form = document.querySelector('#comment-form');
const nameInput = document.querySelector('#name');
const commentInput = document.querySelector('#comment');
const commentsList = document.querySelector('#comments-list');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Crear un nuevo elemento de comentario
	const newComment = document.createElement('li');
	newComment.classList.add('comment');

	// Agregar el contenido del comentario
	const name = document.createElement('h3');
	name.textContent = nameInput.value;
	newComment.appendChild(name);

	const comment = document.createElement('p');
	comment.textContent = commentInput.value;
	newComment.appendChild(comment);

	// Agregar el comentario a la lista de comentarios
	commentsList.appendChild(newComment);

	// Limpiar los campos del formulario
	nameInput.value = '';
	commentInput.value = '';
});

// Mostrar los comentarios guardados en localStorage
if (localStorage.getItem('comments')) {
	commentsList.innerHTML = localStorage.getItem('comments');
}

