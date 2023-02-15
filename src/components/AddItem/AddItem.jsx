import { useState } from "react";
import { useDispatch } from "react-redux";



function AddItem() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                description,
                image_url: imgUrl
            }
        });
        setDescription('');
        setImgUrl('');
    }

    return (
        <div>

            <label>description 
                <input value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <label>image 
                <input value={imgUrl} onChange={(event) => setImgUrl(event.target.value)} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default AddItem;