/*
강의에서는 Coin Tracker를 만드는데,
강의 보기 전에 혼자 해볼라고 만듦.
기능:
1. 웹페이지 시작하면 loading
2. 이후 주식 목록 나열 with 가격
       ㄴ> 특정 기간동안의 그래프도 만들면 좋을텐데 .
==> 일단 당장은 포기하고 강의 시청 후 시도해볼라고.
     ㄴ> 왜냐면 api 가져와야 하는데, 일단 로그인해야함.
     ㄴ> 그리고 express, axios같은거 쓰고 fetch나 post같은거 씀.
     ㄴ> 이러면 일이 생각보다 커질 것 같아서 일단 강의 시청 하겠음.
     
*/
import CanvasJSReact from './canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

function loading(){

}

function StockTracker(){
    return (
        <div>
            <h1> Stock Tracker </h1>
            <hr />
        </div>
    );

} export default StockTracker;
