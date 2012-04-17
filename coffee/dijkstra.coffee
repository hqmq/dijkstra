window.onload = () ->
	paper = Raphael("holder", 400, 400)
	graph = new Graph(3,3)
	window.graph = graph
	circle = paper.circle(50, 40, 10);
	circle.attr("fill", "#f00");
	circle.attr("stroke", "#fff");
	
class Graph
	constructor: (width, height, )->
		#fill out a list of nodes
		@nodes = [1..height].map (row) ->
			[1..width].map (col) ->
				new Node(this)
				
		@origin = @nodes[0][0]
		@target = @nodes[height][width]
		
class Node
	constructor: (@graph)->
		@visited = false
		@distance = -1
		