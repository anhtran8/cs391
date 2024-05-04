import {useState, useEffect} from "react";
import Link from "../components/Link.jsx";
import List from "../components/List.jsx";
import styled from "styled-components";

export default function Profile() {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({
    });

    const items = [
        {field: 'HTML_URL',
            value: <Link url={profile.html_url} title={profile.html_url}/>
        },
        {field: 'REPOS_URL',
            value: <Link url={profile.repos_url} title={profile.repos_url} />
        },
        {field: 'Name',
            value: profile.name},
        {field: 'Location',
            value: profile.location},
        {field: 'Bio',
            value: profile.bio}
    ]

    useEffect(() => {
        async function fetchData(){
            const profile = await fetch('https://api.github.com/users/anhtran8');
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    return (
        <StyledDiv>
        <StyledHeader>About Me</StyledHeader>
        {loading ? (
            <span>Loading</span>
        ) : (
           <StyledDiv>
               <StyledImg
               src={profile.avatar_url}
               alt={profile.name}
               />
               <List items={items} />
           </StyledDiv>
        )}
        </StyledDiv>
    )
}

const StyledHeader = styled.h2 `
    font-family: Skia;
    text-align: center;
    font-size: 1.8em;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Skia;
    margin: 0; 
    padding: 0;
`;

const StyledImg = styled.img`
    width:  200px;
    height: auto;
    margin: auto;
`