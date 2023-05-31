<script>
    export let id = "input_field";
	export let name = "input_field";
	export let value = new Date().toISOString().split('T')[0];
</script>

<div class="content">
    <!-- Date inputs cannot really be styled... -->
	<input type="date" id="{id}" name="{name}" bind:value />
</div>

<style>
    .content {
        /* FieldBG */
		background: #b1b1b1;
		border-radius: 5px;

		padding: 0px 15px 0px 48px;

		height: 45px;
    }

    input {
        width: 100%;
        height: 100%;
        
        /* Text LightBG */
		color: #686868;

        background: none;
		border: none;
        cursor: text;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
</style>
