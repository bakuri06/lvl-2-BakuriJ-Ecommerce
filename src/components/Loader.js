import './loader.css'

const Loader = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <div>
        <div>...Loading</div>
      </div>
    );

  return children;
};

export default Loader;
