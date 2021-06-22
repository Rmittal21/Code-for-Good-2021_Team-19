import React, { Component } from 'react';
import './TableData.css';

export default class FormDataComponent extends Component {

    constructor(props) {
        super(props);

        this.state={
            list:[],
            propList: [],
        }

        console.log('mounted')
        const apiUrl='http://127.0.0.1:5000/matching';
        fetch(apiUrl).then((response)=>response.json()).then(row => {
            console.log(row);
            for (let i=0; i < row.length; i++) {
                let temp = {};
                for (let j=0;j< row[i].length; j++) {
                    if(j==0) {
                        continue;
                    } else if (j==1) {
                        temp["School Name"] = row[i][j];
                    }else if (j==2) {
                        temp["Facilitator Name"] = row[i][j];
                    } else if (j==3) {
                        temp["week"] = row[i][j];
                    } else {
                        temp["language"] = row[i][j];
                    }
                }
                this.state.propList.push(temp);
            }
            console.log("---->" + this.state.propList)
            this.setState({list:row});
            this.setState({propList: this.state.propList});
        }).catch(err => console.log(err));
    }


    render() {
        console.log(this.state.propList)
        const tableHeader=[];
        const keys=[];
        if(this.state.propList.length>=1) {
            for (let key of Object.keys(this.state.propList[0])) {
                tableHeader.push(<th key={key}>{key}</th>);
                keys.push(key);
            }
        }
        

        const tableBody = [];
        this.state.propList.map((row, index) => {
            const tableRows = [];
            keys.forEach((item) => {
                tableRows.push(<td key={row[item]}>{row[item]}</td>)
            })
            return (
                tableBody.push(
                    <tr key={index}>
                        {tableRows}
                    </tr>
                )
            )
        });



        return (
            <>
                <div class="header">
                    <h1>Schedule</h1>
                </div>
                <div className="container">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>{tableHeader}</tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            </>
            
        
        );
    }
}