<template>
  <div id="disqus_thread"></div>
</template>
<script>
export default {
  mounted() {
    try {
      let disqus_config = function() {
        this.page.url = window.location.origin;
        this.page.identifier = window.location.pathname;
      };
      (function() {
        let d = document,
          s = d.createElement("script");
        s.src = "https://magicaquartet.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            