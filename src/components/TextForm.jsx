import { Button, Form, Input } from 'antd';
import React from 'react';
import './Components.css'
import axios from 'axios';

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 14,
  },
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      comments: "",
      loadingState: false
    }
  }

  changeLoadingState(flag) {
    this.setState({
      loadingState: flag
    })
  }

  formRef = React.createRef();

  onReset = () => {
    this.formRef.current.resetFields();
  };

  requestPredict = () => {
    this.changeLoadingState(true)
    let data = {
      "topic": this.state.topic,
      "comments": this.state.comments.split("\n")
    };
    axios.post('/predict', data)
      .then(res => {
        // console.log(res.data);
        this.props.setPredictData(res.data)
        this.changeLoadingState(false)
      })
  }

  render() {
    return (
      <div>
        <Form {...layout} ref={this.formRef} name="input-form">
          <Form.Item
            name="主题"
            label="主题"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='话题/原文'
              value={this.state.topic}
              onChange={(event) => {
                this.setState({
                  topic: event.target.value
                });
              }} />
          </Form.Item>
          <Form.Item
            name="待检测言论"
            label="待检测言论"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} placeholder="每条言论通过换行隔开"
              value={this.state.comments}
              onChange={(event) => {
                this.setState({
                  comments: event.target.value
                });
              }} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={() => this.requestPredict()}
              loading={this.state.loadingState}>
              提交数据
            </Button>
            <Button htmlType="button" onClick={this.onReset}
              style={{
                marginLeft: "20px"
              }}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;