import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import Login from "./pages/login/Login";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				component={App}
			>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/map"
					element={<Map />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
