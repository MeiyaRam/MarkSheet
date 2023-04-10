import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Table from './components/Table';

const App = (context) => <div className="App">
	<b><i>Ready To Start.</i></b><br/>
	<Button { ...context }/>
	<Table/>
</div>;

export default App;
