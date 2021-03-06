// export const getApiresource = async (url) => {

//   fetch(url)
//     .then((res) => res.json())
//     .then((body) => console.log(body))
//     .catch((error) => console.log(error.message));
// };
// export const getApiresource = async (url) => {
//   const res = await fetch(url);
//   const body = await res.json();

//   console.log(res, body);
import { HTTP, HTTPS } from "@constants/api";
/**
 * Изменияет URL с HTTP на HTTPS
 * @param {String} url  -url для изменения
 * @returns {String} -url c HTTPS
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};
// };
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));
// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );
  return res;
};
