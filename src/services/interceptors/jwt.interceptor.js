

const apiInterceptor = async ({ method, endpoint, data }) => {
  const url = `${import.meta.env.VITE_API_HOST}${endpoint}`;
  console.log(import.meta.env.VITE_API_HOST);
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const accessToken = localStorage.getItem("token");
  if (accessToken) options.headers.Authorization = `Bearer ${accessToken}`;
  if (data) options.body = JSON.stringify(data);

  const response = await fetch(url, options);

  if (response.status !== 401) return response.json();

  const retryOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await fetch(url, retryOptions).then((res) => res.json());
};

export { apiInterceptor };
