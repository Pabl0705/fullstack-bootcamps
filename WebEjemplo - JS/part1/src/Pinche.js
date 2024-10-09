const Pinche = (props) => {
    return <h2 
    style={{color: props.color}}> {/* El estilo se ha de pasar como objeto */}
        {props.message}</h2>   /* Estamos cogiendo los atributos "message" que se utilicen en el codigo */
}

export default Pinche;