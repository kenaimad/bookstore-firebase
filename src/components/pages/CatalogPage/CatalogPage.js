import BookList from "./BookList/BookList";
import * as s from "./CatalogPage.styled";

const CatalogPage = () => {
    return <s.MainContainer>
        <BookList />
        </s.MainContainer>;
}

export default CatalogPage;