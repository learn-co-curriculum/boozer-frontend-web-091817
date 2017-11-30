const headers = {
  Accepts: 'application/json, text/plain',

  'Content-Type': 'application/json'
};

export function fetchCocktails() {
  return fetch(`http://localhost:3001/api/v1/cocktails`).then(res =>
    res.json()
  );
}

export function fetchCocktail(id) {
  return fetch(`http://localhost:3001/api/v1/cocktails/${id}`).then(res =>
    res.json()
  );
}

export function createCocktail(data) {
  return fetch(`http://localhost:3001/api/v1/cocktails`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).catch(res => res.json());
}
