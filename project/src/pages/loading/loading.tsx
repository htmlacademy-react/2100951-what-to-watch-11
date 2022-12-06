import Spinner from '../../components/spinner/spinner';

export default function Loading(): JSX.Element {
  return (
    <div className="loading-screen">
      <Spinner />
    </div>
  );
}
