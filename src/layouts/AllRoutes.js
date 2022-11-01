// ** Import from react dom
import { Route, Switch, Redirect } from 'react-router-dom';

// ** Import core SCSS styles
import 'assets/scss/theme.scss';


/* ----------------------------------- */
/* IMPORTS FOR MARKETING PAGES - START */
import CourseIndex from 'pages/courses/CourseIndex';
import DefaultLayout from './DefaultLayout';
import AuthLayout from './AuthLayout';
import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';




/* IMPORTS FOR MARKETING PAGES - END */
/* --------------------------------- */

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Component {...props}></Component>
			</Layout>
		)}
	></Route>
);


function AllRoutes() {
	return (
		<Switch>
			{/* --------------------------- */}
			{/* LANDING PAGES ROUTERS - START */}
			<AppRoute exact path="/" layout={DefaultLayout} component={CourseIndex} />

			<AppRoute exact path="/auth/login" layout={AuthLayout} component={SignIn} />
			<AppRoute exact path="/join/sign-up" layout={AuthLayout} component={SignUp} />
			

		
			
			{/* LANDING PAGES ROUTERS - END */}
			{/* --------------------------- */}

			{/* ADMIN PAGES ROUTERS - START */}
			{/* --------------------------- */}


			{/* ADMIN PAGES ROUTERS - END */}
			{/* ------------------------- */}

			{/*Redirect*/}
			<Redirect to="/marketing/specialty/404-error/" />
		</Switch>
	);
}

export default AllRoutes;
