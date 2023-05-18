import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Table from './components/Table';
import processMarkSheet from './services/processMarkSheet';
import TableInput from './components/TableInput';
import AddButton from './components/AddButton';

const App = (context) => <div className="App">
	<b><i>Ready To Start.</i></b><br/>
	<Button { ...context }/><br/><br/>
	<TableInput { ...context }/>
	<AddButton { ...context }/>
	<Table { ...{ ...context, data: processMarkSheet(context) } }/>
</div>;

export default App;
