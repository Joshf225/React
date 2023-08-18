import Quiz from "./Quiz";
import Complete from "./Complete";
import { quizData } from "./data";

function App() {
  const nums = 4;
  if (nums) {
    return (
      <main>
        <Quiz />
      </main>
    );
  } else {
    return (
      <main>
        <Complete />
      </main>
    );
  }
}

export default App;
