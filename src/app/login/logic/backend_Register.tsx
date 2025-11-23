export async function backend_register(
  userName: string,
  fullName: string,
  email: string,
  password: string
) {
  await fetch("https://backendbitnext.vercel.app/api/auth?action=register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, fullName, email, password }),
  });
}
