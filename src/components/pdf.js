import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class Pdf extends Component {
    constructor(props) {
        super(props);
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');
        let phone = localStorage.getItem('phone');
        let objective = localStorage.getItem('objective');

        let percentage = localStorage.getItem('percentage');
        let percentage1 = localStorage.getItem('percentage1');
        let percentage2 = localStorage.getItem('percentage2');
        let course_bach = localStorage.getItem('course_bach');

        let course = localStorage.getItem('course');
        let year = localStorage.getItem('year');
        let university = localStorage.getItem('university');
        let school = localStorage.getItem('school');

        let course_school = localStorage.getItem('course_school');
        let year_bach = localStorage.getItem('year_bach');
        let year_school = localStorage.getItem('year_school');
        let campus = localStorage.getItem('campus');

        let skills = localStorage.getItem('skills');

        let address = localStorage.getItem('address');
        let city = localStorage.getItem('city');
        let declaration = localStorage.getItem('declaration');

        this.state = {
            name:name,email:email,phone:phone,objective:objective,
            percentage:percentage,percentage1:percentage1,percentage2:percentage2,
            course_bach:course_bach,course:course,year:year,university:university,
            school:school,course_school:course_school,year_bach:year_bach,year_school:year_school,campus:campus,skills:skills,address:address,city:city,declaration:declaration,
        }
    }

    

  render() {

    return (
      <React.Fragment>
          <Grid item xs={12} >
              <Grid container style={{padding:'10px'}}>
                  <Grid className="header_left" item xs={10} sm={10} md={10} lg={10} xl={10}
                  style={this.state.name===null?{display:'none'}:{display:'block'}}>
                     <div className="information_stud">
                        <h4 className="name_re">{this.state.name}</h4>
                        <h5 className="common">{this.state.address}</h5>
                        <h5 className="common"t>{this.state.city}</h5>
                        <h5 className="common"t>{this.state.phone}</h5>
                        <h5 className="gmail"t>{this.state.email}</h5>
                     </div>
                     <p className="obj">
                            {this.state.objective}
                        </p>
                        <div className="education_detail">
                          <h4 className="edu">EDUCATION</h4>
                          <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                    <th>Course</th>
                                    <th >University</th>
                                    <th >Year of Passing</th>
                                    <th >Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.state.course}</td>
                                    <td> {this.state.university}</td>
                                    <td>{this.state.year}</td>
                                    <td>{this.state.percentage}%</td>
                                </tr>
                                <tr>
                                    <td>{this.state.course_bach}</td>
                                    <td>{this.state.campus}</td>
                                    <td>{this.state.year_bach}</td>
                                    <td>{this.state.percentage1}%</td>
                                </tr>
                                <tr>
                                    <td>{this.state.course_school}</td>
                                    <td>{this.state.school}</td>
                                    <td>{this.state.year_school}</td>
                                    <td>{this.state.percentage2}%</td>
                                </tr>
                                </tbody>
                        </table>
                      </div>
                      <div className="skills_info">
                            <h4 className="skill">SKILLS</h4>
                            <ul>
                                
                                <li>{this.state.skills}</li>
                                <li>MongoDb</li>
                                <li>Reactjs</li>
                                <li>Angularjs</li>
                            </ul>
                      </div>
                      <div className="declaration">
                        <h4 className="dec">Declaration</h4>
                         <h6>
                            {this.state.declaration}
                         </h6>
                      </div>
                      <div className="signature">
                          <h6>(signature)</h6>
                      </div>
                  </Grid>
              </Grid>


              <Grid container style={{padding:'10px'}}>
                  <Grid className="header_leftrt" item xs={10} sm={10} md={10} lg={10} xl={10}>
                     <div className="information_stud">
                        <h4 className="name_re">Abhinash kumar pandit</h4>
                        <h5 className="common">Beta-1 , A-96</h5>
                        <h5 className="common"t>Greater Noida, GautamBudhNagar</h5>
                        <h5 className="common"t>+91 8375893352</h5>
                        <h5 className="gmail"t>pandit.bechu@gmail.com</h5>
                     </div>
                     <p className="obj">
                            Aiming to use my proven customer service,sales,and communication skills the managerial role in your company. Posses a BA Communications.
                        </p>
                        <div className="education_detail">
                          <h4 className="edu">EDUCATION</h4>
                          <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                    <th >Course</th>
                                    <th >University</th>
                                    <th >Year of Passing</th>
                                    <th >Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>MCA</td>
                                    <td>Sharda University</td>
                                    <td>2018</td>
                                    <td>73%</td>
                                </tr>
                                <tr>
                                    <td>BCA</td>
                                    <td>Sharda University</td>
                                    <td>2015</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>CBSC</td>
                                    <td>2012</td>
                                    <td>73%</td>
                                </tr>
                                </tbody>
                        </table>
                      </div>
                      <div className="skills_info">
                            <h4 className="skill">SKILLS</h4>
                            <ul>
                                <li>Java</li>
                                <li>Node</li>
                                <li>MongoDb</li>
                                <li>Reactjs</li>
                                <li>Angularjs</li>
                            </ul>
                      </div>
                      <div className="declaration">
                        <h4 className="dec">Declaration</h4>
                         <h6>
                         I hereby feel proud that if you given a chance in your esteemed organization I would leave no stone
                        unturned to my way.
                         </h6>
                      </div>
                      <div className="signature">
                          <h6>(signature)</h6>
                      </div>
                  </Grid>
              </Grid>

          </Grid>
    </React.Fragment>
    );
  }
}

export default Pdf;