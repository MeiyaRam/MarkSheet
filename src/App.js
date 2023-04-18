import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import Table from './components/Table';
import processMarkSheet from './services/processMarkSheet';

const App = (context) => <div className="App">
	<b><i>Ready To Start.</i></b><br/>
	<Button { ...context }/>
	<Table { ...{ ...context, data: processMarkSheet(context) } }/>
</div>;

export default App;
