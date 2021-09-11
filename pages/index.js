import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
	return (
		<Fragment>
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
