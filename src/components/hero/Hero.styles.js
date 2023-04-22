const styles = {
  container: `
    relative
    bg-[url(/assets/hero_background.svg)]
    dark:bg-[url(/assets/hero_background__dark.svg)]
    bg-cover
    max-w-screen-xl
    mx-auto
    h-[700px]
    flex
  `,
  wrapper: `
    relative        
    w-full
    h-full
    flex
    items-center
    justify-around
  `,
  productCard: `
    relative
    flex
    flex-col
    w-[250px]
    rounded-md
    p-4
    bg-[--light-background-color-secondary]
    dark:bg-[--dark-background-color-secondary]
  `,
  productCardHeading: `
    text-center
    text-2xl
    font-bold
    uppercase
    text-transparent
    bg-clip-text
    bg-gradient-text
    dark:bg-gradient-text-dark
  `,
  productCardItem: `
    text-xl
  `,
  productCardPriceContainer: `
    flex
    items-end
    gap-2
  `,
  productCardPrice: `
    text-5xl
    text-transparent
    font-extrabold
    bg-clip-text
    bg-gradient-text
    dark:bg-gradient-text-dark
  `,
  productCardPriceBefore: `
    line-through
    font-bold
  `,
  /* productCardDiscount: `
    absolute
    top-0
    right-0
    flex
    flex-col
    items-center
    justify-center
    w-14
    h-14
    p-4
    border
    border-amber-300
    rounded-full
    bg-gradient-to-tr
    from-amber-500
    to-amber-300
    text-black
    font-bold
    text-lg
    [&>*]:leading-none
  `, */
  productCardDiscountInner: `
    absolute
    top-0
    right-0
    w-[5rem]
    h-[5rem]
    overflow-hidden
  `,
  productCardDiscountRibbon: `
    absolute
    top-[1rem]
    left-[1rem]
    w-[8rem]
    h-[1.5rem]
    text-center
    transform
    -translate-x-[30px]
    -translate-y-[0px]
    rotate-45
    bg-gradient-to-tr
    from-amber-500
    to-amber-300
    text-black
    font-bold
  `,
  gradientX: `
    w-full
    h-full
    absolute
    bg-gradient-to-r
    from-[--light-background-color]
    via-transparent
    to-[--light-background-color]    
    dark:from-[--dark-background-color]
    dark:via-transparent
    dark:to-[--dark-background-color]
  `,
  testGradient: `
    w-full
    h-full
    absolute
    bg-gradient-hero
    dark:bg-gradient-hero-dark
  `,
  testGradientC: `
    w-full
    h-full
    absolute
    bg-gradient-radial from-transparent to-[--light-background-color] dark:to-[--dark-background-color] to-70%
  `
}

export default styles;