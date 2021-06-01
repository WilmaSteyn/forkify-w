import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const AJAX = async function(url, uploadData = undefined) {
  const jsonPayload = JSON.stringify(uploadData);
  const fetchPromise = uploadData ? fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonPayload
  }) : fetch(url);
  const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
      throw new Error(data.message);
  }
  return data;
}

// export const getJson = async function(url) {    
//     const fetchPromise = fetch(url);
//     const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error(data.message);
//     }
//     return data;
// }

// export const sendJson = async function(url, jsonData) {
//   const jsonPayload = JSON.stringify(jsonData);
//   const fetchPromise = fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: jsonPayload
//   });
//   const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   if (!response.ok) {
//       throw new Error(data.message);
//   }
//   return data;
// }