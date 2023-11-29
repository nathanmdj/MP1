const login = (event) => {
    event.preventDefault();
    const username = document.getElementById('username');

    if (username.value === 'user') {
        window.location.href = 'user.html';
    } else if (username.value === 'admin') {
        window.location.href = 'admin.html';
    }
    console.log(username.value)
}
