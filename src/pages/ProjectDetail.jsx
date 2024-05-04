import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Link from "../components/Link.jsx";
import List from "../components/List.jsx";
import styled from "styled-components";

export default function Project(){
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const {name} = useParams();

    const items = [
        {field: 'URL',
            value: <Link url={project.html_url} title={project.html_url} />
        },
        {field: 'Language',
            value: project.language}
    ]

    useEffect(() => {
        async function fetchData() {
           const data = await fetch (`https://api.github.com/repos/anhtran8/${name}`)
            const result = await data.json();

           if (result) {
           setProject(result);
           setLoading(false);
           }
        }

        fetchData()
    }, []);

    return (
        <StyledDiv>
            <StyledHeader>Project: {project.name}</StyledHeader>
            {loading ? <span>Loading...</span> :
                <StyledDiv>
                    <List items={items} />
                </StyledDiv>}
        </StyledDiv>
    )
}

const StyledHeader = styled.h2 `
    font-family: Skia;
    text-align: center;
    font-size: 2.2em;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Skia;
    padding: 20px;
`;