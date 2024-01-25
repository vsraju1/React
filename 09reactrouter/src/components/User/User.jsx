import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()

    return (
        <>
        <div className="text-center bg-gray-600 text-3xl p-10 text-white">
        <h1>You've entered "{userid}" in the end of the url. </h1>
        </div>
        </>
    )
}

export default User;