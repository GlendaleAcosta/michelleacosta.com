export default function reducer(state = {
  currentPage: {
    name: 'Introduction',
    DescriptionTitle: 'Introduction',
    Description: "My name is Michelle Acosta-Deardorff, have worked in the Apparelindustry for over 8 years working my way from a Design Assistant to a Designer position. My experiences indude Childrenswear, Juniors, Women's Tops, Costumes and some Accessories including shoes. Along with designing apparel, I have also had the opportunity to create Graphic Screens,Textiles and Embroderies, lamproficientin illustrator and Photoshop, work well with others and am willing to learn and expand my knowledge in my skills and the industry.",
    images: [
      'NotableWorks/about1.jpg',
      'NotableWorks/about2.jpg',
    ]
  },
  currentSlide: 'NotableWorks/about1.jpg',
  fetchingSlides: false,
  fetchedSlides: true,
}, action) {
  switch (action.type) {
    case 'CHANGE_SLIDE': {
      return { ...state, currentSlide: state.currentPage.images[action.payload] };
    }
    case 'CHANGE_PAGE': {
      return {
        ...state,
        currentSlide: action.payload.images[0],
        currentPage: action.payload
      };
    }
    case 'FETCH_SLIDES': {
      return {
        ...state,
        fetchingSlides: true,
        fetchedSlides: false,
      }
    }
    case 'SLIDES_SUCCESSFULLY_FETCHED': {
      return {
        ...state,
        fetchingSlides: false,
        fetchedSlides: true,
      }
    }
    default: return state;
  }
}
