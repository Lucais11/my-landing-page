import 'modern-css-reset'
import "../styles/index.css"
import GradientPage from '../components/gradientPage';

const App = ({ Component, pageProps }) => {
  return (
    <GradientPage>
      <Component {...pageProps}/>
    </GradientPage>
  );
};

export default App;
