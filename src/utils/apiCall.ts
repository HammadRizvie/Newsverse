export async function apiCall(url: string, params: Record<string, any> = {}) {
  const query = new URLSearchParams(params).toString();
  const fullUrl = query ? `${url}?${query}` : url;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}