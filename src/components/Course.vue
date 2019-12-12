<template lang="pug">
main.course
  .course__menu
    ul
      li.active Introduction
      li Course week 01
      li Course week 02
      li Course week 03
      li Course week 04
  .course__content

    h1.course__heading Course title

    h2.course__author Course author

    .course__notice
      .course__notice-heading Message from author
        span.float-right(aria-hidden='true') ×
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    p.progressbar__heading Your progress:
    .progressbar
      .progress-50
        span 50%
      .progress-10
        span 10%

    .course__notice
      .course__notice-heading Introduction
        span.float-right.time(aria-hidden='true') ~3 min
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    .course__notice
      .course__notice-heading Week 01
        span.float-right.time(aria-hidden='true') ~2 hours
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    .course__notice
      .course__notice-heading Week 02
        span.float-right.time(aria-hidden='true') ~6 hours
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    .course__notice
      .course__notice-heading Week 03
        span.float-right.time(aria-hidden='true') ~3 hours
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    .course__notice
      .course__notice-heading Week 04
        span.float-right.time(aria-hidden='true') ~9 hours
      .course__notice-description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
  name: 'Course'
}
</script>

<style lang="stylus">
main.course
  background #fff
  // padding 0.5rem 1rem
  padding 0
  display grid
  grid-template-columns 20% 1fr
.course__menu
  display flex
  flex-direction column
  padding 0 1rem
  border 1px solid #c7c7c7
  border-radius 5px
.course__menu > *
  list-style none
.course__menu ul
  padding 0.5em 0
  margin 0.5em 0
.course__menu li
  cursor pointer
  padding 0.5rem 1rem
  border 1px solid #c7c7c7
.course__content
  margin-left 2em
.course__menu li.active, .course__menu li:hover
  background #2f3334
  color #fff
  border none
.course__content
  text-align center
.course__notice
  border-radius 2px
  text-align justify
  width 75%
  margin 0 auto
  margin-bottom 2em
.course__notice-heading
  border 1px solid #c6c6c6
  font-size 16pt
  background #e6e6e6
  padding 0.5rem 1rem
.course__notice-heading span
  cursor pointer
  font-weight 600
.course__notice-description
  border 1px solid #c6c6c6
  font-size 14pt
  padding 1rem
.course__notice-heading span.time
  background #17a2b8
  color #fff
  font-size 12pt
  padding 0.25em 0.4em
  margin 0 auto
  border-radius 4px
.progressbar
  display flex
  flex-direction row
  width 75%
  background #c6c6c6
  margin 0 auto
  margin-bottom 2em
.progress-50
  width 50%
  background #2196F3
  color #fff
  padding 0.5rem 1rem
.progress-10
  width 10%
  background #f44336
  color #fff
  padding 0.5rem 1rem
.progressbar span
  font-size 14pt
  text-align center
p.progressbar__heading
  font-size 16pt
  text-align left
  width 75%
  margin 0 auto
  display flex
  margin-bottom 1em
</style>
