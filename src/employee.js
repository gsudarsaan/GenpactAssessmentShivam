import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails } from './redux/action/service';
import { bindActionCreators } from 'redux'

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmpId: [],
      selectedDept: [],
      optionsDept: [
        { key: 'Header', text: 'Department', itemType: DropdownMenuItemType.Header },
        { key: 'HR', text: 'HR' },
        { key: 'ENGINEERING', text: 'ENGINEERING' }
      ],
      optionsEmpId: []
    };

    this.onDeptDropdownChanged = this.onDeptDropdownChanged.bind(this);
    this.onEmpIdDropdownChanged = this.onEmpIdDropdownChanged.bind(this);
    this.onClickClearFields = this.onClickClearFields.bind(this);
  }
  onClickClearFields() {
    this.setState({
      selectedEmpId: [],
      selectedDept: [],
      optionsDept: [],
      optionsEmpId: []
    });
  }
  onEmpIdDropdownChanged(event) {
    this.setState({
      selectedEmpId: event.key
    });
  }
  onDeptDropdownChanged(event) {
    this.setState({
      selectedDept: event.key
    })
    if (event.key === 'HR') {
      this.setState({
        optionsEmpId: [
          { key: '1', text: '1' },
          { key: '2', text: '2' },
          { key: '3', text: '3' },
          { key: '4', text: '4' },
          { key: '5', text: '5' }
        ]
      });
    }
    if (event.key === 'ENGINEERING') {
      this.setState({
        optionsEmpId: [
          { key: '6', text: '6' },
          { key: '7', text: '7' },
          { key: '8', text: '8' },
          { key: '9', text: '9' },
          { key: '10', text: '10' }
        ]
      });
    }
  }
  render() {
    if (this.props.employeeDetail) {
      var imagePath = this.props.employeeDetail.data.avatar;
    }
    return (
      <div >
        <div className="App" >
          <Dropdown
            className='my-dropdown'
            placeHolder="Department"
            label="Department"
            id="BasicdropDept"
            options={this.state.optionsDept}
            onChanged={this.onDeptDropdownChanged}
          />
          <Dropdown
            className='my-dropdown'
            placeHolder="Employee Id"
            label="Employee Id"
            id="BasicdropEmpId"
            options={this.state.optionsEmpId}
            onChanged={this.onEmpIdDropdownChanged}
          />

          <DefaultButton

            primary={true}
            data-automation-id="test"
            text="GET DETAILS"
            onClick={() => this.props.onClickGetDetails(this.state.selectedEmpId)}
            allowDisabledFocus={true} />
          <DefaultButton
            primary={false}
            data-automation-id="test"
            text="CLEAR FIELDS"
            onClick={this.onClickClearFields}
            allowDisabledFocus={true} />
        </div>
        {this.props.employeeDetail &&
          <div className="edetails">
            <img src={imagePath} alt=""/>
            <div className="">
              {this.props.employeeDetail.data.id}
            </div>
            <div className="">
              {this.props.employeeDetail.data.first_name + " " + this.props.employeeDetail.data.last_name}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeDetail: state.employeeDetail
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onClickGetDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Employee)