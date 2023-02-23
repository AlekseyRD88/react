import React, { Component } from 'react';

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  hideText = () => {
    this.setState({
      isOpen: false,
    })
  }
  showText = () => {
    this.setState({
      isOpen: true,
    })
  }
  render() {
    const { isOpen } = this.state;
    const { title, children } = this.props;
    return(
      <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{title}</span>
            {!isOpen ? (
              <button className="expand__toggle-btn" onClick={this.showText}><i className="fas fa-chevron-down" ></i></button>
            ) 
          : (<button className="expand__toggle-btn" onClick={this.hideText}><i className="fas fa-chevron-down" ></i></button>)}
          </div>
          {isOpen ? (<div className="expand__content">{children}</div>) : (null)}
        </div>
    );
  }
}
  

export default Expand;