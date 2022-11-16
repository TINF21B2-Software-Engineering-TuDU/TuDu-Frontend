<script>
  // imports
  import Login from "./Login.svelte";
  import { fade, fly } from "svelte/transition";

  // parameters
  export let user;

  // variables
  let login_show = false;

  function login() {
    console.log("LOGIN");
    login_show = !login_show;
  }

  function register() {
    console.log("REGISTER");
  }

  function logout() {
    console.log("LOGOUT");
    user.loggedIn = !user.loggedIn;
    login_show = !login_show;
  }
  $: console.log(user.loggedIn, login_show);
</script>

<p>
  User is {#if !user.loggedIn} not {/if} logged in
</p>
{#if login_show && !user.loggedIn}
  <button on:click={login}> Login </button>
  <button on:click={register}> Register </button>
{:else}
  <p>Hello, {user.name}</p>
  <button on:click={logout}> Logout </button>
{/if}

<!-- user.loggedIn = !user.loggedIn; -->
<!-- login page -->
{#if login_show}
  <!-- <div id="viewport" transition:fade> -->
  <div
    id="viewport"
    in:fly={{ y: 200, duration: 2000 }}
    out:fly={{ y: 200, duration: 2000 }}
  >
    <svelte:component this={Login} bind:user bind:back={login_show} />
  </div>
{/if}

<!--  -->
<style>
</style>
