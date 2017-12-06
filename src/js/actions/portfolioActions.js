const pages = [
  {
    name: 'Introduction',
    DescriptionTitle: 'Introduction',
    Description: "My name is Michelle Acosta-Deardorff, have worked in the Apparelindustry for over 8 years working my way from a Design Assistant to a Designer position. My experiences indude Childrenswear, Juniors, Women's Tops, Costumes and some Accessories including shoes. Along with designing apparel, I have also had the opportunity to create Graphic Screens,Textiles and Embroderies, lamproficientin illustrator and Photoshop, work well with others and am willing to learn and expand my knowledge in my skills and the industry.",
    images: [
      'NotableWorks/about1.jpg',
      'NotableWorks/about2.jpg',
    ]
  },
  {
    name: 'Illustration Templates',
    DescriptionTitle: 'Illustration Templates',
    Description: 'Sketch renderings using Illustrator and Photoshop for Knitworks, Levis, and Disguise.',
    images: [
      'illustrationTemplates/EnvyUs.jpg',
      'illustrationTemplates/LevisLiberty.jpg',
      'illustrationTemplates/StonyLeggings.jpg',
      'illustrationTemplates/StonySkirtSets.jpg',
      'illustrationTemplates/TwilightSparkle.jpg',
    ]
  },
  {
    name: 'Noteworthy Designs',
    DescriptionTitle: 'Noteworthy Designs',
    Description: 'A collection of noteworthy projects.',
    images: [
      'NotableWorks/Store Merchandise.jpg',
      'NotableWorks/BTS ROCKS.jpg',
      'NotableWorks/MLP 2017-COLLECTION P.1.jpg',
      'NotableWorks/MLP 2017-COLLECTION P.2.jpg',
      'NotableWorks/POTC5.jpg',
      'NotableWorks/POTC5P.2.jpg',
      'NotableWorks/WWE-1.jpg',
      'NotableWorks/Cindy Baby.jpg',
      'NotableWorks/Cindy Jelly Shoe.jpg',
      'NotableWorks/baby Minnie.jpg',
    ]
  },
  {
    name: 'FLATS',
    DescriptionTitle: 'FLATS',
    Description: 'Rendered in Illustrator for Levis.',
    images: [
      'FLATS/LevisDetailedJacket.jpg',
      'FLATS/LevisKnitTop.jpg',
    ]
  },
  {
    name: 'Hand Sketches',
    DescriptionTitle: 'Hand Sketches',
    Description: 'Sketches...by hand :)',
    images: [
      'HandSketching/handSketches.jpg',
      // 'HandSketching/handSketchFLAT.jpg',
    ]
  },
  {
    name: 'Graphic Tees/Textile Print/Embroideries',
    DescriptionTitle: 'Graphic Screens & More',
    Description: "Graphic Screens, Textile Print, and Embroideries. These were created for Just For Wraps, Levis, and personal projects.",
    images: [
      'GraphicTeesAndShiet/awesomeInAnyOutfit.jpg',
      'GraphicTeesAndShiet/aztecEmb.jpg',
      'GraphicTeesAndShiet/aztecSunburstNecklace.jpg',
      'GraphicTeesAndShiet/DistressedGeo.jpg',
      'GraphicTeesAndShiet/iLoveMyTutu.jpg',
      'GraphicTeesAndShiet/neckLine.jpg',
    ]
  },
  {
    name: 'Accessories and Shoes',
    DescriptionTitle: 'Accessories and Shoes',
    Description: 'Created for the Disney Store, Pottery Barn, & Personal Projects.',
    images: [
      'AccessoriesAndShoes/KaraokeLisa.jpg',
      'AccessoriesAndShoes/SurfFunShoe.jpg',
      'AccessoriesAndShoes/woolyMammothTreatbag.jpg',
    ]
  },
];
export function changeSlide(slideNum) {
  return {
    type: 'CHANGE_SLIDE',
    payload: slideNum,
  };
}

export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    payload: pages[page],
  };
}

export function fetchSlides() {
  return{
    type: 'FETCH_SLIDES',
    payload: null,
  }
}

export function slidesFetched() {
  return{
    type: 'SLIDES_SUCCESSFULLY_FETCHED',
    payload: null,
  }
}