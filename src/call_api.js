const API_BASE_PATH = "http://localhost:8080";

function get_api_response(url) {
  url = API_BASE_PATH+url;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send();
  });
}

export function post_api_response(url, data) {
  url = API_BASE_PATH+url;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json"); //x-www-form-urlencoded

    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status < 300)) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(data));
  });
}