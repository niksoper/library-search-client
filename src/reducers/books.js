const initialBooks = [
  {
    id: '1',
    title: 'Atonement',
    gettingAvailability: false,
    library: [],
  }, {
    id: '2',
    title: 'Fury',
    gettingAvailability: true,
    library: null,
  }, {
    id: '3',
    title: 'The Muse',
    gettingAvailability: false,
    library: [{
      url: 'http://goodreads.com',
      availability: [{
        library: 'Bristol Central Library',
        status: 'On Shelf',
      }, {
        library: 'Bath Library',
        status: 'Due 20/02/2017',
      }],
    }, {
      url: 'https://www.librarieswest.org.uk',
      availability: [{
        library: 'Bristol Central Library',
        status: 'On Shelf',
      }, {
        library: 'Bath Library',
        status: 'On Shelf',
      }],
    }],
  }, {
    id: '4',
    title: 'The Wasp Factory',
    gettingAvailability: false,
    library: null,
  }, {
    id: '5',
    title: 'Fear and Loathing in Las Vegas',
    gettingAvailability: false,
    library: [{
      url: 'http://goodreads.com',
      availability: [{
        library: 'Bristol Central Library',
        status: 'On Shelf',
      }, {
        library: 'Bath Library',
        status: 'Due 20/02/2017',
      }],
    }],
  }, {
    id: '6',
    title: 'Pride and Prejudice',
    gettingAvailability: true,
    availability: null,
  },
]

export default (state = initialBooks, action) => {
  switch (action.type) {

    case 'START_GET_AVAILABILITY':
      return state.map((book) => {
        if (book.id !== action.payload.bookId) return book
        return Object.assign({}, book, {
          gettingAvailability: true,
        })
      })

    case 'RECEIVE_AVAILABILITY':
      return state.map((book) => {
        if (book.id !== action.payload.bookId) return book
        return Object.assign({}, book, {
          gettingAvailability: false,
          library: action.payload.response,
        })
      })


    default:
      return state
  }
}
