export function getSources() {
  return {
    type: "GET_SOURCES",
  };
}

export function getSourcesSuccess(list) {
  return {
    type: "GET_SOURCES_SUCCESS",
    list,
  };
}

export function getSourcesError(error) {
  return {
    type: "GET_Sources_ERROR",
    error,
  };
}

function fetchSourcesDetails() {
  const URL =
    "https://newsapi.org/v2/sources?apiKey=213327409d384371851777e7c7f78dfe";
  return fetch(URL, { method: "GET" }).then((response) =>
    Promise.all([response, response.json()])
  );
}

export default function fetchSources() {
  return (dispatch) => {
    dispatch(getSources());
    return fetchSourcesDetails().then(([response, json]) => {
      if (response.status === 200) {
        const test = json.sources;
        dispatch(getSourcesSuccess(test));
        console.log(json.sources);
      } else {
        dispatch(getSourcesError());
      }
    });
  };
}
