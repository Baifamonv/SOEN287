
//function myCanvas()
 //{
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	for(var i = 0; i < 12; i++)
	{
		for(var j = 0; j < 12;j++)
		{
			if(j%2 == 0)
			{
				if(i%2 == 0)
				{
					ctx.fillStyle = "white";
				}
				else
				{
					ctx.fillStyle = "black";
				}
			}
			else
			{
				if(i%2 == 0)
				{
					ctx.fillStyle = "black";
				}
				else
				{
					ctx.fillStyle = "white";
				}
			}
			ctx.fillRect(54*i,54*j,54,54);
		}
	}
//}