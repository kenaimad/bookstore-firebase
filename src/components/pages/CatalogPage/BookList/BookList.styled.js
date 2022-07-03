import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { Colors } from '../../../../utils/Colors';

export const BooksList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  background-color: white;
  flex-wrap: wrap;
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  .previous,
  .next {
    border: 1px solid black;
    width: 30px;
    text-align: center;
    background-color: ${Colors.primaryBackground};
  }

  .selected {
    text-decoration: underline;
  }

  .disabled{
    background-color: ${Colors.disabledElement};

    a {
      cursor: default;
    }
  }

  li {
    display: inline;
    margin: .5rem;

    a {
      color: ${Colors.fontBaseColor};
      cursor: pointer;
    }
  }
`;
