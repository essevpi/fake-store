const styles = {
  navbarContainer:
    'bg-[--light-background-color-secondary] dark:bg-[--dark-background-color-secondary]',
  navbarWrapper:
    'max-w-screen-xl flex items-center justify-between mx-auto p-4 h-16 border-b border-[--light-border-color] dark:border-[--dark-border-color]',
  logo: 'bg-clip-text text-transparent text-2xl font-extrabold bg-gradient-to-tl from-[--light-accent] to-[--light-accent-hover] dark:from-[--dark-accent] dark:to-[--dark-accent-hover]',
  navbarActions:
    'flex items-center divide-x [&>:not(:first-child)]:pl-4 [&>:not(:last-child)]:pr-4',
};

export default styles;
