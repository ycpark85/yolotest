
<template>
<div>
	
<header1></header1>
<div class="container">

<nav>	
 		<div class="nav1">
			<ul class="nav-list1">
				<li class="nav-item1"><span class="icon-home2"></span><span style="font-weight:bold">캔들하우스</span> </li>
				<li class="nav-item2"><div class="cash"><span class="icon-arrow2 arrow"></span> 캐쉬</div><div class="bizcash"> <a href="#"><span>10000원</span></a> </div></li>
				<li class="nav-item2"><div class="cash"><span class="icon-arrow2 arrow"></span> 광고쿠폰</div><div class="bizcash"> <a href="#"><span>3장</span></a> </div></li>
				
			</ul>
		</div>
		<div class="nav2">
			<ul class="nav-list2">
				<li class="nav-item">하비관리</li>
				<li class="nav-item"><a href="" class="nav-link">1:1문의</a></li>
				<li class="nav-item"><a href="" class="nav-link">관리</a></li>
			</ul>
		</div>
		<div class="gud">
			<ul class="nav-list3">
				<li class="nav-item3">
					<span class="icon-guide guide"></span><span class="g_text">이용가이드</span>
				</li>
			</ul>
			
		</div>
		<div class="gud">
			<ul class="nav-list3">
				<li class="nav-item3">
					<div class="tel1"><img src="../image/telephone.png" alt=""></div><div class="tel2"><span class="">02.1234.1234</span></div>
				</li>
			</ul>
			
		</div>
	</nav>	
<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
 <div class="content">
	 <nuxt/>
 </div>
</div>

</div>
</template>
<script>
import header1 from '../components/admin_header'
export default {
	components:{
		header1
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
	color: black;
}


.container{
	display: -webkit-flex;
	display: flex;
	border-bottom: 1px solid gray;
}
nav{
	border-right: 0.8px solid gray;
	min-width:200px;
	background-color: #fff;
	
}
.arrow{
	font-size: 4px;
}
.nav1{

	list-style-type:none; 
	margin:0 0 1em; 
	padding:8px 0 0 10px; 
	white-space:nowrap; 
	width:190px;
	height: 200px;
	border-bottom: 1px solid gray;

}
.nav-list1{
	margin-top: 40px;

}
ul li{
	margin-top: 10px;
}
.nav-item1{
	font-size: 16pt;
	text-align: center;
	margin-bottom: 25px;
}
.nav-item2{
display: flex;
font-weight: bold;

}
.cash{
flex:1;


}
.bizcash{
	padding-right: 10px;
	text-align: right;
	flex:2;
}
/*-----------------------------------------------------------------------------------------*/
.nav2{
	
	list-style-type:none; 
	margin:0 0 1em; 
	padding:50px 0 0 10px; 
	white-space:nowrap; 
	width:190px;
	height: 200px;
	border-bottom: 1px solid gray;
}
.nav-item{
	font-size: 17pt;
	margin-bottom: 25px;
	font-weight: bold;
}
/*-----------------------------------------------------------------------------------------*/
.gud{
	list-style-type:none; 
	margin:0 0 1em; 
	padding:8px 0 0 10px; 
	white-space:nowrap; 
	width:190px;
	height: 100px;
	border-bottom: 1px solid gray;
}
.guide{
	font-size: 30pt;
}
.g_text{
	padding: 10px;
	font-size: 15pt;
	color: #ffd008;
	font-weight: bold;
}

.nav-item3{
	display: flex;
}
.tel1{
	width: 100px;
	flex: 1;
}
.tel1 img{
 width: 70%;
}
.tel2{
	flex: 2;
	padding: 10px 0 0 0;
	font-size: 12pt;
	color:black;
	font-weight: bold;
	
}

.content{
	width: 800px;
	text-align: center;
	flex: 1;
	
}

</style>
