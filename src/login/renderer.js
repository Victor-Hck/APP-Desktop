function login() {
const username = document.getElementById('usuario').value;
const password = document.getElementById('senha').value;

if (username === 'admin' && password === '123') {
    window.location.href = '../mainpage/dashboard.html'; // Troca de página!
    // alert('Login bem-sucedido!');
} else {
    alert('Usuário ou senha inválidos.');
}
}

console.log("Renderer.js carregado.");
