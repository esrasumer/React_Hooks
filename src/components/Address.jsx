import { useState } from "react";


export default function Address() {
    const [address, setAddress] = useState({ title: "çiçek mah. akasya sok.", zip: 8774 });

    return (
        <div>
            <h2>Address</h2>
            <div>
                {address.title} {address.zip}
            </div>
            <br />
            <br>
            </br>
            <button onClick={() => setAddress({ ...address, title: "ordu cad.güneş sok." })}>Change the Address</button>
            <hr />
            <br></br>
        </div>
    )
}