<script context="module">
    export function load({ error, status }) {
        return {
            props: { message: error.message }
        };
    }
</script>

<script>
    export let message;
</script>

<div class="error">
    <h2>Ooops</h2>
    <p>{ message }</p>
    <a href="/guides">View all Guides</a>
</div>

<style>
    .error {
        text-align: center;
        margin-bottom: 60px;
    }
</style>