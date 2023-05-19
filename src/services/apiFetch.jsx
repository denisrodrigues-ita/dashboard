const apiFetch = async (url, method, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(url, {
      method: method,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  } finally {
    setLoading(false);
  }
};

export default apiFetch;
