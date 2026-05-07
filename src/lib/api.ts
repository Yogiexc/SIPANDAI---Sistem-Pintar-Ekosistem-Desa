/**
 * Base path for all backend requests.
 * Next.js proxies /backend/* → http://127.0.0.1:8000/* (via next.config.ts rewrites)
 * so there are no CORS or SameSite cookie issues in development.
 */
const API_BASE = "/backend";

/**
 * Fetch the CSRF cookie from Laravel Sanctum before any mutating request.
 * This sets the XSRF-TOKEN cookie which we read back as a header.
 */
async function getCsrfCookie(): Promise<void> {
  await fetch(`${API_BASE}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
  });
}

/**
 * Read the XSRF-TOKEN cookie value set by Sanctum.
 */
function getXsrfToken(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="));
  if (!match) return "";
  return decodeURIComponent(match.split("=")[1]);
}

interface ApiOptions {
  method?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: Record<string, any>;
}

/**
 * Generic API request helper.
 * Automatically handles CSRF and credentials for Sanctum cookie-based auth.
 */
export async function apiRequest<T = unknown>(
  path: string,
  { method = "GET", body }: ApiOptions = {}
): Promise<T> {
  // For mutating requests, ensure we have a fresh CSRF cookie first
  if (method !== "GET") {
    await getCsrfCookie();
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-XSRF-TOKEN": getXsrfToken(),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let errorMessage = `Request failed: ${res.status}`;
    try {
      const data = await res.json();
      if (data.message) errorMessage = data.message;
      if (data.errors) {
        const firstError = Object.values(
          data.errors as Record<string, string[]>
        )[0]?.[0];
        if (firstError) errorMessage = firstError;
      }
    } catch {
      // ignore parse errors
    }
    throw new Error(errorMessage);
  }

  // 204 No Content — return empty object
  if (res.status === 204) return {} as T;

  return res.json() as Promise<T>;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * Login via Laravel Sanctum (cookie-based session).
 * Returns the authenticated user from /api/user after login.
 */
export async function login(payload: LoginPayload): Promise<AuthUser> {
  await apiRequest("/login", { method: "POST", body: payload });
  return apiRequest<AuthUser>("/api/user");
}

/**
 * Logout the current session.
 */
export async function logout(): Promise<void> {
  await apiRequest("/logout", { method: "POST" });
}

/**
 * Get the currently authenticated user, or null if not logged in.
 */
export async function getAuthUser(): Promise<AuthUser | null> {
  try {
    return await apiRequest<AuthUser>("/api/user");
  } catch {
    return null;
  }
}
