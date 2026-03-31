function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  })
  .then(r => r.json())
  .then(usuario => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "home.html";
  })
  .catch(() => alert("Erro no login"));
}