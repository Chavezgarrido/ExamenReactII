import Header from '../components/Header'

const NotFound = () => {
    return(
        <>
            <Header />
            <div className='myCard' style={{ width: '17rem'}}>
                <p>La página que buscas no existe </p>
            </div>
        </>
    )
}

export default NotFound