import { Dispatch, SetStateAction } from "react";
import { BackendResponse } from "../page";

export async function backend_Login(
  email: string,
  password: string,
  setResponseBackend: Dispatch<SetStateAction<BackendResponse>>
) {
  const res = await fetch(
    "https://backendbitnext.vercel.app/api/auth?action=login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );
  setResponseBackend(await res.json());
}
