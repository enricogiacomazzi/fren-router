import { useParams } from "react-router"


export const Bio = () => {
    const params = useParams();

    console.log(params);


    return (
        <h1>Bio</h1>
    )
}