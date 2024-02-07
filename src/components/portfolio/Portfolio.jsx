

export default function Portfolio(){
  
   return(
    <div className="p-5 text-center">
    <h2 className="mt-5 pt-5 fw-bolder fs-2 text-uppercase" style={{color:"rgb(44,62,80)",fontSize:100+'px'}}>PORTFOLIO  COMPONENT</h2>
    <div className='d-flex justify-content-center align-ityems-center mt-3'>
<div className="line me-3 mt-1" style={{backgroundColor:'rgb(44,62,80)',width:80+"px",height:5+'px'}}></div>
<i class="fa-solid fa-star" style={{color:'rgb(44,62,80)'}}></i>
<div className="line ms-3 mt-1" style={{backgroundColor:'rgb(44,62,80)',width:80+"px",height:5+'px'}}></div>
</div>
<div className="container">
   <div className="row g-5 mt-2">
      <div className="col-md-4 position-relative overflow-hidden ">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="one" 
            className='w-100 rounded-3 ' />
            <div className="layer d-none position-absolute w-100 h-100
             rounded-3 top-0 start-0 z-2 
              d-flex justify-content-center align-items-center " 
              style={{backgroundColor:'rgba(26,188,156)'}}>
            <i class="fa-solid fa-plus fa-6x text-white"></i>
            </div>
      </div>
      <div className="col-md-4">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="two" 
            className='w-100 rounded-3'/>
      </div>
      <div className="col-md-4">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="three"
             className='w-100 rounded-3'/>
      </div>
      <div className="col-md-4">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="four" 
            className='w-100 rounded-3' />
      </div>
      <div className="col-md-4">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="five" 
            className='w-100 rounded-3'/>
      </div>
      <div className="col-md-4">
            <img 
            src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="six"
             className='w-100 rounded-3'/>
      </div>
      
   </div> 
</div>
</div>

   )
}