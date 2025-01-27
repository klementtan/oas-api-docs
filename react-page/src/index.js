import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './pages/LandingPage.js'
import XfersRedoc from './components/XfersRedoc.js'
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Flag } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ErrorPage from "./pages/ErrorPage.js"

const routing = (
	<Router
	basename={process.env.PUBLIC_URL}
	>
	<div>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/V3/Singapore" render={(props) => <XfersRedoc
				{...props}
				oasSpec={require('./oas_spec/Singapore.json')}
				isUrl={false}
				docName={"Singapore"}
				apiVersion = {3}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V3/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V3/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route exact path="/V3/Indonesia" render={(props) => <XfersRedoc
				{...props}
				oasSpec={require('./oas_spec/Indonesia.json')}
				isUrl={false}
				docName={"Indonesia"}
				apiVersion = {3}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V3/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V3/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route exact path="/V4/Singapore" render={(props) => <XfersRedoc
				{...props}
				oasSpec={'https://www.xfers.io/api/v4/swagger_doc'}
				isUrl={true}
				docName={"Singapore"}
				apiVersion = {4}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V4/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V4/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route exact path="/V4/Indonesia" render={(props) => <XfersRedoc
				{...props}
				oasSpec={'https://id.xfers.com/api/v4/swagger_doc'}
				isUrl={true}
				docName={"Indonesia"}
				apiVersion = {4}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V4/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V4/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route exact path="/V3/Master" render={(props) => <XfersRedoc
				{...props}
				oasSpec={require('./oas_spec/master-openapi.json')}
				isUrl={false}
				docName={"Master"}
				apiVersion = {3}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V3/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V3/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route exact path="/V4/Localhost" render={(props) => <XfersRedoc
				{...props}
				oasSpec={'http://localhost:3000/api/v4/swagger_doc'}
				isUrl={true}
				docName={"Indonesia"}
				apiVersion = {4}
				dropDownOptions = {
					[
						{
							key: "Singapore",
							text: (
								<span>
									<Flag name="sg" />
									SG
								</span>
							),
							value: "/V4/Singapore"
						},
						{
							key: "Indonesia",
							text: (
								<span>
									<Flag name="id" />
									ID
								</span>
							),
							value: "/V4/Indonesia"
						}
					]
				}
				/>}
			/>
			<Route component={ErrorPage} />
		</Switch>
	</div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
