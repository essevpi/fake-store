const styles = {
  label: `
    relative
    inline-flex
    items-center
    cursor-pointer
  `,
  input: `
    sr-only peer
  `,
  toggle: `
    w-11
    h-6
    bg-[--light-button-color]
    peer-focus:outline-none
    rounded-full
    peer
    peer-checked:after:translate-x-full
    peer-checked:after:border-[--light-accent]
    after:content-['']
    after:absolute
    after:top-[2px]
    after:left-[2px]
    after:bg-[--light-background-color]  
    after:border-[--light-border-color]
    after:border
    after:rounded-full
    after:h-5
    after:w-5
    after:transition-all
    peer-checked:bg-neutral-600
    peer-focus:ring-2
    peer-focus:ring-[--light-accent]
    dark:peer-checked:bg-[--dark-button-color]
    dark:peer-checked:after:border-neutral-800   
    dark:after:bg-[--dark-background-color]
    dark:peer-focus:ring-[--dark-accent]
  `,
  moonIcon: `
    hidden absolute top-[4px] left-[4px] text-[--dark-accent] peer peer-checked:block peer-hover:text-[--dark-accent-hover] transition-all
  `,
  sunIcon: `
    absolute top-[4px] left-[24px] text-[--light-accent] peer peer-checked:hidden peer-hover:text-[--light-accent-hover] transition-all
  `,
};

export default styles;
