import React from 'react'

const HelloMessage = (props) => {
    return <div>
        Nazwisko: {props.nazwisko}<br />
        Email: {props.email}<br />
        Wiek: {props.wiek}<br />
    </div>
}

export default HelloMessage