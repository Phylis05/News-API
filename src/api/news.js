export function getHeadlines() {
  return {
    type: "GET_HEADLINES",
  };
}

export function getHeadlinesSuccess(list) {
  return {
    type: "GET_HEADLINES_SUCCESS",
    list,
  };
}

export function getHeadlinesError(error) {
  return {
    type: "GET_HEADLINES_ERROR",
    error,
  };
}

function fetchingHeadlines() {
  const URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=213327409d384371851777e7c7f78dfe";
  return fetch(URL, { method: "GET" }).then((response) =>
    Promise.all([response, response.json()])
  );
}

export default function fetchHeadlines() {
  return (dispatch) => {
    dispatch(getHeadlines());
    return fetchingHeadlines().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(getHeadlinesSuccess(json));
        console.log(json);
      } else {
        dispatch(getHeadlinesError());
      }
    });
  };
}
