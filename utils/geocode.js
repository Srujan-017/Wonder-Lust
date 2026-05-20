async function geocodeLocation(location, country) {
  const apiKey = process.env.GEOAPIFY_API_KEY;
  const query = [location, country].filter(Boolean).join(", ");

  if (!apiKey || !query) {
    return null;
  }

  const url = new URL("https://api.geoapify.com/v1/geocode/search");
  url.searchParams.set("text", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  url.searchParams.set("apiKey", apiKey);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Geoapify could not geocode this listing location");
  }

  const data = await response.json();
  const result = data.results && data.results[0];

  if (!result || typeof result.lon !== "number" || typeof result.lat !== "number") {
    return null;
  }

  return {
    type: "Point",
    coordinates: [result.lon, result.lat],
  };
}

module.exports = geocodeLocation;
