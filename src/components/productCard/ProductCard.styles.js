const styles = {
  productCard: `
    relative
    flex
    flex-col
    items-center
    gap-2
    w-[250px]
    rounded-md
    p-4
    bg-[--light-background-color]
    dark:bg-[--dark-background-color-tertiary]
    shadow-lg
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
    flex
    w-full
    flex-col
    [&>span:first-child]:text-lg
    [&>span:first-child]:font-extrabold
    [&>span:nth-child(2)]:capitalize
  `,
  productCardPriceContainer: `
    flex
    items-end
    gap-2
    my-4
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
    transform
    -translate-x-[30px]
    -translate-y-[-5px]
    rotate-45
    bg-gradient-to-tr
    from-amber-500
    to-amber-300
    text-center
    text-black
    text-md
    tracking-tighter
    font-bold
  `,
  productCardActionsContainer: `
    flex
    w-full
    justify-between
    gap-2
    my-4
    [&>*]:flex-[0.5]
  `,
};

export default styles;
