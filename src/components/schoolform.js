import React, { Component } from 'react';


export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
        this.onChangeLanguages = this.onChangeLanguages.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            schoolName: '',
            language: '',
            Day: ''
        }
    }

    // Form Events
    onChangeSchoolName(e) {
        this.setState({ schoolName: e.target.value })
    }

    onChangeLanguages(e) {
        this.setState({ language: e.target.value })
    }

    onChangeDay(e) {
        this.setState({ day: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        console.log(this.state);
        fetch(`http://127.0.0.1:5000/school/${this.state.schoolName}/${this.state.day}/${this.state.language}/`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Form successfully Added')
                window.location.reload()
                this.setState({
                    schoolName: '',
                    language: '',
                    Day: ''
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error in Adding Data')
            });

        
        
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                schoolName: this.userData.schoolName,
                language: this.userData.language,
                day: this.userData.day
            })
        } else {
            this.setState({
                schoolName: '',
                language: '',
                day: ''
            })
        }
        console.log(this.state.schoolName);
        console.log(this.state.language);
        console.log(this.state.day);

    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render() {
        return (
            <div>
            <form>
            <div class="mb-3">
              <label for="SchoolNameEntered" class="form-label">School/Organization</label>
              <input type="text" class="form-control inputbar" onChange={this.onChangeSchoolName} id="SchoolNameEntered"  />
            </div>
            <div class="mb-3">
             <label for="DayEntered" class="form-label">Day Available</label>
            <input type="text" class="form-control inputbar"  onChange={this.onChangeDay} id="GradeEntered"  />
            </div>
            <div class="mb-3">
             <label for="LanguagesEntered" class="form-label">Languages Known</label>
             <input type="text" class="form-control inputbar"  onChange={this.onChangeLanguages} id="DivisionEntered"  />
             </div>
            <button type="submit" class="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
          </div>
        )
    }
}