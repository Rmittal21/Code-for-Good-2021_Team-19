import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeFacilitatorName = this.onChangeFacilitatorName.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            facilitatorName: '',
            language: '',
            Day: ''
        }
    }

    // Form Events
    onChangeFacilitatorName(e) {
        this.setState({ facilitatorName: e.target.value })
    }

    onChangeLanguage(e) {
        this.setState({ language: e.target.value })
    }

    onChangeDay(e) {
        this.setState({ day: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state);

        fetch(`http://127.0.0.1:5000/facilitator/${this.state.facilitatorName}/${this.state.day}/${this.state.language}/`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Form successfully Added')
                window.location.reload()
                this.setState({
                    facilitatorName: '',
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
                facilitatorName: '',
                language: '',
                day: ''
            })
        }
        console.log(this.state.FacilitatorName);
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
              <label for="FacilitatorNameEntered" class="form-label">Facilitator Name</label>
              <input type="text" class="form-control inputbar" onChange={this.onChangeFacilitatorName} id="FacilitatorNameEntered"  />
            </div>
            <div class="mb-3">
             <label for="DayEntered" class="form-label">Days Available</label>
            <input type="text" class="form-control inputbar"  onChange={this.onChangeDay} id="GradeEntered"  />
            </div>
            <div class="mb-3">
             <label for="LanguagesEntered" class="form-label">Languages Known</label>
             <input type="text" class="form-control inputbar"  onChange={this.onChangeLanguage} id="DivisionEntered"  />
             </div>
            <button type="submit" class="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
          </div>
        )
    }
}