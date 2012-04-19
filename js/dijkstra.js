(function() {
  var Dijkstra, Graph, Node;

  window.onload = function() {
    var graph, n1, n2, n3, n4, n5, n6, node, paper, _i, _len, _ref;
    paper = Raphael("holder", 800, 600);
    graph = new Graph(paper);
    window.graph = graph;
    n1 = new Node(2, 4);
    n1.origin = true;
    n2 = new Node(4, 3);
    n3 = new Node(2, 2);
    n4 = new Node(4, 1);
    n5 = new Node(2, 0);
    n5.target = true;
    n6 = new Node(0, 1);
    n1.addEdge(7, n2);
    n1.addEdge(14, n6);
    n1.addEdge(9, n3);
    _ref = [n1, n2, n3, n4, n5, n6];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      node = _ref[_i];
      graph.addNode(node);
    }
    return graph.draw();
  };

  Graph = (function() {

    Graph.name = 'Graph';

    function Graph(raphael) {
      this.raphael = raphael;
      this.nodes = [];
      this.origin = false;
      this.target = false;
    }

    Graph.prototype.addNode = function(node) {
      this.nodes.push(node);
      if (node.origin) {
        this.origin = node;
      }
      if (node.target) {
        return this.target = node;
      }
    };

    Graph.prototype.draw = function(current) {
      var node, _i, _len, _ref, _results;
      if (current == null) {
        current = false;
      }
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(this.drawNode(node));
      }
      return _results;
    };

    Graph.prototype.drawNode = function(node) {
      var circle, color, x, y;
      x = node.x * 65 + 65;
      y = node.y * 65 + 65;
      circle = this.raphael.circle(x, y, 30);
      if (node === this.origin) {
        color = "#fff";
      } else if (node === this.target) {
        color = "#f00";
      } else {
        color = '#00f';
      }
      circle.attr('fill', color);
      return circle.attr('stroke', color);
    };

    return Graph;

  })();

  Node = (function() {

    Node.name = 'Node';

    function Node(x, y) {
      this.x = x;
      this.y = y;
      this.visited = false;
      this.distance = Infinity;
      this.edges = {};
      this.origin = false;
      this.target = false;
    }

    Node.prototype.addEdge = function(distance, node) {
      return this.edges[node] = distance;
    };

    return Node;

  })();

  Dijkstra = (function() {

    Dijkstra.name = 'Dijkstra';

    function Dijkstra(graph) {
      var node;
      this.graph = graph;
      this.current = graph.origin;
      this.curent.distance = 0;
      this.target = graph.target;
      this.unvisited = (function() {
        var _i, _len, _ref, _results;
        _ref = graph.nodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          node = _ref[_i];
          if (node !== this.current) {
            _results.push(node);
          }
        }
        return _results;
      }).call(this);
      this.visited = [];
    }

    Dijkstra.prototype.crawl = function() {};

    Dijkstra.prototype.visit = function(current) {
      current.visited = true;
      return this.visited.push(current);
    };

    return Dijkstra;

  })();

}).call(this);
