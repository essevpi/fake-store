const styles = {
  sectionContainer: `
    bg-[--light-background-color-tertiary]
    dark:bg-[--dark-background-color]
  `,
  headingContainer: `
    flex
    flex-col
    items-center
    justify-center
    w-full
    h-[--heading-container-height]
    border-y
    border-[--light-border-color]
    dark:border-[--dark-border-color]
    bg-[--light-background-color-secondary]
    dark:bg-[--dark-background-color-secondary]
  `,
  heading: `
    w-full
    max-w-screen-xl
    text-center
    text-transparent
    text-3xl
    font-extrabold
    uppercase
    bg-gradient-text
    dark:bg-gradient-text-dark
    bg-clip-text
  `,
  dealsContainer: `
    max-w-screen-xl
    flex
    flex-col
    items-center
    justify-center
    mx-auto
    px-4
  `,
  dealsWrapper: `
    flex
    flex-wrap
    items-center
    justify-center
    w-full
    py-4
    gap-8
  `
}

export default styles;