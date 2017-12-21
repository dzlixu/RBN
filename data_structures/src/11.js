function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.toString = toString;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].pushi(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        pustr(i + '->');
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                pustr(this.adj[i][j] + ' ');
            }
        }
        print();
    }
}