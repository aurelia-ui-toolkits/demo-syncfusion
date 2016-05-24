export class BasicUse {
  constructor() {
  this.chartArea=
            {
                visible: false
            };
    this.primaryXAxis= { 
	   range: { min: 2001, max: 2013, interval: 1 },
                axisLine: { color: '#EFEFEF', width: 3 },
                majorGridLines: { visible: false },
                font: { color: "black", size: "15px" },
                edgeLabelPlacement: 'hide',
                majorTickLines: { visible: false }
	};
	this.primaryYAxis=
            {
                labelFormat: "{value}",
                title: { text: 'Billion Bushels', font: { color: 'black', size: "20px" } },
                majorGridLines: { color: '#EFEFEF', width: 2 },
                axisLine: { color: '#EFEFEF', width: 3 },
                font: { color: "black", size: "15px" },
                range: { min: 1.50, max: 2.70, interval: 0.20 },
                majorTickLines: { visible: false }
            };
    this.commonSeriesOptions = {
                type: 'line', 
				enableAnimation: true,
                border :{width: 3},
				fill: '#333333' ,
                marker:
                {
                    shape: 'circle',
                    size:
                    {
                        height: 6, width: 6
                    },
                    visible: true,
                     fill: '#C1272D',
					 border:{color: '#333333', width: 2} 
                }
            };
			this.series=
			[
				{
                    points: [{ x: 2002, y: 1.61 }, { x: 2003, y: 2.34 }, { x: 2004, y: 2.16 }, { x: 2005, y: 2.10 }, 
							 { x: 2006, y: 1.81 }, { x: 2007, y: 2.05 }, { x: 2008, y: 2.50 }, { x: 2009, y: 2.22 }, 
							 { x: 2010, y: 2.21 }, { x: 2011, y: 2.00 }, { x: 2012, y: 2.27 }],
                    name: 'India', 
					tooltip :
					{	
						visible:true, 
						template: 'Tooltip'
					}
                }
  			];
	this.size={
	  width:'900px',
	  
	};
	 this.title = {
	  text: 'USA Wheat production',
				font:{color: '#333333'}
	   };
	
  }
}
