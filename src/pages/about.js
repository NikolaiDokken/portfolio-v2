import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/about.module.css";

/*
const experience = [
	{
		company: "WAID",
		title: "Software Developer",
		start: new Date("2020-02-01T12:00:00"),
		end: new Date("2021-02-01T12:00:00"),
		type: "Deltid",
	},
	{
		company: "WAID",
		title: "Lead Software Developer",
		start: new Date("2021-02-01T12:00:00"),
		end: undefined,
		type: "Deltid",
	},
];
*/

export default function About() {
	return (
		<Layout>
			<div className={styles.about}>
				<h2>Dette er meg</h2>
				<section>
					<h3>Utdanning</h3>
					<div className={styles.divider} />
					<p>2015 - 2018 Nadderud Videregående Skole</p>
					<p>
						2018 - 2021 Dataingeniør ved Norges
						teknisk-naturvitenskapelige universitet
					</p>
				</section>
				<section>
					<h3>Erfaring</h3>
					<div className={styles.divider} />
					<h4>WAID</h4>
					<p>2020 - 2021 Software developer</p>
					<p>2021 - Nå Lead Software developer</p>
				</section>
				<section>
					<h3>Favoritt operativsystem?</h3>
					<div className={styles.divider} />
					<p>
						Alt går. For tiden har jeg en stasjonær maskin som
						kjører Windows, on Mac som dual-booter linux. Alle har
						sin fordel, men om jeg skulle valgt én til
						programmering, hadde jeg valgt macOS. I tillegg til å
						være ekstremt brukervennlig kombinerer den det beste fra
						Windows og linux.
					</p>
					<p>Fun fact: Denne nettsiden bruker ubuntu-fonten</p>
				</section>
			</div>
		</Layout>
	);
}
