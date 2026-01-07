"use client";

import { verifyAdmin } from "./database";

const AUTH_KEY = "hizmetia_admin_auth";

export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  loginTime: string | null;
}

export function getAuthState(): AuthState {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, username: null, loginTime: null };
  }
  const stored = localStorage.getItem(AUTH_KEY);
  if (!stored) {
    return { isAuthenticated: false, username: null, loginTime: null };
  }
  try {
    return JSON.parse(stored);
  } catch {
    return { isAuthenticated: false, username: null, loginTime: null };
  }
}

export async function login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
  const isValid = await verifyAdmin(username, password);

  if (isValid) {
    const authState: AuthState = {
      isAuthenticated: true,
      username: username,
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
    return { success: true };
  }
  return { success: false, error: "Kullanıcı adı veya şifre hatalı" };
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function isAuthenticated(): boolean {
  const state = getAuthState();
  return state.isAuthenticated;
}
