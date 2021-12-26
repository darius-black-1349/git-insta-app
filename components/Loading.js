import Loader from 'react-loader-spinner'

function Loading() {
    return (
        <div>
            <Loader type='ThreeDots' color='#DDDDD' height={50} width={50}/>
        </div>
    )
}

export default Loading
