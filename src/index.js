
	//Rendre les composants
  import { render } from 'react-dom'
  //Les composants à rendre
	import Example from './example'
  //La bibliothèque Drag and Drop
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'

	function App() {
		return (
			<div className="App">
				<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
