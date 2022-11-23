<script>
  import { element } from "svelte/internal";
  import { post_api_response } from "../call_api";


  export let user;
  export let show_login_form;

  function close_login() {
    show_login_form = !show_login_form;
  }

  async function exec_usr_login() {
    const api_response = post_api_response('/api/v1/test/login', user);
    api_response.then((response) => {
      user = response;
      close_login();
    });
  }

  console.log(user);
</script>

<h1>Login</h1>
<p>Please input your credentials</p>

<form id="login_form">
  <label for="input_name">Name:</label>
  <input type="text" bind:value={user.name} id="input_name" required/><br />
  <label for="input_pwd">Password:</label>
  <input type="password" bind:value={user.password} id="input_pwd" required/>
</form>
<button on:click={exec_usr_login}>Login</button>

<!-- back-button -->
<button on:click={close_login}>Back</button>

<style>
  form {
    width: 100%;
  }
  input {
    color: #b1b1b1;
    width: auto;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-size: 24px;
  }
</style>
