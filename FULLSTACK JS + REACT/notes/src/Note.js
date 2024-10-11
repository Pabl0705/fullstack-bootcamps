export const Note = ({content, important}) => {
    return (
        <li>
            <p>{content}</p>
            <small>
                <time>{important}</time>
            </small>
        </li>
    )
}