import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import List from '../components/List.jsx';
import styled from "styled-components";

export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://api.github.com/users/anhtran8/repos');
            const result = await data.json();
            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }
        fetchData();
        }, [])

    return (
        <StyledDiv>
            <StyledHeader>Projects</StyledHeader>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <List
                    items={projects.map((project) => ({
                            field: project.name,
                            value: (
                                <NavLink to={`/projects/${project.name}`}>
                                    Open Project
                                </NavLink>
                            )
                        }
                    ))}
                    />
            )
            }
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
`;