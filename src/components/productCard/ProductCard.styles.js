const styles = {
  productCard: `
    relative
    flex
    flex-col
    items-center
    gap-4
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
  productCardRating: `
    flex
    justify-center
  `,
  productCardStar: `
    text-[1.1rem]
    text-amber-400
  `,
  productCardActionsContainer: `
    flex
    w-full
    justify-between
    gap-2
    [&>*]:flex-[0.5]
  `,
};

export default styles;
