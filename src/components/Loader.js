const Loader = ({isLoading,children}) => {
    if(isLoading) return (<div className='lds-dual-ring'>...Loading</div>)

    return children;
}

export default Loader;