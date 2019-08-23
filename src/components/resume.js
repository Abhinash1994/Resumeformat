import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import Pdf from '../components/pdf'

class Resume extends Component {
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
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleObjective = this.handleObjective.bind(this);
        this.handleCourse = this.handleCourse.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleUniversity = this.handleUniversity.bind(this);
        this.handleCourse1 = this.handleCourse1.bind(this);
        this.handleYear1 = this.handleYear1.bind(this);
        this.handleCampus = this.handleCampus.bind(this);
        this.handleCourse2 = this.handleCourse2.bind(this);
        this.handleYear2 = this.handleYear2.bind(this);
        this.handleSchool = this.handleSchool.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleDeclaration = this.handleDeclaration.bind(this);
        this.handlePercentage = this.handlePercentage.bind(this);
        this.handlePercentage1 = this.handlePercentage1.bind(this);
        this.handlePercentage2 = this.handlePercentage2.bind(this);
        this.handleAddress = this.handleAddress.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      };
      handlePercentage(e){
          this.setState({percentage:e.target.value})
      }
      handlePercentage1(e){
        this.setState({percentage1:e.target.value})
    }
    handlePercentage2(e){
        this.setState({percentage2:e.target.value})
    }
      handleName(e){
        this.setState({name:e.target.value});
      }
      handleEmail(e){
        this.setState({email:e.target.value});
      }
      handlePhone(e){
        this.setState({phone:e.target.value});
      }
      handleObjective(e){
        this.setState({objective:e.target.value});
      }
      handleCourse(e){
        this.setState({course:e.target.value});
      }
      handleYear(e){
        this.setState({year:e.target.value});
      }
      handleUniversity(e){
        this.setState({university:e.target.value});
      }
      handleCourse1(e){
        this.setState({course_bach:e.target.value});
      }
      handleYear1(e){
        this.setState({year_bach:e.target.value});
      }
      handleCampus(e){
        this.setState({campus:e.target.value});
      }
      handleCourse2(e){
        this.setState({course_school:e.target.value});
      }
      handleYear2(e){
        this.setState({year_school:e.target.value});
      }
      handleSchool(e){
        this.setState({school:e.target.value});
      }
      handleSkill(e){
          this.setState({skills:e.target.value})
      }
      handleAddress(e){
        this.setState({address:e.target.value})
    }
    handleCity(e){
        this.setState({city:e.target.value})
    }
    handleDeclaration(e){
        this.setState({declaration:e.target.value})
    }

    printDocument() {
        
            console.log(this.state.name)
            var pdf = new jsPDF();
            var document="<!DOCTYPE html><html lang='en'><head><title>Assignment</title></head><body><div class='container'> <div class='row'><div class='col-md-6 offset-md-3' style='text-align:center !important;'><h1  style='color: #2d2dca;text-align:center !important'>"+this.state.name+"</h1><h4  style='margin-left:30rem;margin-top:-10px'>"+this.state.address+"</h4><h4  style='margin-left:30rem;margin-top:-10px'>"+this.state.city+"</h4><h4  style='margin-left:30rem;margin-top:-10px'>"+this.state.email+"</h4></div></div></div></body></html>";

            pdf.fromHTML(document, 1, 1)
            pdf.save("download.pdf");
         
      }
      
    handleSubmit(e) {
        e.preventDefault();
        
        console.log("data",this); 
    
        const { name , email , phone ,objective , course , year , university , percentage, percentage1 , percentage2 , course_bach , course_school , year_bach, year_school, campus , school , skills , address , city , declaration} = this.state;

        if(!this.state.name){ 
            alert("Not Successful !! Fill The Form We Need All Detail")
            window.location.reload();
        }
        else{
            
            alert("successful")
            this.printDocument();
            window.location.reload();
            
            localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('phone',phone);
            localStorage.setItem('objective',objective);
            
            localStorage.setItem('percentage',percentage);
            localStorage.setItem('percentage1',percentage1);
            localStorage.setItem('percentage2',percentage2);
            localStorage.setItem('course_bach',course_bach);
            
            localStorage.setItem('course',course);
            localStorage.setItem('year',year);
            localStorage.setItem('university',university);
            localStorage.setItem('school',school);

            localStorage.setItem('course_school',course_school);
            localStorage.setItem('year_bach',year_bach);
            localStorage.setItem('year_school',year_school);
            localStorage.setItem('campus',campus);

            localStorage.setItem('skills',JSON.stringify(skills));
            localStorage.setItem('address',address);
            localStorage.setItem('city',city);
            localStorage.setItem('declaration',declaration);

        }
        
  }
  render() {

    return (
      <React.Fragment>
          <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper ><Pdf /></Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className="main_content">
                        <h2 className="header">Resume</h2>
                        <Grid container className="right_side">
                           <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                               <Grid container spacing={3}>
                               <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                   <h5 className="name">FullName</h5>
                                   <TextField
                                        id="outlined-bare"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.name}
                                        onChange={this.handleName}
                                    /> 
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Email</h5>
                                   <TextField
                                        id="outlined-bare"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.email}
                                        onChange={this.handleEmail}
                                    /> 
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                  <h5 className="name">Mobile</h5>
                                   <TextField
                                        id="outlined-bare"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.phone}
                                        onChange={this.handlePhone}
                                    /> 
                            </Grid>
                               </Grid>
                           </Grid>
                        </Grid>

                        <Grid className="career_obj_main" xs={12} sm={12} md={12} lg={12} xl={12}>
                             <h5 className="career_obj">My Career Objective</h5>
                                 <textarea rows="3"  value={this.state.objective}
                                        onChange={this.handleObjective}></textarea>
                        </Grid>

                        <Grid className="degree_obj_main" xs={12} sm={12} md={10} lg={10} xl={10}>
                            <Grid container spacing={3}>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Masters Degree</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.course}
                                            onChange={this.handleCourse}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Year</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.year}
                                            onChange={this.handleYear}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">University</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.university}
                                            onChange={this.handleUniversity}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Percentage</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.percentage}
                                            onChange={this.handlePercentage}
                                        /> 
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className="degree_obj_main" xs={12} sm={12} md={10} lg={10} xl={10}>
                            <Grid container spacing={3}>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Bachelors Degree</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.course_bach}
                                            onChange={this.handleCourse1}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Year</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.year_bach}
                                            onChange={this.handleYear1}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">University</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.campus}
                                            onChange={this.handleCampus}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Percentage</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.percentage1}
                                            onChange={this.handlePercentage1}
                                        /> 
                                </Grid>
                            </Grid>
                        </Grid>  

                           <Grid className="degree_obj_main" xs={12} sm={12} md={10} lg={10} xl={10}>
                            <Grid container spacing={3}>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">HighSchool Degree</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.course_school}
                                            onChange={this.handleCourse2}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Year</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.year_school}
                                            onChange={this.handleYear2}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">School</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.school}
                                            onChange={this.handleSchool}
                                        /> 
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <h5 className="name">Percentage</h5>
                                    <TextField
                                            id="outlined-bare"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.percentage2}
                                            onChange={this.handlePercentage2}
                                        /> 
                                </Grid>
                            </Grid>
                        </Grid>  

                        <Grid className="degree_obj_main" xs={12} sm={12} md={11} lg={11} xl={11}>
                                    <h5 className="name">Skills(Upto 5,seperated by ',')</h5>
                                    <TextField
                                            id="outlined-full-width"
                                           
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.skills}
                                            onChange={this.handleSkill}
                                        /> 
                                
                        </Grid>

                        <Grid className="degree_obj_main" xs={12} sm={12} md={11} lg={11} xl={11}>
                                    <h5 className="name">Address</h5>
                                    <TextField
                                            id="outlined-full-width"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.address}
                                            onChange={this.handleAddress}
                                        /> 
                                
                        </Grid>
                        <Grid className="degree_obj_main" xs={12} sm={12} md={11} lg={11} xl={11}>
                                    <h5 className="name">City</h5>
                                    <TextField
                                            id="outlined-full-width"
                                           
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.city}
                                            onChange={this.handleCity}
                                        /> 
                                
                        </Grid>
                        <Grid className="degree_obj_main" xs={12} sm={12} md={11} lg={11} xl={11}>
                                    <h5 className="name">Declaration</h5>
                                    <TextField
                                            id="outlined-full-width"
                                            placeholder=""
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.declaration}
                                            onChange={this.handleDeclaration}
                                        /> 
                                
                        </Grid>
                        <Grid className="button_info" item xs={12} sm={12} md={11} lg={11} xl={11}>
                        
                        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                                Save
                            </Button>   
                        </Grid>
                        

                    </Paper>
                </Grid>
        </Grid>
    </React.Fragment>
    );
  }
}

export default Resume;