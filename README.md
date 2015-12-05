hGraph
========

An open source javascript-based web application for visualizing health data.

Website: [hgraph.org](http://hgraph.org/)

hGraph Demo: http://demo.hgraph.org/

hMixer Demo: http://www.hscoremixer.org/
hMixer Repo: https://github.com/goinvo/hMixer

###About the REPO###

The hGraph is an open source project that is being developed and designed to provide an industry standard of presenting health care information to professionals and average citizens alike.


###Dependencies###

The `HGraph` class relies on [d3.js](http://d3js.org/), which is a very popular javascript library for manipulating SVG, specficically for graphs and data plotting.

Once you have downloaded the latest version, you will need to include in in your html above the `HealthGraph` source code:

        <script src="/path/to/your/d3.js" type="text/javascript"></script>
        <script src="/path/to/your/HealthGraph.js" type="text/javascript"></script>

###Setup###

During a `window.onload` or similar entry point, the health graph is constructed and intialized by:

        var graph;
        window.onload = function(){

                graph = new HGraph({
                        container : document.getElementById("graph_container"),
                        userdata  : {
                                                        overallScore : 90,
                                                        factors      :
                                                        [
                                                                {
                                                                        label : 'Family History',
                                                                        score : 80,
                                                                },
                                                                {
                                                                        label : 'Caloric Intake',
                                                                        score : 100
                                                                }
                                                        ]
                        };
                });

                graph.initialize();

        }


##hGraph and hScore

###hGraph

####Layers
The graph is organized with several layers which show different types of information:

* `ring`: the ring that highlights the healthy sector of the graph.
* `web`: the *web* that connects the points in the graph.
* `text`: the text for the hScore.
* `datapoints`: the datapoints and their labels.
* `help`: visual helpers to explain how the graph works.
* `axis`: radial and polar axis of the graph.

#####Help Layer
The help layer contains several overlays, each intented to highligh a section of the graph's scale:

* `lower`: below healthy range. 
* `healthy`: healthy range. 
* `upper`: healthy range. 

####Options

#####Available options:
 
Option Name | Type | Description | Default
--- | --- | ---
showLabels | *Boolean* | whether to show the labels of the datapoints. | `false`
showHealthyRangeValues | *Boolean* | whether to show the healthy ranges of the datapoints. | `false`
axisTicks | *Array[Number]* | the (absolute) scores where a radial tick should be drawn. | `[-100, -65, -30, 0, 30, 65, 100]`
axisLabelRotaion | *Number* | the rotation (in degrees) of the polar axis labels. | `15`
axisPolarStep | *Number* | the step (in degrees) of the polar axis lines. | `30`
axisPolarRotation | *Number* | the rotation (in degrees) of the polar axis lines. | `0`
axisPolarLabelsVisible | *Boolean* | whether to display the polar end labels. | `false`
layersVisibleAtStartup | *Array[String]* | which layers to display at startup. | `['ring', 'web', 'text', 'datapoints']`



###Want to Contribute? Here is how you can help###
For designers and engineers:
* What's version 2 of hGraph?
* Design the population hGraph for your neighborhood, city, clinic, nation.
* CSS refinement of hScore (making it beautiful).
* CSS refinement of hGraph (making it beautiful).
* JS help with hScore or hGraph
* iOS development of hGraph
* [RHex tie-ins](http://wiki.siframework.org/RHEx) 


For clinicians and researchers:
* [Make a hScore. Evolve the scoring algorithm](http://hscoremixer.org/)
* What are the top metrics to show (at the "global" hGraph level)? What are the correct groupings and sub metric groupings?
* What are the chronic disease patterns (the outlines on hGraph) and how do we arrange the metrics to better see those conditions?
* What are we missing from the everyday diagnostic tool clinicians use? How do we improve hGraph to rock your in-patient encounter experience? Population diagnostic experience?

###Core Contributors###
Founders/Designers: [Involution Studios](http://www.goinvo.com/)

Architects/Engineers: [iMedia Solutions](http://www.myimedia.com/)

###License###

hGraph and hMixer are licensed under the Apache-2.0 open source license. You can find more information on the Apache-2.0 license at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

