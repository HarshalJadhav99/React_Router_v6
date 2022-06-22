import React, { useState } from "react";

const FormHandling = () => {
	const [name, setName] = useState("");
	const [comments, setComments] = useState("");
const handleSubmit = (e)=>{
    alert(`${name} ${comments}`)
e.preventDefault()
}
	return (
		<div>
			<form>
				<div>
					<label>UserName</label>
					<input
						type="text"
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
				</div>
                <div>
                    <label>Commets</label>
                    <textarea value={comments} onChange={(event)=>{setComments(event.target.value)}} />
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default FormHandling;
