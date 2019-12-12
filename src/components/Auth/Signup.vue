<template lang="pug">
main.signup
  .banner__hello
    img(src='./auth.png')
  form(@submit.prevent="onSubmit").form__content
    h1.form__heading Sign up
    .form-group
      input(
        type="email"
        placeholder="Email"
        required="true"
      )
    .form-group
      input(
        type="password"
        placeholder="Password"
        required="true"
      )
    .form-group
      input(
        type="password"
        placeholder="Repeat password"
        required="true"
      )
    .form__buttons
      button.btn.btn-big.btn-dark(type="submit") Submit
    .form__notice
      p Do you have an account?
        router-link(to='/signin') Enter here.
</template>
<script>
export default {
  name: 'Signup',
  methods: {
    onSubmit () {
      this.$router.push('/course')
    }
  }
}
</script>
<style lang="stylus">
main.signup
  height 60vh
  padding 0 20%
  display grid
  grid-template-columns repeat(2, 1fr)
  background #fff

.form__content
  display flex
  flex-direction column
  text-align center
  margin 0.5em
  border-radius 3px
  border 1px solid #c7c7c7
  padding 0.5rem 1rem
  background #fff

.form-group
  width 75%
  margin 0.5em auto

.form-group > input
  width inherit
  border 1px solid #c7c7c7
  border-radius 5px
  padding 0.5rem 1rem
  font-size 14pt

.form__heading
  text-align center

button
  border none

.form__buttons
  margin-top 3em
  margin-bottom 1em

.form__notice
  display flex
  margin auto

.form__notice p
  font-size 14pt

.form__notice a
  margin-left 0.25rem

.banner__hello
  display flex
  margin auto

.banner__hello img
  width 100%
</style>
