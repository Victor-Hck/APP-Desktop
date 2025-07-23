function login() {
const username = document.querySelector('input[type="text"]').value;
const password = document.querySelector('input[type="password"]').value;

if (username === 'admin' && password === '123') {
    window.location.href = 'mainpage/dashboard.html'; // Troca de página!
    // alert('Login bem-sucedido!');
} else {
    alert('Usuário ou senha inválidos.');
}
}

console.log("Renderer.js carregado.");
