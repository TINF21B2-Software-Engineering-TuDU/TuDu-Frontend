<script>
  export let user;
  export let back;

  function close_login() {
    back = !back;
  }
</script>

<h1>Login</h1>
<p>Please input your credentials</p>

<form>
  <label id="input_name">Name:</label>
  <input type="text" bind:value={user.name} id="input_name" /><br />
  <label id="input_pwd">Password:</label>
  <input type="password" bind:value={user.password} id="input_pwd" />
</form>

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
