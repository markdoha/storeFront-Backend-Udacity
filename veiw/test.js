fetch("http://localhost:3000/cats")
.then(res => res.json())
.then(data => console.log(data))