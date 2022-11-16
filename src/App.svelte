<script>
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  $: user = {
    loggedIn: false,
    name: "Niklas",
  };
</script>

<main>
  <div id="header">
    <Header bind:user />
  </div>

  <p>
    User is {#if !user.loggedIn} not {/if} logged in
  </p>

  <div id="sidebar" />

  <div id="footer">
    <Footer />
  </div>
</main>

<style>
  #header {
    border: 1px solid red;
    padding: 60px;
    text-align: center;
    background-color: #608894;
    color: #686868;
    font-size: 30px;
  }

  #footer {
    border: 1px solid red;
    padding: 60px;
    text-align: center;
    background-color: #608894;
    color: #686868;
    font-size: 30px;
  }
</style>
