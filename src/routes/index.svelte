<script>
    let title = 'Ninja Gaming Guides';

    const updateTitle = () => {
        title = 'Something Completely Different'
    }
</script>


<div class="index">
    <h1>
        {#if title !== ''}
            { title }
        {:else}
            &nbsp;
        {/if}
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate ea esse quo. Consectetur dolorum eius eos harum pariatur perferendis? Assumenda aut, exercitationem laboriosam obcaecati quaerat quia recusandae sed voluptatum.</p>

    <button on:click={ updateTitle }>Change Title</button>
    <input type="text" bind:value={ title }>

    <br>
    <br>
    <a href="/guides">View Guides</a>
    <a href="/about">About</a>
</div>


<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>
