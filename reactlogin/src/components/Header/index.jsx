import './header.css'

function Header(props) {
    return (
            <div className="header">
                <h1>{props.logo}</h1>
                <ul className="navLinks">
                    {props.links.map(
                        (e, index) => (
                            <li key={index}>
                                <a href="#"  >{e}</a>
                            </li>
                        )
                    )}
                </ul>
            </div>
    )
}

export default Header