import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const contactUsService = {
  async submitContactForm(formData) {
    try {
      const response = await apiClient.post("/contact-us/", formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error("Server xatosi yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
      }

      if (error.request) {
        throw new Error("Server bilan bog‘lanib bo‘lmadi. Internetni tekshiring.");
      }

      // Boshqa xatolik
      throw new Error("So‘rov yuborishda kutilmagan xatolik yuz berdi.");
    }
  },
};
