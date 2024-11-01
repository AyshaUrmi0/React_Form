import { useState, useRef, useEffect } from "react";

const SimpleForm = () => {
    const [error, setError] = useState('');
    const nameInputRef = useRef(null); 

    useEffect(() => {
        console.log(nameInputRef.current);
        nameInputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

        if (e.target.phone.value.length < 10) {
            setError('Phone number must be 10 digits');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    ref={nameInputRef} 
                />
                <br />
                <input type="email" name="email" required />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
                <div>
                    {error && <p>{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default SimpleForm;
