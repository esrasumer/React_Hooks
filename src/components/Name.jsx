import { useState } from 'react';

export default function Name(props) { //veriyi aldık.
    const [name1, setName1] = useState("Mehmet");
    const [age, setAge] = useState(29);

    return (
        <>
        <h1>Benim adım {props.user}</h1> {/* veriyi sergiledik. */}
        <h1>Benim soyadım {props.surname}</h1> {/* veriyi sergiledik. */}
            <h1> Merhaba {name1}!</h1>
            <h2>{age}</h2>
            <button onClick={() => setName1("esra1")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>change Age</button>
            <hr />
            <br></br>
        </>
    )
}
