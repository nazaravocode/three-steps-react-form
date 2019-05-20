import React, {Component} from 'react';
import {StyledInputComponent, StyledButton} from './';


class StepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'inp1Value': '',
            'inp1': '',
            'inp2': '',
            'inp3': ''


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.inputValue = '';
    }

    render() {
        let {inp1Value} = this.state.inp1Value;
        console.log('render inp1Value', inp1Value);
        return (
            <>
                <h1> Hello {this.inputValue && this.inputValue.length > 0 ? this.inputValue : " noname"}</h1>

                <label>Enter name</label>
                <StyledInputComponent
                    onChange={this.handleChange}
                    value={this.state.inp1Value}
                />
                <StyledButton onClick={this.handleButtonClick}>Step 1</StyledButton>
            </>

        )
    }

    handleChange(e) {
        this.inputValue = e.target.value;
        console.log('callback  this.inputValue', this.inputValue);
        this.setState({
            'inp1Value': e.target.value
        }/*,() => {
            console.log('callback this.state.inp1Value', this.state.inp1Value);
        }*/)

    }

    handleButtonClick() {
        this.inputValue = this.state.inp1Value;

        console.log('inputValue- ', this.inputValue);
        this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('<- ======== shouldComponentUpdate======== ->');
        console.log('componentDidUpdate this.inputValue !== prevProps.inputValue; ->', this.inputValue !== nextProps.inputValue);
        console.log('componentDidUpdate this.inputValue ->', this.inputValue);
        console.log('componentDidUpdate nextProps.inputValue; ->', nextContext);
        console.log('<- =======end shouldComponentUpdate========= ->');
        return true;
       /* if (this.inputValue !== nextProps.inputValue) {
            return true;
        } else {
            return false;
        }*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        /*  if (this.inputValue !== '' && this.inputValue !== prevProps.inputValue ) {*/
        if (this.inputValue !== prevProps.inputValue) {
            console.log('<- ================ ->');
            console.log('componentDidUpdate this.inputValue !== prevProps.inputValue; ->', this.inputValue !== prevProps.inputValue);
            console.log('componentDidUpdate this.inputValue ->', this.inputValue);
            console.log('componentDidUpdate prevProps.inputValue; ->', prevProps.inputValue);
            return true;
        }

    }

}

export default StepForm;