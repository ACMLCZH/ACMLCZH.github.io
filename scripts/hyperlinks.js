const hyperlinks = {
    "PKU CFCS": "https://cfcs.pku.edu.cn/english/",
    "Microsoft DKI": "https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/",

    "Genesis": "https://genesis-embodied-ai.github.io/",

    "Hao Dong": "https://zsdonghao.github.io/",
    "Lin Shao": "https://linsats.github.io/",
    "Chuang Gan": "https://people.csail.mit.edu/ganchuang/",
    "Xiao Lv": "https://www.microsoft.com/en-us/research/people/xilv/",

    "Zhou Xian": "https://www.zhou-xian.com/",
    "Ruihai Wu": "https://warshallrho.github.io/",
    "Yan Zhao": "https://sxy7147.github.io/",
    "Mingxin Yu": "https://mingxiny.github.io/",

    "Yian Wang": "https://wangyian-me.github.io/",
    "Chunru Lin": "https://chunru-lin.github.io/",
    "Lixing Fang": "https://owenowl.github.io/",
    "Jiageng Liu": "https://jiagengliu02.github.io/",
    "Juntian Zheng": "https://scholar.google.com/citations?user=J4mHYkQAAAAJ&hl=en",
    "Gu Zhang": "https://www.gu-zhang.com/",
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hyperlink').forEach(function(element) {
        const name = element.getAttribute('data-name');
        const url = hyperlinks[name];
        if (url) {
            element.innerHTML = '<a href="' + url + '">' + element.textContent + '</a>';
        }
    });
});