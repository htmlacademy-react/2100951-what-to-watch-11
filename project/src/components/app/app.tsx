import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  title: string;
  genre: string;
  year: number;
}

function App(props: AppPageProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
