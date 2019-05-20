import React, {Component} from "react";

function StepWrapper(WrappedComponent, selectData) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                step1: {
                    inputValue: '',
                    handleChange: this.handleButtonClick,

                }
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.setState({
                step1:
                    {inputValue: e.target.value}
            })
        }

        render() {
            const {step1} = this.state;
            return <WrappedComponent step={step1} {...this.props}/>
        }

    }
}
