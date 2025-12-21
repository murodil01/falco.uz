import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_BASE_URL || "https://api.falco.uz/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    if (import.meta.env.DEV) {
      console.log("Request:", config.method, config.url, config.data);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log("Response:", response.data);
    }
    return response;
  },
  (error) => {
    if (import.meta.env.DEV) {
      console.error("Response error:", error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export const joinUsService = {
  async submitJoinForm(formData) {
    try {
      // Prepare data according to backend schema
      const dataToSend = {
        ...formData,
        time_commit: formData.time_commit?.replace(/^"|"$/g, "") || null,
        is_student: formData.is_student || false,
        falco_core: formData.falco_core || false,
        skills: Array.isArray(formData.skills)
          ? formData.skills.map((id) => parseInt(id)).filter((id) => !isNaN(id))
          : [],
        age: formData.age ? parseInt(formData.age) : null,
      };

      // Remove empty strings
      Object.keys(dataToSend).forEach((key) => {
        if (dataToSend[key] === "") {
          dataToSend[key] = null;
        }
      });

      const response = await apiClient.post("join-team/", dataToSend);
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        let errorMessage = "Server xatosi yuz berdi";

        if (typeof errorData === "object") {
          const errors = [];
          for (const [field, messages] of Object.entries(errorData)) {
            if (Array.isArray(messages)) {
              errors.push(...messages);
            } else if (typeof messages === "string") {
              errors.push(messages);
            } else if (field === "detail") {
              errors.push(messages);
            }
          }
          if (errors.length > 0) {
            errorMessage = errors.join(", ");
          }
        } else if (typeof errorData === "string") {
          errorMessage = errorData;
        }

        throw new Error(errorMessage);
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
