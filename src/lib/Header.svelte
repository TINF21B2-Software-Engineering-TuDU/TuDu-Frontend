<script>
  // imports
  import Login from "./Login.svelte";
  import { fade, fly } from "svelte/transition";

  // parameters
  export let user;

  // variables
  let show_login_form = false;

  function show_login() {
    console.log("SHOW LOGIN");
    show_login_form = !show_login_form;
  }

  function register() {
    console.log("REGISTER");
  }

  function logout() {
    console.log("LOGOUT");
    user = {
      loggedIn: false,
      name: null,
      login_time: null,
      password: null,
    }
    // show_login_form = !show_login_form;

    // TODO: delete cookies and jwt and all the other local user stuff
  }
  $: console.log(`user.loggedIn: ${user.loggedIn}, show_login_form: ${show_login_form}`);
</script>

<p>
  User is {#if !user.loggedIn} not {/if} logged in
</p>
{#if !(user.loggedIn)}
  <button on:click={show_login}> Login </button>
  <button on:click={register}> Register </button>
{:else}
  <p>Hello, {user.name}</p>
  <button on:click={logout}> Logout </button>
{/if}

<!-- user.loggedIn = !user.loggedIn; -->
<!-- login page -->
{#if (show_login_form)}
  <div
    id="viewport"
    in:fly={{ y: 200, duration: 400 }}
    out:fly={{ y: 200, duration: 400 }}
  >
    <svelte:component this={Login} bind:user bind:show_login_form={show_login_form} />
  </div>
{/if}

<!--  -->
<style>
</style>
