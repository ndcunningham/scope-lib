// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { myAweasomeService } from '@myorgname/my-aweasome-service';
export function App() {
  return (
    <div>
      { myAweasomeService() }
    </div>
  );
}

export default App;
