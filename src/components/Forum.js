import React from 'react';
import {Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          error: "",
    
          comment: {
            name: "",
            message: ""
          }
        };
    
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      handleFieldChange = event => {
        const { value, name } = event.target;
    
        this.setState({
          ...this.state,
          comment: {
            ...this.state.comment,
            [name]: value
          }
        });
      };

      onSubmit(e) {
    
        e.preventDefault();
      }
    
      renderError() {
        return this.state.error ? (
          <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
      }


    

    render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
        <Container className="container-form"> 
            <Row> 
                <div className="form-group">
                    <input
                    onChange={this.handleFieldChange}
                    value={this.state.comment.name}
                    className="form-control"
                    placeholder="Username"
                    name="name"
                    type="text"
                    />
                </div>
            </Row>
            <Row> 
                    <div className="form-group">
                        <textarea
                        onChange={this.handleFieldChange}
                        value={this.state.comment.message}
                        className="form-control"
                        placeholder="Your Comment"
                        name="message"
                        rows="5"
                        />
                    </div>
          </Row>

          {this.renderError()}
        <Row> 
            
                <div className="button-comment">
                    <button disabled={this.state.loading} className="btn btn-primary">
                       Comment ➤
                    </button>
                </div>
         
          </Row>
          </Container>
        </form>
        
        <Link to="/">
                <div className="back-home">
                    <button type="button" class="btn btn-light"> 
                         Home 
                    </button>
                </div>
            </Link>
      
      </React.Fragment>
    );
  }

 
  


}

export default Forum;