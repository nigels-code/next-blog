import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
	return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData
		},
		revalidate: 600
	};
}

export function getStaticPaths() {
	const fileNames = getPostsFiles();
	// replace file extension with empty string
	const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false
	};
}

export default PostDetailPage;
