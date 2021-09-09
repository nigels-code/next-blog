import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/cat.jpg'
					alt='Image of Nigel'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Nigel</h1>
			<p>A blog about web development</p>
		</section>
	);
}

export default Hero;
