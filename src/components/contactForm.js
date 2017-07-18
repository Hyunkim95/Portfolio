import React, { Component } from 'react';
import '../stylesheet/contactForm.css'
import { Message ,Grid, Step, Icon, Input, Form, Button, TextArea} from 'semantic-ui-react';

class contactForm extends Component {
  render() {
    var handleChange = this.props.handleChange
    var form = this.props.form
    var user = this.props.user
    return (
      <div>
        <Grid centered stackable>
          <Grid.Row>
            <Grid.Column>
              <div className="center-children">
                <Step.Group>
                  <Step completed={form.success} active={!form.success} icon='mail outline' title='Step 1' description='Email me' />
                  <Step active={form.success} icon='comment outline' title="Step 2" description='Lets chat about your project' />
                  <Step icon='terminal' title='Step 3' description="Let's make magic" />
                </Step.Group>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={13}>
              {form.success ? (
                <Message
                  success
                  header='Form Completed'
                  content="Cool, I'll contact you soon!"
                />
              ) : (
                null
              )}

              <Form>
                <Form.Field action={user.info.email} method="post">
                  <label>First Name</label>
                  <input placeholder='First Name' name="firstName" value={form.firstName} onChange ={handleChange}/>
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' name="lastName" value={form.lastName} onChange ={handleChange}/>
                </Form.Field>
                <Form.Field control={TextArea} name="problem" value={form.problem} label='About' placeholder='What kind of problem is it...' onChange ={handleChange}/>
                <Button type='submit' onClick={this.props.handleSubmit}>Submit</Button>
              </Form>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default contactForm;
