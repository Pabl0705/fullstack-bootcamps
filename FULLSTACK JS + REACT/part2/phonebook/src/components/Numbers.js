const Number = ({ contact, onDelete }) => {
    return (
        <p>
            {contact.name}: {contact.number}
            <button onClick={() => onDelete(contact)}>DELETE</button>
        </p>
    );
};

export const Numbers = ({ contacts, strSearch, onDelete }) => {
    return (
        <div>
            <h2>Numbers</h2>
            {contacts
                .filter(person => person.name.toLowerCase().includes(strSearch.toLowerCase()))
                .map(person => (
                    <Number key={person.id} contact={person} onDelete={onDelete} />
                ))}
        </div>
    );
};