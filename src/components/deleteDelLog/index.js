import './style.css'


const DeleteDelLog = () => {
    return (
        <div className="delDeliveryLog">
            <h2 className="titleDelete"> Delete this delivery log? </h2>
            <p className="commentDelete">Are you sure you want to delete this log?</p>
            <div className="buttons">
            <button className="buttons-menu buttonOne"> Cancel </button>
            <button className="buttons-menu buttonTwo"> Delete log </button>
            </div>
            
        </div>
    )
}

export default DeleteDelLog