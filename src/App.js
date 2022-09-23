import { Route, Routes } from 'react-router-dom';
import { CreateContextProvider } from './Context';

import Basket from './pages/Basket';
import Home from './pages/Home';

function App() {
	return (
		<>
			<CreateContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/basket" element={<Basket />} />
				</Routes>
			</CreateContextProvider>
		</>
	);
}

export default App;
