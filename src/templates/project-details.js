import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/project-details.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectDetails({ data }) {
	const { html } = data.markdownRemark;
	const { title, stack, featImg } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<div className={styles.details}>
				<div style={{ flexDirection: "row", marginTop: -50 }}>
					<div className={styles.backChevron} />
					<Link className={styles.backBtn} to="/projects">
						Tilbake
					</Link>
				</div>
				<h2>{title}</h2>
				<h3>{stack}</h3>
				<div className={styles.imageContainer}>
					<GatsbyImage
						image={featImg.childImageSharp.gatsbyImageData}
						style={{ width: "100%" }}
					/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query ProjectDetails($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				stack
				title
				featImg {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED)
					}
				}
			}
		}
	}
`;
