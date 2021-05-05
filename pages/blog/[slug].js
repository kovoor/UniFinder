import { getSinglePost } from "../api/posts";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/PostPage.module.css";

// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
    <div className={styles.postPage}>
      <Head>
        <title>{props.post.title} - UniFinder</title>
        <link rel="icon" href="/uniFinder-logo.svg" />
      </Head>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <Link href="/blog">
        <button>Return to Blog</button>
      </Link>
    </div>
  );
};

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
PostPage.getInitialProps = async (params) => {
  const post = await getSinglePost(params.query.slug);
  console.log(params.query.slug);
  return { post: post };
};

export default PostPage;
