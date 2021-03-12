import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/about.module.css";
import jobs from "../experience/jobs.json";
import moment from "moment";
import getPrefixedPath from "../getPrefixedPath";

export default function About() {
	return (
		<Layout>
			<div className={styles.about}>
				<h2>Dette er meg</h2>
				<section>
					<h3>Erfaring</h3>
					<div className={styles.divider} />
					{jobs
						.sort((a, b) => {
							return new Date(b.start) - new Date(a.start);
						})
						.map((job, index) => (
							<div key={index}>
								<JobRow job={job} />
								{index !== jobs.length - 1 ? (
									<div className={styles.subdivider} />
								) : (
									""
								)}
							</div>
						))}
				</section>
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

function JobRow({ job }) {
	const getFromToDateString = position => {
		return (
			moment(position.start).format("MMM YYYY") +
			" - " +
			(position.end ? moment(position.end).format("MMM YYYY") : "Nå")
		);
	};
	const getDuration = () => {
		var minDate = moment(job.positions[0].start);
		var maxDate = moment(job.positions[0].end);
		job.positions.forEach(position => {
			if (moment(position.start).diff(minDate) < 0) {
				minDate = moment(position.start);
			}
			if (!position.end) {
				maxDate = moment();
			}
			if (moment(position.end).diff(maxDate) > 0) {
				maxDate = moment(position.end);
			}
		});
		const months = maxDate.diff(minDate, "months");
		return Math.floor(months / 12) > 0
			? Math.floor(months / 12) + " år, " + (months % 12) + " mnd"
			: months + " mnd";
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 8,
				}}
			>
				<img
					src={getPrefixedPath(job.logo)}
					alt="Infiniwell logo"
					style={{
						maxWidth: 50,
						maxHeight: 50,
						borderRadius: 5,
						marginRight: 16,
					}}
				/>
				<div>
					{job.positions.length === 1 ? (
						<div>
							<h4>{job.positions[0].title}</h4>
							<p>{job.company}</p>
							<p style={{ fontSize: 14 }}>
								{job.positions[0].type}
							</p>
							<p style={{ fontSize: 14 }}>
								{getFromToDateString(job.positions[0])} &#x2E31;{" "}
								{getDuration()}
							</p>
						</div>
					) : (
						<div>
							<h4 style={{ fontSize: 18 }}>{job.company}</h4>
							<p>{getDuration()}</p>
						</div>
					)}
				</div>
			</div>
			{job.positions.length > 1
				? job.positions
						.sort((a, b) => {
							return new Date(b.start) - new Date(a.start);
						})
						.map((position, index) => (
							<div className={styles.experience} key={index}>
								{index < job.positions.length - 1 ? (
									<div className={styles.trail} />
								) : (
									""
								)}
								<h4>{position.title}</h4>
								<p>{position.type}</p>
								<p>{getFromToDateString(position)}</p>
							</div>
						))
				: ""}
		</div>
	);
}
