import { Component } from "react";

export default class Portfolio extends Component{

  render(){
    return(
<div className="p-5 text-center">
<h2 className="mt-5 pt-5 fw-bolder fs-2 text-uppercase" style={{color:"rgb(44,62,80)",fontSize:100+'px'}}>CONATCT SECTION
</h2>
<div className='d-flex justify-content-center align-ityems-center mt-3'>
<div className="line me-3 mt-1" style={{backgroundColor:'rgb(44,62,80)',width:80+"px",height:5+'px'}}></div>
<i class="fa-solid fa-star" style={{color:'rgb(44,62,80)'}}></i>
<div className="line ms-3 mt-1" style={{backgroundColor:'rgb(44,62,80)',width:80+"px",height:5+'px'}}></div>
</div>
<div className="w-75 m-auto text-start">
<form>
<input  id="userName" type="text" placeholder="userName" name="userName"
 className="form-control border-0 border-bottom my-4 shadow-none"/>
 
<input  id="userage" type="number" placeholder="userAge" name="userName"
 className="form-control border-0 border-bottom my-4 shadow-none"/>
<input  id="userEmail" type="email" placeholder="userEmail" name="userName"
 className="form-control border-0 border-bottom my-4 shadow-none"/>
<input  id="userPassword" type="password" placeholder="userPassword" name="userName"
 className="form-control border-0 border-bottom my-4 shadow-none"/>
 <button type="submit" className="btn text-white me-0" style={{backgroundColor:'rgb(26,188,156)'}}>send Massege</button>
</form>
</div>

</div>)}}