// src/services/joinTeamService.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const joinTeamService = {
  async submitJoinForm(formData) {
    try {
      console.log("Yuborilayotgan ma'lumotlar:", formData);
      const response = await apiClient.post("/join-team/", formData);
      return response.data;
    } catch (error) {
      console.error("Join form xatosi:", error);
      
      if (error.response) {
        // Server javob qaytardi (4xx, 5xx)
        throw new Error(
          error.response.data?.message || 
          `Server xatosi: ${error.response.status}`
        );
      }
      
      if (error.request) {
        throw new Error(
          "Server bilan bog'lanib bo'lmadi. Internet aloqasini tekshiring."
        );
      }
      
      throw new Error("So'rov yuborishda kutilmagan xatolik yuz berdi.");
    }
  },
};