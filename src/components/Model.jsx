import '../styles/Model.css'

const Model = ({active, setActive, children}) => {
    return (
        <div className={active ? "Model active": "Model"} onClick={() => setActive(false)}>
            <div className={active ? "Model-content active": "Model-content"} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Model;