const pages = [
  {
    name: 'Illustration Templates',
    DescriptionTitle: 'About Me',
    Description: "My name is Michelle Acosta Deardorff. I have worked in the Apparel industry for over 8 years working my way from a Design Assistant to a Designer position. My experiences include Childrenswear, Juniors, Women's Tops, Costumes, and some Accessories (including shoes). Along with designing apparel, I have also had the opportunity to create Graphic Tees, Embroideries. I am proficient in Illustrator and Photoshop. I work very well with others and am willing to learn.",
    images: [
      'illustrationTemplates/EnvyUs.jpg',
      'illustrationTemplates/LevisLiberty.jpg',
      'illustrationTemplates/StonyLeggings.jpg',
      'illustrationTemplates/StonySkirtSets.jpg',
      'illustrationTemplates/TwilightSparkle.jpg',
    ]
  },
  {
    name: 'FLATS',
    DescriptionTitle: 'FLATS',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis ligula mollis, bibendum magna at, consectetur velit. Quisque non venenatis sapien. Vestibulum tempus fringilla nibh, ut finibus quam interdum nec. Nulla scelerisque sem at urna congue porta.',
    images: [
      'FLATS/LevisDetailedJacket.jpg',
      'FLATS/LevisKnitTop.jpg',
    ]
  },
  {
    name: 'Hand Sketches',
    DescriptionTitle: 'Hand Sketches',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis ligula mollis, bibendum magna at, consectetur velit. Quisque non venenatis sapien. Vestibulum tempus fringilla nibh, ut finibus quam interdum nec. Nulla scelerisque sem at urna congue porta.',
    images: [
      'HandSketching/handSketches.jpg',
      // 'HandSketching/handSketchFLAT.jpg',
    ]
  },
  {
    name: 'Graphic Tees',
    DescriptionTitle: 'Graphic Tees',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis ligula mollis, bibendum magna at, consectetur velit. Quisque non venenatis sapien. Vestibulum tempus fringilla nibh, ut finibus quam interdum nec. Nulla scelerisque sem at urna congue porta.',
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
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis ligula mollis, bibendum magna at, consectetur velit. Quisque non venenatis sapien. Vestibulum tempus fringilla nibh, ut finibus quam interdum nec. Nulla scelerisque sem at urna congue porta.',
    images: [
      'AccessoriesAndShoes/KaraokeLisa.jpg',
      'AccessoriesAndShoes/SurfFunShoe.jpg',
      'AccessoriesAndShoes/woolyMammothTreatbag.jpg',
    ]
  },
  {
    name: 'Illustration Templates',
    DescriptionTitle: 'Illustration Templates',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis ligula mollis, bibendum magna at, consectetur velit. Quisque non venenatis sapien. Vestibulum tempus fringilla nibh, ut finibus quam interdum nec. Nulla scelerisque sem at urna congue porta.',
    images: [
      'illustrationTemplates/EnvyUs.jpg',
      'illustrationTemplates/LevisLiberty.jpg',
      'illustrationTemplates/StonyLeggings.jpg',
      'illustrationTemplates/StonySkirtSets.jpg',
      'illustrationTemplates/TwilightSparkle.jpg',
    ]
  }
];
export function changeSlide(slideNum) {
  return {
    type: 'CHANGE_SLIDE',
    payload: slideNum,
  };
}

export function changePage(page) {
  
  console.log('and we heeeeeere boyyyy');
  return {
    type: 'CHANGE_PAGE',
    payload: pages[page],
  };
}