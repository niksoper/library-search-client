const initialBooks = [
  {
    title: 'Atonement',
    gettingAvailability: false,
    library: [],
  }, {
    title: 'Fury',
    gettingAvailability: true,
    library: null,
  }, {
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
    title: 'The Wasp Factory',
    gettingAvailability: false,
    library: null,
  }, {
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
    title: 'Pride and Prejudice',
    gettingAvailability: true,
    availability: null,
  },
]

export default (state = initialBooks) => state
