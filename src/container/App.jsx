import ChatComponent from '../components/ChatComponent';
import { ContactForm } from '../components/ContactForm';
import { CrudApp } from '../components/CrudApp';
import { MaterialUI } from '../components/MaterialUI';
import { SearchApp } from '../components/SearchApp';

function App() {
  return (
    <div>
      <h1>Ejercicios con React.js</h1>
      <CrudApp />
      <ContactForm />
      <SearchApp />
      <MaterialUI />
      <ChatComponent />
    </div>
  );
}

export default App;
