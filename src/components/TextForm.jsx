import { Button, Form, Input } from 'antd';
import React from 'react';
import './Components.css'

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
  formRef = React.createRef();
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  render() {
    return (
      <div>
        <Form {...layout} ref={this.formRef} name="input-form" onFinish={this.onFinish}>
          <Form.Item
            name="主题"
            label="主题"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='话题/原文' />
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
            <TextArea rows={4} placeholder="每条言论通过换行隔开" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
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