import Folder from './components/Folder';
import explorer from './data/folderData';

export default function App() {
  // Question: What types of props should a reusable component like this should accept to make it like open source or generic
  return (
    <div className='App'>
      <Folder explorer={explorer} />
      {/* With a library like this we have onSelect, onExpand, onClose, which will help use to work with this library in a better */}
    </div>
  );
}
