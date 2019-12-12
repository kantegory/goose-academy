<template lang="pug">
main
  .banner
    .banner-text
      h1 Hey, dude!
      h2 We have some courses for your exam, bro!
      br
      router-link(to='/signup').btn.btn-big.btn-dark.mt-2 Sign up for free
    .banner-gradient
    .banner-img
  .container
    router-link(to='/course').card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author
    .card
      .card__header
        img(src='https://via.placeholder.com/468x160.png', alt='')
      .card__body
        p
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .card__footer
        p.ml-1 A few words about author

</template>
<script>
export default {
  name: 'Main'
}
</script>

<style lang="stylus">
.container
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-template-rows repeat(3, 1fr)
  margin-top 0.25em
  grid-column-gap 2em
  grid-row-gap 2em
  padding 0.5em 8%

.card
  text-decoration none
  color #000
  cursor pointer
  display flex
  flex-direction column
  height inherit
  width inherit
  background #fff
  box-shadow 3px 2px 3px rgba(0, 0, 0, .3)
  border-radius 5px
  justify-content space-between
  &:hover
    box-shadow 3px 0 7px rgba(0, 0, 0, .3)

.card__header
  width calc(100% - 2rem)
  margin 1rem
  & > img
    width 100%
    margin 0 auto

.card__body
  width calc(100% - 2rem)
  margin 1rem
  text-align justify
  font-size 14pt
  & > p
    width 100%

.card__footer
  width 100%
  background #f2f2f2
  height 3em
  bottom 0
  & > p
    font-size 12pt
    line-height 12pt

.banner
  width 100%
  min-height 500px
  max-height 500px
  position relative
  margin 0 auto

.banner-gradient
  margin 0.1rem auto
  background linear-gradient(90deg, #db5f4d, rgba(39, 16, 102, 0) 55%, rgba(39, 16, 102, 0) 70%, #db5f4d)
  width 100%
  height 100%
  z-index 2
  position absolute

.banner-img
  background-image url('banner.jpg')
  background-position 50%
  background-size cover
  position absolute
  z-index 1
  margin 0.1rem auto
  width 100%
  height 100%

.banner-text
  color #fff
  margin-top 5em
  margin-left 5em
  max-width 500px
  padding 0.5rem 1rem
  position absolute
  width 100%
  z-index 3
  height 100%
  & > p
    font-size 18pt

.btn-big
  text-decoration none
  font-size 18pt
  line-height 18pt
  padding 1rem 1.5rem

.btn-dark
  background #2f3334
  color #fff
  &:hover
    background #fff
    color #2f3334

.btn
  cursor pointer
  text-decoration none
  margin-top auto
  margin-bottom auto
  padding 0.75rem 1rem
  border-radius 5px
  line-height 14pt
  height fit-content

@media (max-width: 1200px)
    .container
        grid-template-columns repeat(2, 1fr)
        grid-template-rows repeat(5, 1fr)

@media (max-width: 800px)
    .container
        grid-template-columns repeat(1, 1fr)
        grid-template-rows repeat(9, 1fr)
</style>
