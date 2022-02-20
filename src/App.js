import './App.css';
import NotificationTest from './base/components/notifications/NotificationTest';
import PaginitionTest from './base/components/paginition/PaginitionTest';
import ToastsTest from './base/components/toasts/ToastsTest';

function App() {
  return (
    <div className="App">
      <NotificationTest></NotificationTest>
      <ToastsTest></ToastsTest>
      <PaginitionTest></PaginitionTest>
    </div>
  );
}

export default App;
