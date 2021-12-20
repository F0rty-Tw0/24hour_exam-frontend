import { requestOptions } from 'context';

const makeRequest = async (method, body, query) => {
  const options = requestOptions(method);

  if (body) options.body = JSON.stringify(body);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${query}`,
    options
  );
  if (res.status === 201) return res;
  const response = await res.json();
  if (res.status !== 200) throw new Error(response.message);
  return response;
};

export { makeRequest };
