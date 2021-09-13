import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Nigel&apos;s Blog</title>
				<meta name='description' content='blog about web development' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuresPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuresPosts
		}
	};
}

export default HomePage;
