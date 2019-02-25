import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Progress extends Component {

  // CODE PEN JAVASCRIPT FOR BARS
  // $('.horizontal .progress-fill span').each(function(){
  //   var percent = $(this).html();
  //   $(this).parent().css('width', percent);
  // });


  render() {
    return (
      <Router>
      <div className="body">
      <div className="content">
          <h2 className="progress">Savings Goals Progress</h2>        
        <div className="row" id="progress">
          <div className="column">
          <label for="name" className="label"><strong>Your Goal Name:</strong></label>
            <div>
            <div type="text" id="name" name="goal_name" className="label" >Kid's College Fund</div>
            <div type="text" id="name" name="goal_name" className="label" >Holiday Gifts</div>
            <div type="text" id="name" name="goal_name" className="label" >Vacation</div>
            <div type="text" id="name" name="goal_name" className="label" >New Kitchen</div>
            <div type="text" id="name" name="goal_name" className="label" >Retirement</div>
            </div>
          </div>
          <div className="item-column">
            <label for="target" className="label" ><strong>Amount:</strong></label>
            <div>
            <div type="text" id="target" name="target_amount" className="label" >$100,000.00</div>
            <div type="text" id="target" name="target_amount" className="label" >$2,000.00</div>
            <div type="text" id="target" name="target_amount" className="label" >$1,000.00</div>
            <div type="text" id="target" name="target_amount" className="label" >$10,000.00</div>
            <div type="text" id="target" name="target_amount" className="label" >$4,000,000.00</div>
            </div>
          </div>
          <div className="item-column">
            <label for="current" className="label" ><strong>Balance:</strong></label>
            <div>
            <div type="text" id="current" name="current_amount" className="label" >$9,500.00</div>
            <div type="text" id="current" name="current_amount" className="label" >$500.00</div>
            <div type="text" id="current" name="current_amount" className="label" >$100.00</div>
            <div type="text" id="current" name="current_amount" className="label" >$300.00</div>
            <div type="text" id="current" name="current_amount" className="label" >$45,000.00</div>
            </div>
          </div>
          <div className="input-column">
            <label for="date" className="label"><strong>Date:</strong></label>
            <div>
            <div type="date" id="date" name="target_date" className="label" >01/01/2035</div>
            <div type="date" id="date" name="target_date" className="label" >10/01/2019</div>
            <div type="date" id="date" name="target_date" className="label" >05/01/2019</div>
            <div type="date" id="date" name="target_date" className="label" >01/01/2020</div>
            <div type="date" id="date" name="target_date" className="label" >06/01/2050</div>
            </div>
          </div>
          <div className="item-column">
            <label for="progress" className="label" ><strong>Progress:</strong></label>
          <div class="progress-bar horizontal">
              <div class="progress-track" className="label" >
                  <div class="progress-fill">
                    <span >100%</span>
                  </div>
              </div>
          </div>
          <div class="progress-bar horizontal">
    <div class="progress-track" className="label" >
      <div class="progress-fill">
        <span>75%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="label" >
      <div class="progress-fill">
        <span>60%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="label" >
      <div class="progress-fill">
        <span>20%</span>
      </div>
    </div>
  </div>

  <div class="progress-bar horizontal">
    <div class="progress-track" className="label" >
      <div class="progress-fill">
        <span>82%</span>
      </div>
    </div>
  </div>
</div>



          </div>
          <div className="content" id="smidge">
          <div className="buttons">
            <div className="button-column">
            <div class="button" classId="submit">
              <button type="edit"><strong>NEXT PAGE</strong></button>
            </div>
            <section>More Goals</section>
            </div>
            <div className="button-column">
            <div class="button" classId="submit">
              <button type="edit"><strong>EDIT GOALS</strong></button>
            </div>
            <section>Edit Your Goals</section>
            </div>
            <div className="button-column">
            <div class="button" classId="submit">
              <button type="edit"><strong>NEW GOALS</strong></button>
            </div>
            <section>Add Goals</section>
            </div>
            </div>
          </div>
        
        </div>
    </div>
    </Router>
      );
  }
}

export default Progress;