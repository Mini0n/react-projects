import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsPage from './projects/ProjectsPage'
import Hello from './Hello'

function App() {

  return (
    <div className="container">
      <Hello name="Mini0n" enthusiasmLevel={43} />
      <ProjectsPage />
    </div>
  );
}

export default App
