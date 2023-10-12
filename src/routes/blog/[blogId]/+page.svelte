<script lang="ts">
  export let data: { post: { content: string , title: string  } }
</script>


<h1>blog post</h1>
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>