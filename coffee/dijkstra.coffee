window.onload = () ->
	paper = Raphael("holder", 800, 600)
	graph = new Graph(paper)
	window.graph = graph
	
	n1 = new Node(2,4)
	n1.origin = true
	n2 = new Node(4,3)
	n3 = new Node(2,2)
	n4 = new Node(4,1)
	n5 = new Node(2,0)
	n5.target = true
	n6 = new Node(0,1)
	n1.addEdge(7,n2)
	n1.addEdge(14,n6)
	n1.addEdge(9, n3)
	
	graph.addNode( node ) for node in [n1,n2,n3,n4,n5,n6]
	graph.draw()
	
class Graph
	constructor: (@raphael)->
		@nodes = []
		@origin = false
		@target = false
		
	addNode: (node)->
		@nodes.push(node)
		if node.origin
			@origin = node
		if node.target
			@target = node
		
	draw: (current = false)->
		this.drawNode(node) for node in @nodes
		
	drawNode: (node) ->
		x = node.x * 65 + 65
		y = node.y * 65 + 65
		circle = @raphael.circle(x, y, 30)
		if node == @origin
			color = "#fff"
		else if node == @target
			color = "#f00"
		else
			color = '#00f'
			
		circle.attr('fill', color)
		circle.attr('stroke', color)
		
class Node
	constructor: (@x, @y)->
		@visited = false
		@distance = Infinity
		@edges = {}
		@origin = false
		@target = false
	addEdge: (distance, node)->
		@edges[node] = distance
	
		
class Dijkstra
	constructor: (@graph) ->
		@current = graph.origin
		@curent.distance = 0
		@target = graph.target
		@unvisited = (node for node in graph.nodes when node != @current)
		@visited = []
	
	crawl: ->
		
		
	visit: (current) ->
		current.visited = true
		@visited.push(current)
		