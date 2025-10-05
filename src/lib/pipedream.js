import axios from "axios";

export async function triggerPipedream(payload) {
  try {
    const res = await axios.post(
      "https://eoj60e6b13ig9fs.m.pipedream.net",
      payload
    );
    return res.data;
  } catch (err) {
    console.error("Pipedream trigger failed:", err.message);
    return null;
  }
}
