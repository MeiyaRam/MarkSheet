import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Table from './components/Table';
import processMarkSheet from './services/processMarkSheet';
import TableInput from './components/TableInput';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<b><i>Ready To Start.</i></b><br/>
		<Button { ...context }/><br/><br/>
		<TableInput { ...context }/>
		<div>{state.rollNo}</div>
		<div>{state.name}</div>
		<Table { ...{ ...context, data: processMarkSheet(context) } }/>
	</div>;
};

export default App;
