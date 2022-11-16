<script>
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  $: user = {
    loggedIn: false,
    name: null,
    login_time: null,
    password: null
  };
</script>

<main>
  <div class="outline" id="header">
    <Header bind:user />
  </div>

  <p>
    User is {#if !user.loggedIn} not {/if} logged in
  </p>

  <div id="sidebar" />

  <div class="outline" id="footer">
    <Footer />
  </div>
</main>

<style>
</style>
