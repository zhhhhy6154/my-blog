window.MathJax = {
  tex: {
    // 这是行内公式的定界符，我们同时启用了 \(...\) 和 $...$
    inlineMath: [["\\("， "\\)"]， ["$"， "$"]]，
    // 这是块级公式的定界符，我们同时启用了 \[...\] 和 $$...$$
    displayMath: [["\\["， "\\]"]， ["$$"， "$$"]]，
    processEscapes: true，
    processEnvironments: true
  }，
  options: {
    ignoreHtmlClass: ".*|"，
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
