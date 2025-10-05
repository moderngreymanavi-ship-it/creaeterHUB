export default async function sitemap() {
  const baseUrl = "https://creatorhub.com"; // change when deploy

  // later we'll fetch posts dynamically from Strapi
  const posts = ["welcome", "how-to-start"];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...posts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
