import { baseURL } from "@/constants/constants";

export async function healthCheck() {
  fetch(`${baseURL}/healthcheck`)
    .then((response) => {
      if (response.ok) {
        console.log("Success:", response.status);
      } else {
        console.log("Failed:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
