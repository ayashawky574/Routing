export default function Footer(){
     return(
        // <div className="vh-100 d-flex justify-content-center align-items-center" style={{boxSizing:'border-box',backgroundColor:'red'}}>
        <div className=" position-absolute end-0 start-0" style={{backgroundColor:"rgb(44,62,80)"}}>
            <div className="container p-3">
                <div className="row ">
                    <div className="col-md-4  text-center mt-2">
                        <div>
                        <h3>location</h3>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                        </div>
                      
                    </div>
                    <div className="col-md-4 text-center mt-2">
                        <div>
                      <h3>AROUND THE WEB</h3>
                      <div className="pb-2">
                      <i className="fa-brands fa-facebook fs-1 px-2 "></i>   
                      <i className="fa-brands fa-twitter fs-1 px-2 "></i>
                      <i class="fa-brands fa-linkedin-in fs-1 px-2"></i>
                      <i class="fa-solid fa-globe fs-1 px-2"></i>
                      </div>
                      
                     </div></div>
                     <div className="col-md-4 text-center mt-2">
                        <div>
                      <h3>ABOUT FREELANCER</h3>
                      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                      </div>
                    </div>
                </div>
        </div>
            {/* </div> */}
        <div className=" d-flex justify-content-center py-1" style={{backgroundColor:"rgb(26,37,47)"}}>
            <div className=" mt-3 ">
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>
        </div>
     )

}