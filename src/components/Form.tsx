import { useState } from "react"

export default function Form() {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        "entry.565254537": "",
        "entry.1149744153": "",
        "entry.2142526939": ""
    });

    const handleInputData = (input: string) => (e: React.FormEvent<EventTarget>) => {
        const {value} = e.target as HTMLInputElement;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };

    async function handleSubmit(e: React.FormEvent<EventTarget>) {
        e.preventDefault();
        setSubmit(true);

        const url = `https://docs.google.com/forms/u/0/d/1CLp29wJ36fTqDKGZnFaC-0vvsE4ps1XRUSMNrNBhxvQ/formResponse?entry.565254537=${formData["entry.565254537"]}&entry.1149744153=${formData["entry.1149744153"]}&entry.2142526939=${formData["entry.2142526939"]}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }

    return (
        <section>
            <h2>Contact</h2>
            {submit ? (
                <div>Form submitted!</div>
            ) : (
                <form onSubmit={handleSubmit} target="_self">
                    <label htmlFor="entry.565254537">Name</label>
                    <input type="text" name="entry.565254537" onChange={handleInputData("entry.565254537")} value={formData["entry.565254537"]}  required />
                
                    <label htmlFor="entry.1149744153">E-mail</label>
                    <input type="email" name="entry.1149744153" onChange={handleInputData("entry.1149744153")} value={formData["entry.1149744153"]} required />

                    <label htmlFor="entry.2142526939">Message</label>
                    <textarea name="entry.2142526939" rows={4} cols={10} onChange={handleInputData("entry.2142526939")} value={formData["entry.2142526939"]} required></textarea>

                    <button type="submit">Submit</button>
                </form>
            )
        }
        </section>
    )
}