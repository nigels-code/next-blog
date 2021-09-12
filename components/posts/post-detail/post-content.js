import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
	const { post } = props;

	const imageDir = `/images/posts/${post.slug}`;

	const MarkdownComponents = {
		// convert markdown img to next/image component
		p({ node, children }) {
			const elem = node.children[0];
			if (elem.tagName === 'img') {
				return (
					<div className={classes.image}>
						<Image
							src={`${imageDir}/${elem.properties.src}`}
							width={600}
							height={300}
							alt={elem.properties.alt}
						/>
					</div>
				);
			}
			return <p>{children}</p>;
		},

		// render code blocks in atomDark theme
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={atomDark}
					language={match[1]}
					PreTag='div'
					{...props}
				>
					{(children = String(children).replace(/\n$/, ''))}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			);
		}
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={`${imageDir}/${post.image}`} />
			<ReactMarkdown components={MarkdownComponents}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
}

export default PostContent;
