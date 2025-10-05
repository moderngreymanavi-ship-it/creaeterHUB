import Image from "next/image";
import { fetcher } from "@/lib/api";
import { triggerPipedream } from "@/lib/pipedream";
import MixpanelView from "@/components/MixpanelEvent";
import SignupCTA from "@/components/CTA/signupCTA";

export async function generateMetadata({ params }) {
  const { slug } = params;


  return {
    title: `Blog: ${slug} | CreatorHub`,
    description: `Read about ${slug} on CreatorHub`,
    openGraph: {
      title: `Blog: ${slug} | CreatorHub`,
      description: `Read about ${slug} on CreatorHub`,
      url: `https://creatorhub.com/blog/${slug}`,
      siteName: "CreatorHub",
      images: [
        {
          url: "https://via.placeholder.com/800x400.png?text=CreatorHub+Blog",
          width: 400,
          height: 400,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export const revalidate = 0;

export default async function BlogPost({ params }) {
  const slug = (await params).slug;
  const res = await fetcher(
    `https://automatic-eggs-6942e980d8.strapiapp.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`
  );
  const post = res.data[0];
  await triggerPipedream(
    {
      event: "view_blog",
      slug: slug,
      title: post.title,
    },

    { headers: { "Content-Type": "application/json" } }
  );

  if (!post) return <p>Blog not found!</p>;

  const { title, description, Image } = post;
  console.log(post);

  return (
    <section style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      {Image && (
        <img  
          src={`https://automatic-eggs-6942e980d8.media.strapiapp.com/${Image.url}`}
          alt={title}
          width={400}
          height={250}
        />
      )}
      <p>{description}</p>
       <SignupCTA source={slug} />
      <MixpanelView title={title} slug={slug} />
    </section>
  );
}
