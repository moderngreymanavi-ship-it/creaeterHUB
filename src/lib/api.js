export async function fetcher(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch " + url);
  return res.json();
}
