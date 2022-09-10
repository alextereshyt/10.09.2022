import React, { Component } from 'react'

class MainForm extends Component {
 
  constructor(props) {
        super(props);
       this.state = {innerText: "", mail: "",btns: [],results:"Results:\n"};
        for(var i = 0;i<10;i++){
          this.state.btns.push("round-btn");
        }
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeInner = this.handleChangeInner.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeShape = this.handleChangeShape.bind(this);
    
      }

      handleChangeShape(event){
        let btnsTemp = [];
        for(var i = 0;i<10;i++){
          btnsTemp[i] = "round-btn";
        }
        btnsTemp[event.target.value-1] =  "square-btn";
        this.setState({btns: btnsTemp});
   
      }

     
      handleChangeMail(event) {
        this.setState({mail: event.target.value});
      }
      handleChangeInner(event) {
        this.setState({innerText: event.target.value});
      }
    
      handleSubmit(event) {
        let note = "none";
        for(var i = 0;i<10;i++){
          if(this.state.btns[i] == "square-btn"){
          note = i+1;
          }
        }
        this.setState({results: this.state.results + " note: " + note + " text: "+ this.state.innerText + " mail: "+ this.state.mail + "\n"});
        event.preventDefault();
      }
      

      
      render() {
        return (<div class="form">
        <div class="inner"><h3>How likely are you to recommend our service to a friend or colleague?</h3></div>

          <form onSubmit={this.handleSubmit}>
            <div class="innerButtons">
            <input  type="button" value="1" className={this.state.btns[0]} onClick={this.handleChangeShape}/>
            <input type="button" value="2" className={this.state.btns[1]} onClick={this.handleChangeShape}/>
            <input type="button" value="3" className={this.state.btns[2]} onClick={this.handleChangeShape}/>
            <input type="button" value="4" className={this.state.btns[3]} onClick={this.handleChangeShape}/>
            <input type="button" value="5" className={this.state.btns[4]} onClick={this.handleChangeShape}/>
            <input type="button" value="6" className={this.state.btns[5]} onClick={this.handleChangeShape}/>
            <input type="button" value="7" className={this.state.btns[6]} onClick={this.handleChangeShape}/>
            <input type="button" value="8" className={this.state.btns[7]} onClick={this.handleChangeShape}/>
            <input type="button" value="9" className={this.state.btns[8]} onClick={this.handleChangeShape}/>
            <input type="button" value="10"className={this.state.btns[9]} onClick={this.handleChangeShape}/>
             </div>
              
                <p class="bad">0 - Extremly Unlikely</p>
                <p class="good">10 - Extremly Likely</p>
              <h4 className='label'>What feature can we add to improve?</h4>
              <textarea class="textInner" placeholder='We`d love to hear your suggestions' value={this.state.innerText} onChange={this.handleChangeInner}></textarea>
              <h4 className='label'>Email (optional)</h4>
              <input class="mail" type="email" placeholder='Someone@something.com' value={this.state.mail} onChange={this.handleChangeMail}></input>
              <input class="submit" type="submit" value="SEND FEEDBACK" />
         
         
          </form>
          
    <textarea class="results" readonly value={this.state.results} ></textarea>
          </div>
        );
      }
}

export default MainForm