/* eslint-disable react-hooks/exhaustive-deps */
import { Text } from "@chakra-ui/react";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {

    const { projKey } = useParams();
    const { setHeading }= useOutletContext();

    useEffect(() => {
        setHeading(projKey);
    }, [projKey])

    return (
        <Text>Project Page</Text>
    );
}

export default Project;