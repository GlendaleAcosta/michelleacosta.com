const pages = [
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