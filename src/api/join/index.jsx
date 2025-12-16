import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method, config.url, config.data);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export const joinUsService = {
  async submitJoinForm(formData) {
    try {
      console.log("Form data to submit:", formData);
      
      // Convert boolean to string if needed
      const dataToSend = {
        ...formData,
        is_student: Boolean(formData.is_student),
        falco_core: Boolean(formData.falco_core),
      };

      const response = await apiClient.post("join-team/", dataToSend);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      
      if (error.response) {
        const errorData = error.response.data;
        let errorMessage = "Server xatosi yuz berdi";
        
        // Parse backend validation errors
        if (typeof errorData === 'object') {
          const errors = Object.values(errorData).flat();
          errorMessage = errors.join(', ') || errorMessage;
        } else if (errorData?.detail) {
          errorMessage = errorData.detail;
        }
        
        throw new Error(errorMessage);
      }

      if (error.request) {
        throw new Error("Server bilan bog'lanib bo'lmadi. Internet aloqasini tekshiring.");
      }

      throw new Error("So'rov yuborishda kutilmagan xatolik yuz berdi.");
    }
  },
};