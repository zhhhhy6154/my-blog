window.MathJax = {
  tex: {
    // 这些是 MathJax 将在页面上寻找的全部符号
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  }
  // 注意：那个导致冲突的 'options' 块被我们删除了
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
