(function() {
  var Graph, Node;

  window.onload = function() {
    var circle, graph, paper;
    paper = Raphael("holder", 400, 400);
    graph = new Graph(3, 3);
    window.graph = graph;
    circle = paper.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    return circle.attr("stroke", "#fff");
  };

  Graph = (function() {

    Graph.name = 'Graph';

    function Graph(width, height) {
      this.width = width;
      this.height = height;
      this.origin = new Node(this);
    }

    return Graph;

  })();

  Node = (function() {

    Node.name = 'Node';

    function Node(graph) {
      this.graph = graph;
      this.distance = -1;
    }

    return Node;

  })();

}).call(this);
