async function login() {
    const API_BASE_PATH = "http://localhost:8080";

    const response_1_promise = get_api_response(API_BASE_PATH);

    const response_1 = await Promise.resolve(response_1_promise);

    document.getElementById("hello_content").innerHTML = response_1.text;
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


login();