import React from 'react';
import { sampledata } from './sampledata';
import TableData from './TableData';

class LoadData extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            list:[],
            propList: [],
        }
    }

    componentDidMount()
    {
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
                this.propList.append(temp);
            }
            console.log("---->" + this.propList)
            this.setState({list:row});
            this.setState({propList: this.propList});
        }).catch(err => console.log(err));
    }

    render()
    {
        return(
            <>
                <TableData data={sampledata}/>
            </>
        );
    }
}
export default LoadData;