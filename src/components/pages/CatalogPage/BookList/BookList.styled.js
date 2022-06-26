import styled from 'styled-components';

export const BooksList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  flex-wrap: wrap;
`
export const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;

    ul {
        text-decoration: none;

        li {
            display: inline;
            margin: 1rem;
        }
    }

`