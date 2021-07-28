import './loader.css'

const Loader = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <div className="lds-heart">
        <div></div>
      </div>
    );

  return children;
};

export default Loader;
