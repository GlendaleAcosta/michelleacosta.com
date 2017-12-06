export default function reducer(state = {
  currentPage: {
    name: 'Illustration Templates',
    DescriptionTitle: 'Illustration Templates',
    // Description: `My name is Michelle Acosta Deardorff. I have worked in the Apparel industry for over 8 years working my way from a Design Assistant to a Designer position. My experiences include Childrenswear, Juniors, Women's Tops, Costumes, and some Accessories (including shoes). Along with designing apparel, I have also had the opportunity to create Graphic Tees, Embroideries. I am proficient in Illustrator and Photoshop. I work very well with others and am willing to learn.`,
    Description: 'Sketch renderings using Illustrator and Photoshop for Knitworks, Levis, and Disguise.',
    images: [
      'illustrationTemplates/EnvyUs.jpg',
      'illustrationTemplates/LevisLiberty.jpg',
      'illustrationTemplates/StonyLeggings.jpg',
      'illustrationTemplates/StonySkirtSets.jpg',
      'illustrationTemplates/TwilightSparkle.jpg',
    ]
  },
  currentSlide: 'illustrationTemplates/EnvyUs.jpg',
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
    default: return state;
  }
}
