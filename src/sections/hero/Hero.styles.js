const styles = {
  container: `
    relative
    bg-[url('assets/hero_background.svg')]
    dark:bg-[url('assets/hero_background__dark.svg')]
    bg-cover
    h-[80vh]
    transition-all
    duration-300
  `,
  wrapper: `
    max-w-screen-xl
    relative        
    w-full
    h-full
    flex
    flex-col
    md:flex-row-reverse
    items-center
    justify-between
    p-4
    gap-4
    mx-auto
  `,
  heroTextTab: `
    flex
    flex-auto
    flex-col
  `,
  heroHeading: `
    text-4xl
    md:text-6xl
    font-black
    uppercase
    bg-gradient-text
    dark:bg-gradient-text-dark
    bg-clip-text
    text-transparent
    drop-shadow-md
    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.7)]    
  `,
  heroSubHeading: `
    text-2xl
    md:text-4xl
    font-medium
    drop-shadow-md
  `,
  heroDesc: `
    font-medium
  `,
  heroImgContainer: `
    flex
    items-center
    w-full
    h-full
  `,
  heroImg: `
    h-full
    max-h-[400px]
    w-full
    bg-[url('assets/hero_illustration.svg')]
    bg-contain
    bg-no-repeat
    bg-center
  `,
  productCardHeading: `
    text-2xl
    font-bold
    uppercase
    text-transparent
    bg-clip-text
    bg-gradient-text
    dark:bg-gradient-text-dark
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
  `,

  
}

export default styles;