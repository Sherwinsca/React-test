
import classes from '../main.module.css'

const Mainpage=()=>{
    return(
            <div style={{display:"inline"}}>
                <nav className={classes.navbar} style={{width:"100%",paddingBottom:"2%",textAlign:"left"}}>
                    &emsp;<span><img src={require("../images/logo.png")} alt={"logo"} style={{height:"50px",width:"50px",paddingTop:"2%"}}/></span>&emsp;
                    <span> Home </span>&emsp;
                    <span> About </span>&emsp;
                    <span> Resources </span>&emsp;
                    <span> Enterprises </span>&emsp;
                    <span> Pricing </span>&emsp;
                    <span style={{float:"right",paddingTop:"3%"}}>
                        <span> Login </span>&emsp;
                        <span> Signup </span>&emsp;
                        <button className={classes.nav_btn} style={{display:"inline"}}> Get Started </button>&emsp;
                    </span>
                </nav>
                <div>
                    <h1>Blazing-fast WordPress Cloud Hosting</h1>
                        <h3>Experience Premium Unlimited WordPress Cloud Hosting with a
                            Scalable Architecture designed for Professional Websites,
                            fully optimized for WordPress.</h3>
                </div>
                <span style={{display:"inline-flex",margin:"auto"}}>
                    <div className={classes.round} style={{textAlign:"center"}}>
                        <span className="dot"><img src={require("../images/messaging.png")}  alt={"messaging"} style={{height:"80px",width:"80px",paddingTop:"5px"}}/></span>
                    </div>&emsp;
                    <div className={classes.round}>
                        <span className="dot"><img src={require("../images/developing.png")}  alt={"developing"} style={{height:"80px",width:"80px",paddingTop:"5px"}}/></span>
                    </div>&emsp;
                     <div className={classes.round}>
                        <span className="dot"><img src={require("../images/designing.png")}  alt={"designing"} style={{height:"80px",width:"80px",paddingTop:"5px"}}/></span>
                    </div>&emsp;
                     <div className={classes.round}>
                        <span className="dot"><img src={require("../images/analysis.png")}  alt={"analysis"} style={{height:"80px",width:"80px",paddingTop:"5px"}}/></span>
                    </div>&emsp;
                </span>
            </div>
    );
}
export default Mainpage