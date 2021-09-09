import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
	{
		slug: 'getting-started1',
		title: 'next.js',
		image: 'getting-started-nextjs.png',
		excerpt: 'nextjs is fun',
		date: '2022-02-10'
	},
	{
		slug: 'getting-started2',
		title: 'next.js',
		image: 'getting-started-nextjs.png',
		excerpt: 'nextjs is fun',
		date: '2022-02-10'
	},
	{
		slug: 'getting-started3',
		title: 'next.js',
		image: 'getting-started-nextjs.png',
		excerpt: 'nextjs is fun',
		date: '2022-02-10'
	},
	{
		slug: 'getting-started4',
		title: 'next.js',
		image: 'getting-started-nextjs.png',
		excerpt: 'nextjs is fun',
		date: '2022-02-10'
	}
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;
