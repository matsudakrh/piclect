import React from 'react';
import {
  Div,
  TextArea,
  Button,
  Form,
} from '../../components/elements';

const PostArea = () => {
  return (
    <Div>
      <Form>
        <TextArea />
        <Button>
          送信
        </Button>
      </Form>
    </Div>
  );
};

export default PostArea;
