import axios from "axios";
import type { CustomerFormData } from "../types/customer.types";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

export async function createCustomer(payload: CustomerFormData) {
  const res = await axios.post(`${API_BASE}/customers`, payload, {
    headers: {
      "Content-Type": "application/json",
      // optionally send current user header for created_by:
      "x-user": "portal_user"
    },
    timeout: 15000,
  });
  return res.data;
}
