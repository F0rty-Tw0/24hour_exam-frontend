const requestOptions = (method) => ({
  method: method,
  mode: 'cors',
  redirect: 'follow',
  credentials: 'same-origin',
  cache: 'no-cache',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { requestOptions };
