import React, { Component } from "react";

export default class SkillBlock extends Component {

  render() {
    return (
      <div className="d-flex flex-column align-self-start justify-content-start">
          {this.props.icons ? 
          <div className="d-flex">
              <img src={this.props.icons[0]} className="align-self-start" />
                <img src={this.props.icons[1]} className="align-self-start" />
          </div>
            : this.props.icon ?    
            <img src={this.props.icon} className="align-self-start" />
            : <></>
        }
        <span>{this.props.name}</span>
      </div>
    );
  }
}
