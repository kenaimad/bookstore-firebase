export const getBooks = async () => {
    //let newRecipes = [];
    const response = await fetch(
      `https://bookstore-41131-default-rtdb.firebaseio.com/books.json`
    );
  
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
  
    const responseData = await response.json();
  
    const loadedBooks = [];
  
    for (const key in responseData) {
      loadedBooks.push({
        id: key,
        title: responseData[key].title,
        author: responseData[key].author,
        cover: responseData[key].cover,
        price: responseData[key].price,
      });
    }
    return loadedBooks;
  };