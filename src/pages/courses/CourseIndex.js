// import node module libraries
import React from 'react';
import { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import HeroHeader from './HeroHeader';
import FeaturesList from './FeaturesList';

// import sub components

const CourseIndex = () => {
	return (
		<Fragment>
			{/*  Page Content  */}
			<HeroHeader />

			{/*  Features list  */}
			<FeaturesList />

			<div className="pb-lg-3 pt-lg-3">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Most Popular</h2>
						</Col>
					</Row>
					<div className="position-relative">
					</div>
				</Container>
			</div>

			<div className="pb-lg-8 pt-lg-3 py-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Trending</h2>
						</Col>
					</Row>
					<div className="position-relative">
						
					</div>
				</Container>
			</div>
		</Fragment>
	);
};

export default CourseIndex;
