export class BasicUse {
  constructor() {
   
	
    this.commonSeriesOptions = { 
	            
                type: 'column', 
				enableAnimation: true,
                tooltip :
				{
					visible:true ,
					format: "#point.x# : #point.y# #series.name# Medals"
				}
	};
	this.series=
			[
				{
                    type: 'line',
                    isTransposed: true,
                    name:"Indonesia",
                    enableAnimation: false,
					fill: "#E46455", opacity:0.8
                },
				{
				    type: 'line',
                    name:"Japan",
					isTransposed:true,
					enableAnimation: false,
					yAxisName: 'yAxis',
					opacity:0.8
                 }
			];
	this.size={
	  width:'900px',
	  
	};
	 this.title = {
	    text: "Seismograph comparison of two countries" 
	 };
	 this.legend={
	    visible: true, 
		position: 'top'
	 };
	 
	this.primaryXAxis= { 
	    majorGridLines: { visible: false },
                valueType: 'datetime',
                title:{text:"Time(sec)"},
				labelFormat:'mm:ss'
	};
	this.primaryYAxis=
            {
               majorGridLines: { visible: false },
                title: { text: "Velocity(m/s)" },
                plotOffset: 80,           
      			range:{min:-15, max:15,interval:5}
            };
	this.axes=[ {
                    columnIndex: "1",                           
                    name: 'yAxis',
                    plotOffset: 80,            
                    majorGridLines: { visible: false },
                    range:{min:-15, max:15,interval:5},
                    title: { text: "Velocity(m/s)", visible: true }
                }
				];
		this.rowDefinitions=
            [
                {
                    rowHeight: 100,
                    lineColor: "gray",
                    lineWidth: 0,
                    unit: 'percentage'
                }
            ];
        this.columnDefinitions=
            [
                {
                    columnWidth: 50,
                    lineColor: "blue",
                    lineWidth: 0,
                    unit: 'percentage'
                },
                {
                    columnWidth: 50,
                    lineColor: "gray",
                    lineWidth: 1,
                    unit: 'percentage'
                }

            ];
  };
  	
	OnRefresh(count) 
	{	
	debugger;
      var chart = $("#verticalchart").ejChart('instance'),
	  chartobj = chart;
	    count += 2;		
        this.AddPoint(chartobj.model.series[0], count);
		this.AddPoint(chartobj.model.series[1], count);
        $("#verticalchart").ejChart("redraw");
    }	
	 
  onchartload(sender) 
	{
	  //debugger;
		  var chart = $("#verticalchart").ejChart('instance');
		 var count = 0; var chartobj,intervalId;
		for(var i=11;i<50;i=i+1)
		{
	     this.AddPoint(sender.detail.model.series[0],count);
	     this.AddPoint(sender.detail.model.series[1],count);
		 count++;
		 
		}
        chartobj = chart;
		debugger;
intervalId = window.setInterval((this.OnRefresh(count)), 10);
 
    };
	
   AddPoint(series, count) 
	{
        //debugger;
		if (series.points == undefined)
            series.points = [];			
        series.points[series.points.length] = { x: new Date(2015, 8, 26, count), y: this.getRandomNum(series,count) };
    };
	
   getRandomNum(series,count)
   
	{	 
//debugger;	
        var value;var intervalId;
        if (count <= 50) {
           if(series.name=="Indonesia")
               value = Math.floor((Math.random() * (3 - (-3) + 1)) - 3);
           else
               value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (count <= 100)
        {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);
            else
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);

        }
        else if (count <= 150) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (6 - (-7) + 1)) - 7);
            else
                value = Math.floor((Math.random() * (7 - (-6) + 1)) - 6);
        }
        else if (count <= 220) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (2 - (-3) + 1)) - 3);
            else
                value = Math.floor((Math.random() * (3 - (-2) + 1)) - 2);
        }
        else if (count <= 270) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (1 - (-2) + 1)) - 2);
            else
                value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (count <= 320) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
            else
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
        }
        else {

            clearInterval(intervalId);

        }
       
       return value;
    };
}
