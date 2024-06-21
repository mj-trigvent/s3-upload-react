import './App.css';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload to S3 using Signed URL</h1>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
