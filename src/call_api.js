export async function perform_api_login(endpoint, user_data) {
  const API_BASE_PATH = "http://localhost:8080";

  const response_1_promise = post_api_response(API_BASE_PATH + endpoint, user_data);

  return await Promise.resolve(response_1_promise);
}

function get_api_response(url) {
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

function post_api_response(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json"); //x-www-form-urlencoded

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status >= 200 && xhr.status < 300)) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.send(JSON.stringify(data));
  });
}