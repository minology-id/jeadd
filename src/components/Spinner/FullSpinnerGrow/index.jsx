import SpinnerGrowing from '../Growing';

export default function FullSpinnerGrow() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <SpinnerGrowing />
    </div>
  );
}
