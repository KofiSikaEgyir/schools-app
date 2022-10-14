import axios from "axios";
import React, {useState} from "react";
import { useRouter } from "next/router";

const AddSchool = () => {
    CONST [data, setData] = useState({
        title: "",
        body: "",
    });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value });
        }
            const handleSubmit = async (e) => {
                e.preventDefault();
            
            try {
                const res = await axios.schools(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/schools`,
                    {
                        data,
                    }
                );
                router.push("/schools");
            } catch (error) {
                setError(error.message);
            }
        };

    return ( <div>
        <h3>AddSchool</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={data.title} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" cols="30" rows="10"
            value={data.body} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Add School</button>
        </form>
        </div>
    );
};

export default AddSchool;
