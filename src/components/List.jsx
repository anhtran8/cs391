import styled from "styled-components";

export default function List({items}) {
    return (
        <StyledList>
            {items.map((item) => (
                <StyledListItem key={item.field}>
                    <span>{item.field}: </span>
                    {item.value}
                </StyledListItem>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledListItem = styled.li `
    margin-bottom: 15px;
`