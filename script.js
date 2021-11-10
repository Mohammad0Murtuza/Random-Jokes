fetch('https://api.chucknorris.io/jokes/random')
.then(res => res.json())
.then(data => {
    const joke = data.value;
    document.querySelector(".msg").innerText = joke;
});        