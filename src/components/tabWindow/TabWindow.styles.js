const styles = {
  container: `
    flex
    flex-col
    items-center
    justify-center
    w-full
  `,
  tabsContainer: `
    w-full
    bg-[--light-background-color-secondary]
    dark:bg-[--dark-background-color-secondary]
  `,
  tabs: `
    flex
    items-center
    justify-center
    w-full
    w-full
    max-w-screen-xl
    mx-auto
    list-none
  `,
  tabItem: `
    p-4
    font-bold
    uppercase
    hover:bg-[--light-background-color-hover]
    dark:hover:bg-[--dark-background-color-hover]
    transition-all
    cursor-pointer
    text-[--light-text-color-secondary]
    dark:text-[--dark-text-color-secondary]
  `,
  activeTab: `
    bg-[--light-background-color-tertiary]
    dark:bg-[--dark-background-color-tertiary]
    text-[--light-text-color]
    dark:text-[--dark-text-color]
    relative
  `,
  tabUnderline: `
    absolute
    -bottom-px
    left-0
    right-0
    h-[2px]
    bg-[--light-accent]
    dark:bg-[--dark-accent]
  `,
  windowContainer: `
    flex
    justify-center
    max-w-screen-xl
    mx-auto
    px-4
    w-full
    overflow-y-hidden
  `
};

export default styles;
