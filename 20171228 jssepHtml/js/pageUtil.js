$( document ).ready(function() {
	
	var pageModelStr ="<nav aria-label='Page navigation' id='pageShow' class='pull-right' style='margin-right: -6%;'>																										"+
	"<div class='col-sm-6' style='padding:0px;width: 48%;' >                                                                            "+
	"<ul class='pagination' style='margin: 0px;' id='pageNumberShow'> 																	"+
	"</ul>                                                                                                                              "+
	"</div>                                                                                                                             "+
	"<div class='col-sm-6' style='padding-top: 1.4%;padding:0px;'>                                                                      "+
	"<label for='pageSize' class='col-sm-5 control-label' style=' width: 38%; padding-top: 2%;padding-right:0px;padding-left:0px;'  >   "+
	"共total条记录 &nbsp;&nbsp;&nbsp;每页显示</label>                                                                                    		"+
	"<div class='col-sm-2' style='width: 13%;padding-right:0px;padding-left:0px;' >                                                     "+
	"<select class='form-control' id='pageSize' style='padding: 0px;'>                                                                  "+
	"</select>                                                                                                                          "+
	"</div>                                                                                                                             "+
	"<label for='deptName' class='col-sm-1 control-label' style='padding-right:0px;padding-left:1%;padding-top: 2%' >条</label>	    	"+
	"<div class='col-sm-4' style='padding: 0px;'>                                                                                                             "+
	"<label for='jumpPage' class='col-sm-3 control-label'  style='padding: 0px;margin-top: 6%;' >跳至</label>                           	"+
	"<div class='col-sm-5' style='padding: 0px;' >                                                                                      "+
	"<a href='#'><input type='text' class='form-control' id='jumpPage' value=1 ></a>                                                    "+
	"</div>                                                                                                                             "+
	"<label for='jumpPage' class='col-sm-1 control-label' style='padding: 0px; margin-left: 2%; margin-top: 6%;'  >页</label>	        "+
	"</div>	                                                                                                                            "+
	"</div>                                                                                                                             "+
	"</nav>                                                                                                                             ";
	//当前页数
    var pageNumber;
    //总页数
    var totalNumber;
    //总条数
    var totalCount;
    
    var pageSize;
    //每页显示条数
    var pageSizeNumber = ['10','30','50','100','300','500','1000'];
    //初始化分页页面
    paginationInit();
    function initPagination(element){
        pageNumber = Number(element.attr('pageNumber'));
        totalCount = Number(element.attr('totalCount'));
        pageSize = Number(element.attr('pageSize'));
        totalNumber = totalCount/pageSize;
        var pageStr="";
        //总页数大于1
        if(pageNumber==1){
			pageStr+="<li class='disabled'><a href='#' aria-label='previous'> <span aria-hidden='true'>上一页</span></a></li>";
		}else{
			pageStr+="<li><a href='#' aria-label='previous'> <span aria-hidden='true'>上一页</span></a></li>";
		}
        if(totalNumber >= 1){
        	if(totalNumber <= 7){
        		for(var i=1;i++;i<=totalNumber){
        			if(i==pageNumber){
        				pageStr+="<li  class='active'><a href='#' >1<span class='sr-only'>(current)</span></a></li>";
        			}else{
        				pageStr+="<li><a href='#'>3</a></li>";
        			}
        		}
        	}else{
        		if(pageNumber>=5){
        			pageStr+="<li><a href='#'>...</a></li>";
        			for(var pagefast=pageNumber-2;pagefast++;pagefast<=pageNumber+2 ){
        				if(pagefast==pageNumber){
        					pageStr+="<li class='active'><a href='#'>1<span class='sr-only'>(current)</span></a></li>";
        				}else{
        					pageStr+="<li><a href='#'>"+pagefast+"</a></li>";
        				}
        			}
        			pageStr+="<li><a href='#'>...</a></li>";
        		}else{
        			for(var i=1;i<=5;i++){
        				if(i==pageNumber){
        					pageStr+="<li class='active' ><a href='#' >"+pageNumber+"<span class='sr-only'>(current)</span></a></li>";
        				}else{
        					pageStr+="<li><a href='#'>"+i+"</a></li>";
        				}
        			}
        			pageStr+="<li><a href='#'>...</a></li>";
        			pageStr+="<li><a href='#'>"+totalNumber+"</a></li>";
        		}
        	}
        	
        //当前业务不足1页	
        }else{
        	pageStr+="<li><a href='#' class='disabled' aria-label='previous'> <span aria-hidden='true'>上一页</span></a></li>";
        	pageStr+="<li class='active'><a href='#'>1 <span class='sr-only'>(current)</span></a></li>";
        	pageStr+="<li><a href='#' class='disabled' aria-label='Next'><span aria-hidden='true'>下一页</span></a></li>";
        }
        if(pageNumber==totalNumber){
			pageStr+="<li><a href='#' class='disabled' aria-label='Next'><span aria-hidden='true'>下一页</span></a></li>";
		}else{
			pageStr+="<li><a href='#' aria-label='Next'><span aria-hidden='true'>下一页</span></a></li>";
		}
        //添加元素至页面
        element.append(pageModelStr.replace("total",totalCount));
        //补充分页
        $("#pageNumberShow").append(pageStr);
        //补充pageSize
        var pageStr = "";
        for(var val in pageSizeNumber){
        	pageStr+="<option>"+pageSizeNumber[val]+"</option>";
        }
        $("#pageSize").append(pageStr);
        // 为设置为当前页的页签添加样式
        $('#pageShow').find('ul').find('li[value = '+ pageNumber +']').addClass('active');
        $('#pageShow').find('ul').find('li').click(clickChange);
        $('#pageShow').find('ul').find('li').click(processData);
    };

//  点击页签时候样式的变化
    function clickChange(ev){
    	debugger;

        
    }

	//  页面切换时候的处理函数。比如发ajax根据不同页码获取不同数据展示数据等，用户自行配置。
	    function processData(){
	    	debugger;
	        console.log('当前页码',pagenumber);
	//        用户在这里写页码切换时候的逻辑
	    }
	//  凡是带有pagination = p-new属性的元素，都会生成分页，这样设计方便一个页面中有多个不同的分页
	    function paginationInit(){
	        $('[pagination = p-new]').each(function(){
	            initPagination($(this))
	        })
	    };

});