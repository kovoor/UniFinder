import { getPosts } from "../pages/api/posts";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";

const IndexPage = (props) => {
  const initialData = props.posts;
  const { data: posts } = useSWR("/api/getPosts", getPosts, { initialData });

  return (
    <div>
      <Head>
        <title>Blog - UniFinder</title>
        <link rel="icon" href="/uniFinder-logo.svg" />
      </Head>
      try{" "}
      {
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/[slug]`} as={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      }{" "}
      catch (error) {<p>Error connecting to Ghost</p>}
      <Link href="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

IndexPage.getInitialProps = async ({ res }) => {
  if (res) {
    const cacheAge = 60 * 60 * 12;
    res.setHeader("Cache-Control", `public,s-maxage=${cacheAge}`);
  }

  const posts = await getPosts();
  return { posts: posts };
};

export default IndexPage;
