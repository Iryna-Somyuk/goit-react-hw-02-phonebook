
export const Contact = ({userId, contactName, contactNumber, onDelete}) => {
return (<div key={userId}>
    <span>{contactName}</span>
    <span>{contactNumber}</span>
    <button onClick={() => onDelete(userId)}>Delete</button>
</div>)
}